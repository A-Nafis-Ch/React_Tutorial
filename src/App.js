import React from 'react'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Main from './components/Routing/Main'
import Navbar from './components/Routing/Navbar'
import Home from './components/Routing/Home'
import About from './components/Routing/About'
import Contact from './components/Routing/Contact'
import Login from './components/Routing/Login'
// import Todo from './components/Todo/Todo'
// import UseRefComponent from './components/UseRef/UseRefComponent';
// import STATE from './STATE'
// import Card from './components/Card'
// import Data from './Data.json'
// import List from './components/UniqueList/List'
// import NestedMap from './components/NestedMapping/NestedMap'
// import Card1 from './components/Card1'
// import Card2 from './components/Card2'
// import ReactBootstrap from './components/ReactBootstrap/ReactBootstrap';

// import { FaYoutube } from "react-icons/fa";
// import 'bootstrap/dist/css/bootstrap.min.css';

// import CONDITIONAL_RENDERING from './CONDITIONAL_RENDERING/conren'
// import EVENT_HANDLER from './EVENT_HANDLER/EveHand';
// import EventBinding from './EVENT_BINDING/EventBinding';
// import HooksUseState from './Hooks_UseState/HooksUseState';
// import EventBubbling from './Event_Bubbling/EventBubbling';
// import FORM from './components/FORM/FORM'
// import Child from './components/STATE_LIFTING/Child'
// import Home from './components/STATE_LIFTING/Home';
// import Form from './components/Formik/Form'
// import UseEffect from './components/UseEffect/UseEffect';







function App(){

  // let Items = [];

  // Items =   Data.map((item, index) => (

  //       <Card key={index} titleText ={item.title} descText ={item.desc}/>

  // ));

  // const data = 'This is from parent component';
  // const ChildHandler = (childdata) =>{
  //   console.log('App: '+childdata);
  // }

  const router = createBrowserRouter([
    {
      path: "/",
      element:<> <Navbar /><Home /></> 
    },
    {
      path: "/about",
      element:<> <Navbar /> <About/> </> 
    },
    {
      path: "/contact",
      element:<> <Navbar /> <Contact /> </> 
    },
    {
      path: "/login",
      element:<> <Navbar />  <Login/> </> 
    },
  ])

    return <>

    <h1 className="headingStyle">Todo App</h1>

    {/* <CONDITIONAL_RENDERING /> */}


    {/* <STATE /> */}
    

    {/* < EVENT_HANDLER /> */}

    {/* <EventBinding /> */}

    {/* <HooksUseState /> */}

    {/* <EventBubbling /> */}

    {/* <FORM /> */}

    

    {/* <Child data={data} childdata = {ChildHandler}/> */}

    

    {/* {Items}
    <List />
    <NestedMap /> */}
{/* 
    <Card1 name="Nafis" Id = "132"/>
    <Card2 para = "This is card2 class component paragraph"/>
    <ReactBootstrap name = "John Cena"/>
    <FaYoutube className = 'icons' />
     */}

     {/* <Home /> */}

     {/* <Form /> */}

     {/* <UseEffect name='UseEffect' color='blue'/> */}

     {/* <UseRefComponent /> */}

     {/* <Todo /> */}
     
     <RouterProvider router={router} />
     <Main />

     
    </>
}

export default App;
