    import React, {useCallback, useEffect} from 'react'
    import {useForm} from 'react-hook-form'
    import {Button, Input, Select, RTE} from '../index'
    import appwriteService from "../../appwrite/config"
    import { useNavigate } from 'react-router-dom'
    import { useSelector } from 'react-redux'

    const PostForm = ({post}) => {//if existing post is there then we get the default value for editing them
        const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
            defaultValues:{
                title: post?.title|| "",
                slug: post?.id || "",
                content: post?.content ||"",
                status: post?.status || "active",
            },
        })

        const navigate = useNavigate()
        const userData = useSelector(state=> state.auth.userData)

        const submit = async(data)=> {
            if(post){//RHF accepts data from forms
                const file = data.image[0]? appwriteService.uploadFile(data.image[0]): null // upload image // why we using data.image instead of image id?
                
                if(file){
                    appwriteService.deleteFile(post.featuredImage)// delete the old file
                }

                const dbPost = await appwriteService.updatePost(post.$id,{...data, featuredImage: file? file.$id : undefined})// updatepost requir- slug, other data spread, and overwrite featuredImage
                if(dbPost){
                    navigate(`/post/${dbPost.$id}`)// navigate to post link
                }
            }else{
                const file = await appwriteService.uploadFile(data.image[0])
                if(file){
                    const fileId= file.$id;
                    data.featuredImage = fileId;
                    const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id});
                    if(dbPost){
                        navigate(`/post/${dbPost.$id}`)
                    }
                }
            }

        }

        const slugTransform = useCallback(value =>{// if else
            if(value && typeof value=== "string"){// type of checked for defensive measure| 2 ensure string method is used on strings only
                return value.trim().toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")//^ nagate used to exclude all the bracket items d-digits
                .replace(/\s/g, "-");//only s space is converted to "-"
            }

            return "";// serves as a fallback in case in case input "value" is not a string or is falsy
        }, [])

        useEffect(()=>{
            const subscription = watch((value,{name})=> {
                if(name==="title"){
                    setValue('slug', slugTransform(value.title), {shouldValidate: true})
                }
            })

            return()=> subscription.unsubscribe()

        },[watch, slugTransform,setValue])


    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                    // ref = {register}
                    // type= "text"
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {// input will come into this Input, so using onInput
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });// currentTarget is used while using asyncronous func inside callback, setTimeout, promices
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post? 'bg-green-500': undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    )
    }

    export default PostForm