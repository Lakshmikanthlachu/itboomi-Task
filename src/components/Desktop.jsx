import React from 'react'
import Createpost from "../images/illustration-create-post.webp"
import star from "../images/illustration-five-stars.webp"
import besttime from "../images/illustration-schedule-posts.png"
import tips from "../images/illustration-ai-content.webp"
import tag from "../images/illustration-multiple-platforms.png"


export default function Desktop() {
  return (
    <>
      <div className="container-fluid py-5 px-5" >
        <div className="container mx-auto bg-white shadow" style={{padding:"45px 75px"}}>
            <div className="row">
            <div className="col-lg-3 m-0" >
                <div className="row rounded text-wrap firstcont g-2" style={{backgroundColor:"hsl(31, 66%, 93%)"}}>
                <p className='firstpara'>Create and Schedule content <i className='italic1'>quicker.</i> </p>
                <div className="container px-4">
                    <img src={Createpost} alt="No image" className='col-lg-12' style={{}}/>
                </div>
                </div>

                <div className="row rounded g-2 mt-3 row2cont" style={{backgroundColor:"hsl(39, 100%, 71%)"}}>
                   <p className='row2para'>Write your content using AI. </p>
                <div className="container px-4">
                    <img src={tips} alt="No image" className='col-lg-12' style={{}}/>
                </div>
                </div>
                </div>
            

            <div className="col-lg-6 m-0">
                 <div className="row rounded g-2 seccont">
                <p className='secpara text-center'>Social Media <span className='tenx'> 10x </span> 
                <div><i className='faster'> Faster with AI </i> </div> </p>
                <div className='col-lg-12 text-center'>   
                    <img src={star} alt="no image" className='' style={{height:"5vh"}}/>    
                </div>
                <p className='over'>Over 4000 5-star reviews</p>   
            </div>

            <div className="row">
                <div className="container d-flex">
                <div className="col-lg-6" >
                    <div className="rounded g-2 mt-3" style={{backgroundColor:"white"}}>
                        <img src={tag} alt="no image" className='col-lg-12' style={{height:"10vh"}} />
                        <p className='managepara'>Manage multiple accounts and platforms.</p>
                    </div>   
                </div>
                
                <div className="col-lg-6 ps-2">
                    <div className="rounded g-2 mt-3" style={{backgroundColor:"hsl(39, 100%, 71%)"}}>
                        <p className='managepara'>Maintain a Consistent posting Schedule</p>
                    </div> 
                </div>
                </div>
                </div>
            </div>

            <div className="col-lg-3 m-0">
                <div className="row rounded thirdcont g-2">
                <p className='thirdpara m-0'>Schedule to social media.</p>
                <img src={besttime} alt="no image" style={{overflow:"hidden", paddingRight:"0px", paddingLeft:"20px", height:"35vh"}} />
                <p className='optimize'>Optimize post timings to publish content at the perfect time for your audience.</p>
                </div>
            </div>
            
            </div>
        </div>
      </div>
    </>
  )
}
