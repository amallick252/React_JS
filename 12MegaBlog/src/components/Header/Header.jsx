import React from "react";
import { Container, LogoutBtn, Logo } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItem = [
    {
      name: "Home",
      slug: "/",
      active: true,
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
  ];

  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="m-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItem.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (// if authStatus available then render LogoutBtn
              <li><LogoutBtn/></li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;

// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import {LogoutBtn, Logo} from '../index'
// import { useSelector } from 'react-redux'

// function Header() {

//   const authStatus = useSelector((state)=> state.auth.status)
//   const navigate = useNavigate()


//   const navItem = [
//     {
//       name:'Home',
//       slug: '/',
//       status: true,
//     },
//     {
//       name:'All Post',
//       slug: '/all-posts',
//       status: authStatus,
//     },
//     {
//       name:'Add Post',
//       slug: '/add-post',
//       status: authStatus,
//     },
//     {
//       name:'Login',
//       slug: '/login',
//       status: !authStatus,
//     },
//     {
//       name:'Singup',
//       slug: '/signup',
//       status: !authStatus,
//     },
//   ]
//   return (
//     <div className='bg-slate-500 p-2'>
//     <div className='flex justify-between mx-4'>
//       <Logo className='p-4'/>
//       <div>
//       {navItem.map((item)=> 
//       item.status?(
//         <button key={item.name} className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
//         onClick={()=> navigate(item.slug)}>
//           {item.name}
//           </button>
//       ):null
//       )}
//       {authStatus ? (<LogoutBtn/>): null}
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Header