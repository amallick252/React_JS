import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Layout from './Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import User from './components/User'
import Github, {loaderInfo} from './components/Github'
import Github2 from './components/Github2'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout/>}>
      <Route path = '' element = {<Home/>}/>
      <Route path= 'about' element = {<About/>}/>
      <Route path = 'contact' element = {<Contact/>}/>
      <Route path = 'user/:userid' element = {<User/>}/>
      <Route loader = {loaderInfo} path = 'github' element = {<Github/>}/>
      <Route path = 'github2' element = {<Github2/>}/>
    </Route>
  )
)

// const router = createBrowserRouter([
//   {
//     path :'/',
//     element : <Layout/>,
//     children : [
//       {
//         path:'',
//         element:<Home/>
//       },
//       {
//         path:'about',
//         element:<About/>
//       },
//       {
//         path:'contact',
//         element:<Contact/>
//       },
//       {
//         loader:loaderInfo,
//         path:'github',
//         element:<Github/>
//       },
//       {
//         path:'github2',
//         element:<Github2/>
//       },
//     ]
//   }
// ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>,
)
