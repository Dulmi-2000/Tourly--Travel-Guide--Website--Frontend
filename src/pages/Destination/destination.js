import React from 'react';
import './destination.css'
import 'bootstrap/dist/css/bootstrap.css';
import { CiLocationOn } from "react-icons/ci";

export default function Destination() {
  return (
    <div className='container full'>
      
      
      <h1 className='topic col-12 '>Arugam Bay</h1>
      <br></br>
      <div className='imagebox col-12'>

        <div className=' col-12 col-lg-8 col-md-8 col-sm-12'>
          <img src='https://us.lakpura.com/cdn/shop/files/LKI9256041-01-E.jpg?v=1661430881&width=3840'
            alt='' className='imagelink1'>
            
          </img>
        </div>

        <div className='twoimages col-12 col-lg-4 col-sm-4'>
        
      
        <div className=''>
        <img src='https://image-converter.sporski.com/imageConverter.php?url=%2F%2Fuploads.takeoffsurftravel.com%2F20170111180051_Untitled-1.jpg'
            alt='' className='imagelink2'>
            
          </img>
        </div>
        <div className=''>
        <img src='https://geckoroutes.com/wp-content/uploads/2020/03/arugam-bay-sri-lanka.jpg'
            alt='' className='imagelink2'>
            
          </img> 
        </div>
        </div>

      </div>

      <span className='content-flex locationd col-12'>
        <CiLocationOn className='iconsearch' />
          <span className='name col-12'> Trincomalee District </span>
          </span>
    
      
      <div className='row2'>
        <br></br>
        
        <h3 className='destDetails'>Destination Details</h3>
       <br/>
        <p>
          Sigiriya, nestled in Sri Lanka's Cultural Triangle, is a marvel of ancient architecture. This UNESCO World Heritage Site features a majestic rock fortress soaring from the plains, offering panoramic views.
          Its renowned frescoes, the Sigiriya Damsels, adorn the rock face, showcasing ancient artistry. The Lion Gate entrance, with colossal lion paws, leads to the summit, while the Mirror Wall displays ancient inscriptions.
        </p>

        <p>
        Elaborate water gardens highlight advanced hydraulic engineering. Sigiriya stands as a testament to ancient Sri Lanka's ingenuity, drawing visitors with its history and architectural brilliance, offering a glimpse into the island's rich heritage and captivating natural beauty.
        </p>
        <div>
          <br>
          </br>

          
          <h3>Things To Do</h3>
        <br></br>
          <div>
            <ul className='dolist'> 
              <li>
                <b>Beach Relaxation: </b>Spend leisurely hours soaking up the sun and lounging on the
                golden sands of Unawatuna Beach.
              </li>
              <li>
                <b>Snorkeling: </b>Explore the colorful underwater world teeming with marine life by snorkeling
                in the crystal-clear waters.
              </li>
              <li>
              <b> Scuba Diving: </b>Dive into the depths of the ocean to discover vibrant coral reefs, exotic fish,
                and intriguing shipwrecks.
              </li>
              <li>
              <b>Surfing: </b>Ride the waves at nearby beaches like Dalawella and Midigama, perfect for both beginners
                and experienced surfers.
              </li>
              <li>
              <b>Whale Watching: </b>Embark on a thrilling boat excursion to witness majestic whales breaching the
                surface of the Indian Ocean.
              </li>
              <li>
              <b>Turtle Hatchery Visit: </b>Learn about sea turtle conservation efforts and even participate in releasing
                hatchlings into the sea.
              </li>
              <li>
              <b>Yoga and Wellness Retreats: </b>Rejuvenate your mind and body with yoga sessions and holistic wellness treatments
                offered by local retreat centers.
              </li>
              <li>
              <b> Cultural Experiences:</b> Visit nearby attractions like the Japanese Peace Pagoda and Galle Fort to immerse yourself in
                the rich history and culture of the region.
              </li>
            </ul>
             
            <br></br>
            <div className='row3'>
              <h3>Best Time To Visit</h3>
              <br></br>
            </div>
            <b>December to March</b>
            <p>The best time to visit Unawatuna is during the dry season.
              During this period, you can expect sunny weather and minimal rainfall, making it ideal for beach activities, water sports, and exploring the area.
              However, it's worth noting that Unawatuna is a popular tourist destination year-round due to its warm climate and stunning beaches.
              Even during the wet season,
              from April to November, you can still enjoy your visit, although there may be occasional rain showers.
            </p>

<br></br>

            <div className='row4'>
              <h3>View On Map</h3>
              <div className="map-container">
      <iframe
        title="Google Map"
        className="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63222.843153870876!2d80.7030355555643!3d7.954676169778976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afca0dfa73179d1%3A0x1e04c1150cff0edf!2sSigiriya!5e0!3m2!1sen!2slk!4v1710927679570!5m2!1sen!2slk"
        allowFullScreen
      ></iframe>
              </div>
              
              </div>
      </div>
          </div>
        </div>
      </div>

      
  )
}
