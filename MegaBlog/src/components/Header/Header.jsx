// import React from 'react'
import {Button, Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <header className='py-2 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'   />

              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-400 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header

// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import {Logo,Container, Button, LogoutBtn} from '../index'
// import { useSelector } from 'react-redux'

// function Header() {
//   const navigate = useNavigate();
//   const authStatus = useSelector((state) => state.auth.status);

//   const navBar = [
//     {
//       name: "Home",
//       slug: "/",
//       status: true,
//     },
//     {
//       name: "All Posts",
//       slug: "/all-posts",
//       status: authStatus,
//     },
//     {
//       name: "Add Post",
//       slug: "/add-post",
//       status: authStatus,
//     },
//     {
//       name: "Login",
//       slug: "/login",
//       status: !authStatus,
//     },
//   ];

//   return (
//    <Container>
//      <div className='flex flex-row justify-between'>
//       <Link to="/">
//         <Logo />
//       </Link>
//       <ul className='flex justify-between'>
//         {navBar.map((item) => {
//           return (
//             <li key={item.name} className='rounded-full'>
//               {item.status ? (
//                 <Button onClick={() => navigate(item.slug)} className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' >{item.name}</Button>
//               ) : null}
//             </li>
//           );
//         })}
//         {authStatus ?
//           <LogoutBtn />: null
//         }
//       </ul>
//     </div>
//     </Container>
//   );
// }

// export default Header;