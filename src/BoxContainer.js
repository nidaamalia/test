import React,{ Component } from 'react'
import './BoxContainer.css'
import Box from './Box'
import { rgbValue, generateColors } from './helpers'
  
class BoxContainer extends Component{ 
  
  // Number of color boxes want shows by default 
  static defaultProps = { 
    num : 40 
  } 

  constructor(props){ 
    super(props) 
    this.state = {       
      // Color state contains array of rgb color values       
        colors : generateColors(this.props.num),        
        username: '',
        checkDarkness: '',
        tmp : []
    }   
    //console.log(this.state.colors)
  }   

  myCheckHandler = (event) => {    
    
    if(event.target.checked){
      this.setState({checkDarkness: event.target.value});
      //console.log(this.state.colors.length)
      for (var i in this.state.colors){
        var res = this.state.colors[i].split(",");
        res = res[2]
        var val = parseFloat(res.slice(0, -2))
        if (val > 50.00 ){
          this.state.tmp[i] = this.state.colors[i]
          console.log("tmp", this.state.tmp[i])
          this.state.colors[i] = `hsl(0,0%,100%)`;
          //console.log(res, val)
        }
        
      }
    }
    else{
      for (var i in this.state.colors){
        var res = this.state.colors[i].split(",");
        res = res[2]
        var val = parseFloat(res.slice(0, -2))
        if (val > 50.00 ){
          this.state.colors[i] = this.state.tmp[i];
          console.log("tmp", this.state.tmp[i])
        }        
      }      
      this.setState({checkDarkness: "Inactive"})
      
    }
  }

  render(){  
    return( 
      <div>        
        
          <h1>Only Show the Darker Color: {this.state.checkDarkness}</h1>
          <input type="checkbox" name="darker" value="Active" onChange={this.myCheckHandler}/>
          <label > Darker Color</label><br></br>
       
        <div className='BoxContainer'> 
          {this.state.colors.map(color => ( 
            
            // For each color make a box component 
            <Box color={color} changeColor={this.changeColor}/> 
          ))} 
        </div> 
      </div>
    ) 
  } 
} 
  
export default BoxContainer