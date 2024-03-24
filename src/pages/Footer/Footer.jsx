import React from 'react'
import './Footer.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import fb from '../../Assets/fb.png'
import insta from '../../Assets/insta.png'
import x from '../../Assets/twitter.png'
import linkedin from '../../Assets/linkd.png'


const Footer = () => {
  return (
    
        <div className='footer-section'>
            <div className="container col-12">
                <div className='left-half col-12 col-lg-4 col-md-12 col-sm-12'>
                    <h3 className='hs1'>Tourly</h3>
                    <br></br>
                    <p className='brif'>
                      Tourly: Your Gateway to Sri Lanka's Diverse Wonders. Explore Pristine Beaches, Misty Mountains, and Vibrant Culture.
                      Discover Hidden Gems with Our Comprehensive Guides and Curated Itineraries.
                  </p>
                  <br></br>
                    <div className='icons'>
                        <img src={fb} className='each-icon' />
                        <img src={insta} className='each-icon'/>
                        <img src={x} className='each-icon'/>
                        <img src={linkedin} className='each-icon'/>
                    </div>
                </div>



                <div className='right-half row col-12 col-lg-8 col-md-12 col-sm-12'>

                <div className='links1 col-12 col-lg-4 col-md-3 col-sm-12 '>
                <h3 className='hs'>Quick Links</h3>
                    <br></br>
                    <div className='quick-link'>
                        {/* <Link to='Home'>Home</Link> */}
                        <p className='p1'>Home</p>
                        <p className='p1'>About</p>
                        <p className='p1'>Places</p>
                        <p className='p1'>Home</p>
                    </div>
                </div>

                {/* <div className='links1 col-12 col-lg-4 col-md-3 col-sm-12 '>
                <h3 className='hs'>Tourly</h3>
                    <br></br>
                    <div className='quick-link'>
                        {/* <Link to='Home'>Home</Link> */}
                        {/* <p className='p1'>Home</p>
                        <p className='p1'>About</p>
                        <p className='p1'>Places</p>
                        <p className='p1'>Home</p>
                    </div>
                </div> */}

                <div className='links1 col-12 col-lg-3 col-md-2 col-sm-12 '>
                <h3 className='hs'>Contacts</h3>
                    <br></br>
                    <div>
                       
                        <div className='contact'>
                        <img src='./phn.jpg' className='each-icon'/>
                        <p className='p1'>+94 767 863 542 </p>
                        </div>
                           
                        <div className='contact'>
                        <img src='./phn.jpg' className='each-icon'/>
                        <p className='p1'>+94 767 863 542 </p>
                        </div>

                        <div className='contact'>
                        <img src='./phn.jpg' className='each-icon'/>
                        <p className='p1'>+94 767 863 542 </p>
                        </div>
                    </div>
                </div>
                </div>

                
            </div>
        </div>
   
  )
}

export default Footer