import React,{Component} from 'react';
import './App.css';
import Data from './data/data.json';

var styles={
      background:"#ddd",
      color:"#000",
      textAlign:"center",
      padding:"1%"
    }
    
class Profile extends Component{
	render(){
		var indexValue=this.props.location.data.id;
	    var specificProfile=Data.profiles[indexValue];    
	    return(
	    	<div>
              <h2>{specificProfile.basicInfo.name} </h2>
	    	</div>)
	}
}

export default Profile;