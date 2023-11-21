import React, { useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Input, Button, Select, RTE } from "./index";
import { useForm } from "react-hook-form";

import React from "react";

const PostForm = ({ post }) => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const { register, handleSunbmit, watch, setValue, getValues } = useForm({
    defaultValues: {
      title: post?.title || "title",
      slug: post?.slug || "",
      content: post?.content || "",
      status: post?.status || "active",
    },
  });

  const submit = async (data) => {
    if (post) {
      const file = (await data.image[0])
        ? appwriteService.uploadFile(data.image[0])
        : null;
      if (file) {
        await appwriteService.deleteFile(post.featuredImage);
      }

      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await appwriteService.uploadFile(data.image[0]);
      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = appwriteService.createPost({
          ...data,
          userId: userData.$id,
        });
        if (dbPost) {
          navigate(`post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\s\d]/g, "-")
        .replace(/[\s]/g, "-");
    }

    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [slugTransform, watch]);

  return (
    <div>
      <div className="w-2/3 px-2">
        <Input
          type="text"
          label="Title:"
          {...register("title", { required: true })}
        />
        <Input
          type="text"
          label="Slug:"
          {...register("slug", { required: true })}
        />
        <RTE
          label="Content"
          control={control}
          name="content"
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/3">
        <Input
          type="file"
          label="Featured Image:"
          {...register("image", { required: !post })}
        />
        <img src = {appwriteService.getFilePreview(post.featuredImage)}/>
        <Select
        options={["active", "inactive"]}
        label= "status"
        {...register('status', {required:true})}
        />
        <Button type = "submit" bgColor={post? 'bg-green-500': undefined}>{post? "update": "submit"}</Button>
      </div>
    </div>
  );
};

export default PostForm;
