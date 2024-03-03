import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layouts/Main";
import Index from "./pages/Index";
import About from "./components/users/About";
import Contact from "./components/users/Contact";
import Class from "./components/users/Class";
import Trainer from "./components/users/Trainer";
import Yoga from "./components/users/Yoga";
import Cardio from "./components/users/Cardio";
import Zumba from "./components/users/Zumba";
import AdminMain from "./layouts/AdminMain";
import Sessions from "./components/admin/Sessions";
import Trainers from "./components/admin/Trainer";
import Classs from "./components/admin/Class";
import AddTrainer from "./components/admin/AddTrainer";
import EditTrainer from "./components/admin/EditTrainer";
import AddClass from "./components/admin/AddClass";
import EditClass from "./components/admin/EditClass";
import AddSessions from "./components/admin/AddSessions";
import EditSessions from "./components/admin/EditSessions";
import Login from "./Auth/Login";


function App() {
  
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Main />,
        children: [
          {
            index: true,
            element: <Index   />,
          },
          {
            path:"/about",
            element: <About/>
          }
          ,
          {
            path:"/contact",
            element: <Contact/>
          }
          , 
          {
            path:"/class",
            element: <Class/>
          }
          , 
          {
            path:"/trainer",
            element: <Trainer/>
          }
          , 
          {
            path:"/yoga",
            element: <Yoga/>
          }, 
          {
            path:"/cardio",
            element: <Cardio/>
          }, 
          {
            path:"/zumba",
            element: <Zumba/>
          }
         
        ]
        }
        ,{
          path: "/admin/",
          element: <AdminMain />,
          children : [
            {
              index: true,
              element: <Trainers   />,
            }
            ,
            {
              path:"/admin/class",
              element: <Classs/>
            },{
              path:"/admin/sessions",
              element: <Sessions/>
            }
            ,{
              path : "/admin/add-trainer",
              element:<AddTrainer/>
            }
            ,{
              path : "/admin/edit-trainer/:id",
              element:<EditTrainer/>
            }
            ,{
              path : "/admin/add-class",
              element:<AddClass/>
            }
            ,{
              path : "/admin/edit-class/:id",
              element:<EditClass/>
            }
            ,{
              path : "/admin/add-sessions",
              element:<AddSessions/>
            }
            ,{
              path : "/admin/edit-sessions",
              element:<EditSessions/>
            }
          ]
        },
        {
          path:"/login",
          element:<Login/>
        }
        
])
return <RouterProvider router={router}/>
}

export default App;
