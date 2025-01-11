import React,{useEffect} from "react";
import './main.scss'
import { IoLocationOutline } from "react-icons/io5";
import { LuClipboardCheck } from "react-icons/lu";
import img from '../../assets/image1.jpg'
import img2 from '../../assets/image2.jpg'
import img3 from '../../assets/image3.jpg'
import img4 from '../../assets/image4.jpg'
import img5 from '../../assets/image5.jpg'
import img6 from '../../assets/image6.jpg'
import img7 from '../../assets/image7.jpg'
import img8 from '../../assets/image8.jpg'
import img9 from '../../assets/image9.jpg'
import img10 from '../../assets/image10.jpg'
import img11 from '../../assets/image11.webp'
import img12 from '../../assets/image12.jpg'
import img13 from '../../assets/image13.jpg'
import img14 from '../../assets/image14.jpg'
import  Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img,
    desTitle: "Swiss Alps",
    location: "Switzerland",
    grade: "A",
    fees: "$620",
    description: "Snow-covered mountains, charming towns and flower-strewn meadows make the Swiss Alps a year-round fairy-tale destination. Visit in the winter for world-class skiing (and après-ski fondue and drinks) in locales such as the exclusive St. Moritz and the picturesque Zermatt, home of the craggy Matterhorn. Opt for warmer months to hike through the verdant valleys of Swiss National Park or attend lively festivals in the foothill ."
  },
  {
    id: 2,
    imgSrc: img2,
    desTitle: "Bora Bora",
    location: "French Polynesia",
    grade: "B",
    fees: "$830",
    description: "What this 12-square-mile French Polynesian island may lack in size it makes up for in sheer tropical beauty. Here, you'll find picturesque beaches, lush jungles and luxurious resorts set on surrounding islets. The island's extinct volcano, Mount Otemanu, makes for a great photo-op or challenging hike, and the friendly Bora Bora locals can help you catch a glimpse of the island's best sights during an off-road excursion."
  },
  {
    id: 3,
    imgSrc: img3,
    desTitle: "Rome",
    location: "Italy",
    grade: "A+",
    fees: "$520",
    description: "When you visit Italy's capital city, prepare to cross a few must-see landmarks – including the Colosseum, the Trevi Fountain and the Pantheon – off of your bucket list. Travelers can also see some of Italy's greatest treasures, including St. Peter's Basilica and the Sistine Chapel, in Vatican City. Once you get your bearings, peruse some of Rome's lesser-known museums, art galleries and boutiques, or head to Janiculum ."
  },
  {
    id: 4,
    imgSrc: img4,
    desTitle: "Machu Picchu",
    location: "Peru",
    grade: "B+",
    fees: "$910",
    description: "A visit to this UNESCO-listed Peruvian wonder is not for the faint of heart, but it is often described as a life-changing adventure. Built by the Incas in the mid-15th century, Machu Picchu encompasses well-preserved agricultural, residential and religious structures. While the four-day hike along the Inca Trail is challenging (you'll climb to an elevation of roughly 8,000 feet), arriving at the site during sunrise ."
  },
  {
    id: 5,
    imgSrc: img5,
    desTitle: "Tokyo",
    location: "Japan",
    grade: "A",
    fees: "$770",
    description: "Simply setting foot in Japan's frenetic capital city is an experience. Known for its bustling streets and flashing neon signs, Tokyo has an electric energy and ample top attractions to discover. Foodies won't be disappointed by Tokyo's fresh sushi and hearty ramen (not to mention more Michelin-starred restaurants than any other city in the world).Simply setting foot in Japan's frenetic capital city is an experience."
  },
  {
    id: 6,
    imgSrc: img6,
    desTitle: "Maui",
    location: "Hawaii, USA",
    grade: "C",
    fees: "$640",
    description: "Whether you're driving along the Road to Hana, enjoying a bird's-eye view of Maui's lush coastline on a helicopter tour, snorkeling with sea turtles or simply relaxing on white or black sand beaches, you'll find that this Hawaiian island is unlike any other tropical destination. Don't miss a chance to visit Haleakalā National Park, which is home to one of the world's largest dormant volcanic craters and boasts surreal sunrises."
  },
  {
    id: 7,
    imgSrc: img7,
    desTitle: "Maldives",
    location: "Indian Ocean",
    grade: "B",
    fees: "$890",
    description: "It is not cheap or easy to reach, but this isolated Indian Ocean vacation spot located southwest of India is the embodiment of a dreamy tropical retreat. In this remote country, which is made up of more than 1,000 islands, thatched-roof overwater bungalows sit above the bright aquamarine sea, providing easy water access and a romantic atmosphere.It is not cheap or easy to reach, but this isolated Indian Ocean vacation spot located  "
  },
  {
    id: 8,
    imgSrc: img8,
    desTitle: "Tanzania",
    location: "East Africa",
    grade: "A+",
    fees: "$980",
    description: "A top-tier safari destination, this East African country draws wildlife enthusiasts hoping to catch a glimpse of Serengeti National Park's big five: the lion, the rhino, the leopard, the elephant and the buffalo. If you can foot the bill, stay in one of Tanzania's swoon-worthy tented camps that take glamping to another level. Beyond Serengeti, Tanzania houses 21 other national parks, including one dedicated to Africa's tallest peak ."
  },
  {
    id: 9,
    imgSrc: img9,
    desTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "A",
    fees: "$710",
    description: "The globe's largest collection of coral reefs – and one of the original Seven Natural Wonders of the World – touts one-of-a-kind scenery. At Australia's Great Barrier Reef, you'll find more than 600 islands and 1,600-plus species of fish. Though plenty of diving and snorkeling spots can be found along Queensland's coast, to escape the crowds, visit the Whitsunday Islands (which happen to have some of the world's best beaches)."
  },
  {
    id: 10,
    imgSrc: img10,
    desTitle: "Petra",
    location: "Jordan",
    grade: "B+",
    fees: "$570",
    description: "Dating back to the fourth century B.C., Jordan's ancient Nabataean city is an architectural standout. Once you wind your way through a narrow canyon (the Siq) and the magnificent Treasury comes into view, you'll instantly see why Petra is one of the New Seven Wonders of the World. This well-preserved, intricate mausoleum is worth the trip on its own. Still, you'll want to continue on to Petra's other impressive structures.Dating back to the fourth century B.C."
  },
  {
    id: 11,
    imgSrc: img11,
    desTitle: "Glacier National Park",
    location: "Montana, USA",
    grade: "A",
    fees: "$450",
    description: "Snow-capped peaks, alpine meadows and azure lakes are just a few reasons why Glacier National Park is one of America's most striking parks. There are more than 700 miles of hiking trails in this Montana crown jewel, plus 13 designated areas for camping. In the winter, travelers can enjoy snowshoeing and skiing, while summer vacationers can go swimming in Lake McDonald and whitewater rafting on Flathead River, among other popular activities. "
  },
  {
    id: 12,
    imgSrc: img12,
    desTitle: "South Island, New Zealand",
    location: "New Zealand",
    grade: "B",
    fees: "$880",
    description: "New Zealand's South Island brims with majestic landscapes at every turn, from dramatic mountains to spectacular fjords. Here, you can hike through the mountains of Fiordland National Park or admire them from a boat on Milford Sound/Piopiotahi. At night, journey to the University of Canterbury's Mount John Observatory to gaze at the starry skies,New Zealand's South Island brims with majestic landscapes at every turn, from dramaticNew Zealand's South Island brims. "
  },
  {
    id: 13,
    imgSrc: img13,
    desTitle: "Paris",
    location: "France",
    grade: "A",
    fees: "$610",
    description: "France's magnetic City of Light is a perennial tourist destination, drawing visitors with its iconic attractions like the Eiffel Tower and the Louvre, and its unmistakable je ne sais quoi. Quaint cafes, trendy shopping districts and Haussmann architecture give Paris its timeless beauty. But the city's best asset is that you're likely to discover something new with each trip or season (read: Paris is always a good idea)."
  },
  {
    id: 14,
    imgSrc: img14,
    desTitle: "Costa Rica",
    location: "Central America",
    grade: "B+",
    fees: "$760",
    description: "From volcanic mountains and verdant rainforests to tumbling waterfalls and miles of stunning shoreline, Costa Rica is a Central American gem. Explore the beaches along the Nicoya Peninsula, hike around the base of Arenal Volcano and spot exotic wildlife (think: river turtles, otters and howler monkeys) in remote Tortuguero National Park. If you're looking for an adrenaline rush, go swimming next to Guanacaste's waterfalls or zip line ."
  }
];

const Main = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most visited destinations</h3>
      </div>
      <div className="secContent grid">
      {Data.map((item) => {
          const { id, imgSrc, desTitle, location, grade, fees, description } = item;
          return(
            <div key={id} data-aos='fade-up'  className="singleDestination">

            
            <div className="imageDiv">
              <img src={imgSrc} alt={desTitle} />
            </div>
            <div className="cardInfo">
              <h4 className="destTitle">{desTitle}</h4>
              <span className="continent flex">
              <IoLocationOutline className="icon" />
              <span className="name">{location}</span>
              </span>
              <div className="fees flex">
                <div className="grade">
                  <span>{grade}<small>+1</small></span>
                </div>
                <div className="price">
                  <h5>{fees}</h5>
                </div>
              </div>
              <div className="desc">
                <p>{description}</p>
              </div>
              <button className="btn flex">
                DETAILS<LuClipboardCheck className="icon" />
              </button>
            </div>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default Main;
