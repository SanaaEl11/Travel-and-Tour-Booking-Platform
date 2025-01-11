import React,{useEffect} from 'react'
import './footer.scss';
import { FaChevronRight } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import video2 from '../../assets/video.mp4'
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import  Aos from 'aos'
import 'aos/dist/aos.css'
const Footer = () => {
  useEffect(()=>{
      Aos.init({duration:2000})
    },[])
  return (
   <section className='footer'>
      <div className="videoDiv">
        <video src={video2} muted autoPlay loop type='video/mp4'></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos='fade-up'  className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>



          <div className="inputDiv flex">
            <input data-aos='fade-up'  type="text" placeholder=" Enter  Email Address" />
            <button data-aos='fade-up'  className="btn flex" type="submit">
           SEND <FiSend className='icon' /></button>
          </div>
          <div className="footerCard">
            <div className="footerIntro flex">
              <div className="logoDiv">
                <a href="/" className='logo flex'>
                <MdOutlineTravelExplore className='icon' />Travel.</a>
              </div>

              <div  data-aos='fade-up' 
              className="footerParagaph">Lorem ipsum dolor
                 sit, amet consectetur adipisicing elit. 
                 Quibusdam sint vitae suscipit, placeat numquam
                  maxime veritatis in magni non asperiores. 
                  Pariatur, veritatis fuga. Consequuntur, 
                veritatis hic rem necessitatibus quia cum!</div>
           <div data-aos='fade-up'  className="footerSocials flex">
                  <FaTwitter className='icon' />
                  <FaYoutube className='icon' />
                  <AiFillInstagram  className='icon' />
                  <FaTripadvisor className='icon' /></div>
            </div>

            <div   className="footerLinks grid">
              {/*group one */}
              <div data-aos='fade-up'data-aos-duration="4000" className="linkGroup">
                <span className="groupTitle">OUR AGENCY</span>
              <li className="footerlist flex">
              <FaChevronRight className='icon' /> Serivces
              </li>
              <li className="footerlist flex">
              <FaChevronRight className='icon' /> Insurance
              </li>
              <li className="footerlist flex">
              <FaChevronRight className='icon' /> Agency
              </li>
              <li className="footerlist flex">
              <FaChevronRight className='icon' /> Tourism
              </li>
              <li className="footerlist flex">
              <FaChevronRight className='icon' /> Payement
              </li>
              </div>
                {/*group two */}
              <div data-aos='fade-up' data-aos-duration="4000" className="linkGroup">
                <span className="groupTitle">PARTNERS</span>
              <li className="footerlist flex">
              <FaChevronRight className='icon' /> Booking
              </li>
              <li className="footerlist flex">
              <FaChevronRight className='icon' /> Rentcars
              </li>
              <li className="footerlist flex">
              <FaChevronRight className='icon' /> hostelworld
              </li>
              <li className="footerlist flex">
              <FaChevronRight className='icon' />Trivago
              </li>
              <li className="footerlist flex">
              <FaChevronRight className='icon' /> TripAdvisor
              </li>
              </div>
              {/*group three */}
              <div data-aos='fade-up' data-aos-duration="4000" className="linkGroup">
                <span className="groupTitle">LAST MINUTE</span>
              <li className="footerlist flex">
              <FaChevronRight className='icon' />London
              </li>
              <li className="footerlist flex">
              <FaChevronRight className='icon' /> California
              </li>
              <li className="footerlist flex">
              <FaChevronRight className='icon' /> Indonesia
              </li>
              <li className="footerlist flex">
              <FaChevronRight className='icon' /> Europe
              </li>
              <li className="footerlist flex">
              <FaChevronRight className='icon' />Oceania
              </li>
              </div>
            </div>

            <div className="footerDiv flex">
                  <small>BEST TRAVEL WEBSITE</small>
                  <small>COPYRIGHT RESERVED -SANAA ELHAFER
                    2025
                  </small>
            </div>
          </div>
        </div>
      </div>
   </section>
  )
}

export default Footer