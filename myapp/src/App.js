import React from 'react';
import './App.css';
import Data from './data/data.json';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Profile from './Profile'

var App=()=>{
  return(
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/Profile" component={Profile} />
    </BrowserRouter>
    );
}


let Home=()=>{
  var info = Data.profiles;
  return(
    <section className="parent">
     {info.map((i,index)=>(
      <article className="child" key={index}>
       <h2> {i.basicInfo.name} </h2>
       <p> {i.basicInfo.role} </p>
       <a href={"mailto:"+i.basicInfo.email}>{i.basicInfo.email}</a><br />
      <a href={"tel:"+i.basicInfo.mobile}>{i.basicInfo.mobile}</a><br />
      <Link to={{pathname:"/Profile",data:{id:index}}}>Viewprofile >></Link>
      </article>
      ))
     }
</section>
    );
}

export default App;