import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import DashBoardLayout from "../components/layout/DashBoardLayout";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import AddNewBlog from "../pages/AddNewBlog";
import AddNewProject from "../pages/AddNewProject";
import AddNewSkills from "../pages/AddNewSkills";
import About from "../components/ui/home/About";
import Contact from "../components/ui/home/Contact";
import Blogs from "../components/ui/home/Blogs";
import BlogDetails from "../components/ui/home/BlogDetails";
import Project from "../components/ui/home/Project";
import ProjectDetails from "../components/ui/home/ProjectDetails";

 export const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path:'/skill',
                element: <Skills/>
            },
            {
                path:'/project',
                element: <Project/>
            },
            {
                path:'/project/:id',
                element: <ProjectDetails/>,
                loader: ({params}) => fetch(`http://localhost:3000/project/${params.id}`)
            },
            {
                path:'/blogs',
                element: <Blogs/>
            },
            {
                path:'/blogs/:id',
                element: <BlogDetails/>,
                loader: ({params}) => fetch(`http://localhost:3000/blogs/${params.id}`)
            },
            {
                path:'/about',
                element: <About/>
            },
            {
                path:'/contact',
                element: <Contact/>
            },
        ]
    },
    {
        path: '/dashboard',
        element:<DashBoardLayout/>,
        children:[
            {
                path: '/dashboard/add-blog',
                element: <AddNewBlog/>
            },
            {
                path: '/dashboard/add-project',
                element: <AddNewProject/>
            },
            {
                path: '/dashboard/add-skill',
                element: <AddNewSkills/>
            }
        ]
    }
])

