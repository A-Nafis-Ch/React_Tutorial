import React from 'react'
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
import EventBubbling from './Event_Bubbling/EventBubbling';




function App(){

  // let Items = [];

  // Items =   Data.map((item, index) => (

  //       <Card key={index} titleText ={item.title} descText ={item.desc}/>

  // ));

    return <>

    <h1 className="headingStyle">Todo App</h1>

    {/* <CONDITIONAL_RENDERING /> */}


    {/* <STATE /> */}
    

    {/* < EVENT_HANDLER /> */}

    {/* <EventBinding /> */}

    {/* <HooksUseState /> */}

    <EventBubbling />

    

    {/* {Items}
    <List />
    <NestedMap /> */}
{/* 
    <Card1 name="Nafis" Id = "132"/>
    <Card2 para = "This is card2 class component paragraph"/>
    <ReactBootstrap name = "John Cena"/>
    <FaYoutube className = 'icons' />
     */}





     

   



    
    </>
}

export default App;
