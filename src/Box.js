import React,{ Component } from 'react'
  
class Box extends Component{ 
  constructor(props){ 
    super(props)     
  }   
  
  render(){ 
    
    // Create a div component and assign the given  
    // color value by BoxContainer component as its 
    // background color 
    return <div 
      
    // Set click handler to the div and pass a callback       
      style={{backgroundColor:this.props.color,  
                  width:'15em', height:'15em'}}  
    /> 
  } 
} 
  
export default Box