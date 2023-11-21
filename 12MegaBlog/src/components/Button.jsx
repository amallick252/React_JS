import React from 'react'

const Button = ({
    children,
    type='button',
    bgColor='bg-blue-600',
    textColor='text-white',
    className='',
    ...props
}) => {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className} `}  {...props}
    >{children}</button>
  )
}

export default Button

// import React from 'react'

// function Button({
//   children,
//   textColor='text-white',
//   borderRadius='rounded-lg',
//   className='',
//   ...props
  
// }) {
//   return (
//     <button className={`px-4 py-2 bg-blue-600 ${textColor} ${borderRadius} ${className}`} {...props} >{children}</button>
//   )
// }

// export default Button