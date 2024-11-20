import React from 'react'
import Left from './Home/Left'
import Right from './Home/Right'

const App = () => {
  return (
    // ,margin:'8% 15%'
    <div style={{display:'flex',justifyContent:'center'}}>
      
    <div style={{width:"50%",paddingTop:'10%',paddingLeft:'5%'}}>
      <Left/>
    </div>
    <div style={{width:"50%",paddingTop:'10%',paddingLeft:'5%',backgroundColor:'red'}}>
      <Right/>
    </div>
      
    </div>
  )
}

export default App