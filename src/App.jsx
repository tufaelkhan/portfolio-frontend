import { RouterProvider } from "react-router-dom"
import { routers } from "./router/routes"
import { useEffect } from "react";
import { initAOS } from "../aosConfig";

function App() {
  useEffect(() => {
    initAOS();  // Initialize AOS here
  }, []);
  
  return (
    <div>
      <RouterProvider router={routers}/>
    </div>
  )
}

export default App
