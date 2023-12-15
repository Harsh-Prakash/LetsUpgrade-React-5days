import React from 'react'

const Footer = () => {
  return (
    <div className='my-3'>
        <h3 className='my-3' style={{position:"relative",left:"120px"}}>Click Here!</h3>
      <button type="button my-10" class="btn btn-primary" style={{position:"relative",left:"150px",scale:"1.25"}} onClick={()=>{
            console.log("You clicked on me!")
        }}>Primary</button>
      <div className="container my-3 d-flex align-items-center justify-content-center bg-black">
        <p className='text-white'>Made by Harsh Prakash. 2023</p>
      </div>
    </div>
  )
}

export default Footer
