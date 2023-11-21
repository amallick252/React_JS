import React from 'react'
import service from '../appwrite/config'
import {Link} from 'react-router-dom'

const PostCard = ({$id, title, featuredImage}) => {
  return (
    <Link to={`/post/${$id}`}>    {/* from here to the path we want to visit */}
    <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
            <img src={service.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
    </div>
    </Link>
  )
}

export default PostCard

// import React from 'react'
// import {Link} from 'react-router-dom'
// import service from '../appwrite/config'

// function PostCard({$id, title, featuredImage}) {
//   return (
//     <Link to={`/post/${$id}`}>
//     <div className='w-full bg-gray-500 justify-center mb-4 p-4'>
//       <img src={service.getFilePreview(featuredImage)} alt={title} className='rounded-xl'/>
//       <h2>{title}</h2>
//     </div>
//     </Link>
//   )
// }

// export default PostCard