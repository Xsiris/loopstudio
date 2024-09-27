import { useState, useEffect } from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';

function App() {
  const screenSm = 640;
  const screenMd = 768;
  const screenLg = 1024;
  const screenXl = 1280;
  const screen2Xl = 1536;
  
  const [screenSizeSm, setScreenSizeSm] = useState(false);
  const [screenSizeMd, setScreenSizeMd] = useState(false);
  const [screenSizeLg, setScreenSizeLg] = useState(false);
  const [screenSizeXl, setScreenSizeXl] = useState(false);
  const [screenSize2Xl, setScreenSize2Xl] = useState(false);
  const resetScreenState = () => {
    setScreenSizeSm(false);
    setScreenSizeMd(false);
    setScreenSizeLg(false);
    setScreenSizeXl(false);
    setScreenSize2Xl(false);
  }
  // Array of functions different components subscribe event listeners to for screen resize event
  //let screenResizeCallbacks = [];
  //choose the screen size 
  /*const handleResize = () => {
    if (window.innerWidth < screenMd) {
      resetScreenState();
      setScreenSizeSm(true)
      console.log("SCREEN IS NOW MOBILE")
      screenResizeCallbacks.forEach((func) => {func(screenSm)})
    } else if(window.innerWidth >= screenMd && window.innerWidth < screenLg){
      resetScreenState();
      setScreenSizeMd(true)
      console.log("SCREEN IS NOW MEDIUM");
      screenResizeCallbacks.forEach((func) => {func(screenMd)})
    }else if(window.innerWidth >= screenLg && window.innerWidth < screenXl){
      resetScreenState();
      setScreenSizeLg(true)
      console.log("SCREEN IS NOW LARGE");
      screenResizeCallbacks.forEach((func) => {func(screenLg)})
    }else if(window.innerWidth >= screenXl && window.innerWidth < screen2Xl){
      resetScreenState();
      setScreenSizeXl(true)
      console.log("SCREEN IS NOW XTRA LARGE");
      screenResizeCallbacks.forEach((func) => {func(screenXl)})
    }else if(window.innerWidth >= screen2Xl){
      resetScreenState();
      setScreenSize2Xl(true)
      console.log("SCREEN IS NOW 2XL");
      screenResizeCallbacks.forEach((func) => {func(screen2Xl)})
    }
  }*/
  // create an event listener
  /*useEffect(() => {
    window.addEventListener("resize", handleResize)
    // Handle resize once to init screen useState
    handleResize();
  })*/

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/loopstudio" element={<MainLayout />}>
          <Route index element={<HomePage /*screenResizeCallback={screenResizeCallbacks}*/ />} />
      </Route>
  ));

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
