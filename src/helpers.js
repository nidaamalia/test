// Method return a random number from 0 to 255  
const rgbValue = () => { 
    return Math.floor(Math.random() * 256) 
  } 
    
  // Method generates an array of rgb colors 
  const generateColors = (num) => { 
    let colors = [] 
      
    for(let i=0; i<num; i++){ 
      var r = rgbValue()/255
      var b = rgbValue()/255
      var g = rgbValue()/255

      var max = Math.max(r, g, b)
      var min = Math.min(r, g, b)
      var h, s, l = (max + min) / 2

      if(max == min) {
        h = s = 0; // achromatic
      } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
      }

      colors.push(`hsl(${h*360},${s*100+'%'},${l*100+'%'})`) 
    } 
    return colors 
  } 
    
  export { rgbValue, generateColors }