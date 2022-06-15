import React, {useState} from 'react'

const FunctionalComponent = () => {
    const [toggle,setToggle]=useState(false);
  return (
    <>
    <button className='btn1' onClick={()=> setToggle(!toggle)}>To See Styling In Functional Component</button>
    {toggle && (
    <div className='card'>
        <h1>This is created using Functional Component</h1>
        <p id='pf'>This is done using external css</p>
        <p style={{color:'blue'}}>This is done using inline css</p>
    </div>
    )}
    </>
  )
}

export default FunctionalComponent