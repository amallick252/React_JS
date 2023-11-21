// import React from 'react'
// import {Editor} from '@tinymce/tinymce-react'
// import { Controller } from 'react-hook-form'

// export default function RTE({name, control, label, defaultValue= ""}) {//control from RHF will pass state data to who ever calls this component

//   return (
//     <div className='w-full'>
//         {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

//         <Controller // it will pass control to somewhere
//         name= {name || "content"}
//         control={control}
//         render={({field: {onChange}})=>(
//             <Editor
//             initialValue={defaultValue}//it can be the prefilled text in the editor as a string
//             init={{// what values do you want in it, when it initializes
//                 initialValue: defaultValue,
//                 height: 500,
//                 menubar: true,
//                 plugins: [// must have the plugins, which we are using in toolbar
//                     "image",
//                     "advlist",
//                     "autolink",
//                     "lists",
//                     "link",
//                     "image",
//                     "charmap",
//                     "preview",
//                     "anchor",
//                     "searchreplace",
//                     "visualblocks",
//                     "code",
//                     "fullscreen",
//                     "insertdatetime",
//                     "media",
//                     "table",
//                     "code",
//                     "help",
//                     "wordcount",
//                     "anchor",
//                 ],
//                 toolbar:
//                 "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
//                 content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
//             }}
//             onEditorChange={onChange}// if {field: {onChange}} , you need to pass the onChange in the <Editor/> component
//             />
//         )}
//         />

//     </div>
//   )
// }

import React from 'react'
import {Editor } from '@tinymce/tinymce-react';
import {Controller } from 'react-hook-form';


export default function RTE({name, control, label, defaultValue =""}) {
  return (
    <div className='w-full'> 
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    <Controller
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => (
        <Editor
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor link | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
    )}
    />

     </div>
  )
}


