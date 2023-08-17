import '../Styles/home.css';
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal  from 'react-modal';
import '../Styles/home.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';
import { FaBed } from 'react-icons/fa';
import  { useState } from 'react';
import { Link, Element } from 'react-scroll';

const ReadMore = ({ children, maxCharacterCount = 200 }) => {
  const text = children;
  const [isTruncated, setIsTruncated] = useState(true);

  const resultString = isTruncated ? text.slice(0, maxCharacterCount) : text;

  function toggleIsTruncated() {
    setIsTruncated(!isTruncated);
  }
  
  

  return (
    <p>
      {resultString}
      <span onClick={toggleIsTruncated} style={{color: 'blue', cursor: 'pointer'}}>
        {isTruncated ? "... Read more" : " Show less"}
      </span>
    </p>
  );
};

const CollapsiblePanel = ({ title, content, isExpanded, onToggle }) => {
    return (
      <div className="myCustomPanel">
        <div
          className="myCustomPanel-heading"
          onClick={onToggle}
          aria-expanded={isExpanded}
        >
          <h4 className="myCustomPanel-title">
            {title}{' '}
            <i style={{marginLeft: "739px"}}
              className={`bi ${isExpanded ? 'bi-arrow-up' : 'bi-arrow-down'}` }
            ></i>
          </h4>
        </div>
        <div
          className={`myCustomPanel-collapse collapse ${isExpanded ? 'show' : ''}`}
        >
          <div className="myCustomPanel-body">{content}</div>
        </div>
      </div>
    );
  };

  


const Home = () => {
  
 
  const [isExpanded, setIsExpanded] = useState(false);
  
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [selectedTrek, setSelectedTrek] = useState('trekWithTransfer'); // setting default value to 'trekWithTransfer'
  const selectTrek = (trekType) => {
    setSelectedTrek(trekType);
};
  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
}

    
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => {
        setShowModal(true);
      };
    
      const handleCloseModal = () => {
        setShowModal(false);
      };
    
      const customStyles = {
        content: {
          width: "432px",
          height:"650px",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          overflow:"visible",
          transform: "translate(-50%, -50%)",
          padding: "50px",
          border: "1px solid #ccc",
          borderRadius: "20px",
          boxShadow: "0 2px 12px rgba(0, 0, 0, 0.25)",
    
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      };

    const [selectedBox, setSelectedBox] = useState(null);

  const selectBox = (id) => {
    setSelectedBox(id);
  };
    const [isAllExpanded, setIsAllExpanded] = useState(false);

  // Separate state for each box
  const [isDay0Expanded, setIsDay0Expanded] = useState(false);
  const [isDay1Expanded, setIsDay1Expanded] = useState(false);
  const [isDay2Expanded, setIsDay2Expanded] = useState(false);
  const [isDay3Expanded, setIsDay3Expanded] = useState(false);

  const handleExpandAll = () => {
    setIsAllExpanded(true);
    setIsDay0Expanded(true);
    setIsDay1Expanded(true);
    setIsDay2Expanded(true);
    setIsDay3Expanded(true);
  };

  const handleCollapseAll = () => {
    setIsAllExpanded(false);
    setIsDay0Expanded(false);
    setIsDay1Expanded(false);
    setIsDay2Expanded(false);
    setIsDay3Expanded(false);
  };


    return( 
<div style={{    marginLeft: "35px"}}>
        <div className="header">
        <div className="heading">
            Netravathi Peak Trek,Chikmagalur
            <div className="subheading">
                <i className="fas fa-map-marker-alt"></i> Chikmagalur, Karnataka, India &nbsp; &nbsp; &nbsp;  4.9    <i className="fas fa-star"></i>(21) &nbsp; &nbsp; &nbsp;   3D/2N
            </div>
        </div>
        <div style={{marginRight: "92px"}}>
           
            <button className="button"><i className="bi bi-whatsapp"></i> Share</button>
            
        </div>
    </div>

    <div className="containerf">
        <div className="box1">
            
            <img src="./Assets/image7.jpg" alt="Your Image" style={{marginLeft: "-90px"}}/>
        </div>
        <div className="box box-2" style={{marginRight: "66px"}}>
            <div className="box-2-part" >
                <div className="box-inside-part">
                    <img src="./Assets/image2.jpg" alt="Your Image"/>
                </div>
                <div className="box-inside-part" style={{marginTop: "-5px"}}>
                    <img src="./Assets/image4.jpg" alt="Your Image"/>
                </div>
            </div>
            <div className="box-2-part" style={{marginLeft: "-8px"}}>
                <div className="box-inside-part">
                    <img src="./Assets/image5.jpg" alt="Your Image"/>
                </div>
                <div className="box-inside-part">
                    <img src="./Assets/image6.jpg" alt="Your Image"/>
                </div>
            </div>
        </div>
    </div> 
    <div className="containers">
        <div className="boxs boxs1">
            <div className="containerpt-fluid" style={{marginLeft: "-80px"}}>
                <div className="boxpt">
                    <i className="fas fa-hiking iconpt"></i>
                    <div className="iconpt-name">Treking</div>
                </div>
                <div className="boxpt">
                    <i className="fas fa-bus iconpt"></i>
                    <div className="iconpt-name">Transport</div>
                </div>
                <div className="boxpt">
                    <i className="fas fa-clock iconpt"></i>
                    <div className="iconpt-name">Duration</div>
                </div>
                <div className="boxpt">
                    <i className="fas fa-utensils iconpt"></i>
                    <div className="iconpt-name">Meals</div>
                </div>
                <div className="boxpt">
                    <i className="fas fa-route iconpt"></i>
                    <div className="iconpt-name">Guide</div>
                </div>
                <div className="boxpt">
                    <i className="fas fa-file-alt iconpt"></i>
                    <div className="iconpt-name">Permits</div>
                </div>
                <div className="boxpt">
                    <i className="fas fa-map-marker-alt iconpt"></i>
                    <div className="iconpt-name">Stay</div>
                </div>
        </div>
        <div className="rectangle">
      <div className="content">

      <Link
            activeClass="active"
            to="overview"
            spy={true}
            smooth={true}
            offset={-70}
            duration={10}
          >
             <button style={{marginLeft: "10px" }}>Overview</button>
          </Link>

          <Link
            activeClass="active"
            to="highlights"
            spy={true}
            smooth={true}
            offset={-70}
            duration={10}
          >
            <button style={{marginLeft: "25px"}}>Highlights</button>
          </Link>

          <Link
            activeClass="active"
            to="itinerary"
            spy={true}
            smooth={true}
            offset={-70}
            duration={10}
          >
            <button style={{marginLeft: "25px"}}>Itinerary</button>
          </Link>

          <Link
            activeClass="active"
            to="included/excluded"
            spy={true}
            smooth={true}
            offset={-70}
            duration={10}
          >
             <button style={{marginLeft: "25px"}}>Included/Excluded</button>
          </Link>

          <Link
            activeClass="active"
            to="prices"
            spy={true}
            smooth={true}
            offset={-70}
            duration={10}
          >
                 <button style={{marginLeft: "25px"}}>Prices</button>
          </Link>
          <Link
            activeClass="active"
            to="questions"
            spy={true}
            smooth={true}
            offset={-70}
            duration={10}
          >
            <button style={{marginLeft: "25px"}}>Questions</button>
          </Link>
          <Link
            activeClass="active"
            to="reviews"
            spy={true}
            smooth={true}
            offset={-70}
            duration={10}
          >
                <button style={{marginLeft: "25px"}}>Reviews</button>
          </Link>
          <Link
            activeClass="active"
            to="othertreks"
            spy={true}
            smooth={true}
            offset={-70}
            duration={10}
          >
           <button style={{marginLeft: "25px"}}>Other Treks</button>
          </Link>


    

    
    

     

     
      </div>
    </div>

    <Element name="overview" >
    <div className="hh"style={{    marginLeft: "-56px"}}>Overview</div>
        <div className="containerpt1" style={{    marginLeft: "-56px"}}>
            <div className="boxpt1">
                
                <div className="matter">
                
                   <p> Discover the undiscovered with our enthralling trek to Netravati Peak, nestled within the heart of the UNESCO recognized Western Ghats. Our journey brings you close to nature, offering glimpses of the river Netravati, revered as one of India’s holy rivers, and a variety of diverse flora and fauna. Enjoy the rustic charm of this lesser-known trekking trail in the Chikmagalur district of Karnataka, a refreshing escape from city life.</p>
        
        <p>The thrill intensifies as you ascend the 1520-meter-high peak, crossing majestic waterfalls, narrow streams, and thick woods while accompanied by the symphony of birdsong. Reach the peak and be rewarded with a stunning panoramic view that will leave you awe-struck. The Netravati Peak trek is not just a walk, it’s a journey into the lap of nature.</p>
       

    
</div>
<div className="content" style={{ display: isContentVisible ? 'block' : 'none' }} >
    <p>Explore the mountains and beautiful landscapes on an adventurous trekking tour. Experience nature like never before.</p>
    <p>Our weekend itinerary covers everything from transportation and accommodation to meals and trekking guidance, allowing you to fully immerse yourself in the adventure. After exploring the peak, we’ll visit the mesmerizing nearby waterfall and the historic Adi-Shaktyamaka Shri Annapoorneshwari Temple in Hornadu. Experience the wonder of Netravati Peak with Tripbae.</p>

<p>So on the off chance that you are exhausted of the city lights in Bangalore, at that point overlook everything and go along with us during the current end-of-the-week trip to Netravati Peak and end up amid nature.</p>
</div>
<button style={{marginTop: "-15px"}} className="read-more-btn" onClick={toggleContent}> {isContentVisible ? 'Read Less' : 'Read More'} </button>
</div>

</div> 
          </Element>

      
        </div>
        <div class="boxss boxs2" style={{marginTop: "4px"}}>
            <div class="boxbook" style={{marginTop: "20px"}}>
            <div class="a" style={{marginTop: "10px"}}>Starting from <s>INR 4,500</s> </div>
            <div class="b">INR 2,050 </div>
            <div class="d">per Adult</div>
            <button className="btns btn-outline-secondary ff" onClick={handleOpenModal}> Book Now</button>
            <button class="btns btn-outline-info">Send Enquiry</button>
            </div>
           
            <div class="boxbook2">
                <h4> Can't decide on a trip?</h4>
                <p>Our Destination expert will be happy to help you resolve your queries for this trip. </p>
                <div class="number">
                    <div><i class="bi bi-telephone-inbound-fill"></i> +91 9916627799</div>
                </div>
            </div>
        </div>
      </div>
      <div class="phone">
      <img src="./Assets/phone.jpg" class= "dmddd" alt="none"/>
      </div>
      <div class ="effrew">
      <Element name="highlights" >
      <div class="hf">Highlights</div>
      <div className="containerpt2">
        <div className="boxpt2">
          <div className="matter">
            <ul>
              <li>Enthralling Trek to Netravati Peak: Conquer the 1520-meter-high Netravati Peak, a part of the UNESCO recognized Western Ghats. This challenging trek takes you through some of the most scenic landscapes in India, offering spectacular panoramic views.</li>
              <br></br>
              <li>Majestic Waterfalls and Flora and Fauna: Experience the splendor of nature as you pass by stunning waterfalls and get a chance to spot a variety of wildlife species in their natural habitat.</li>
              <br></br>
              <li>Visit to Holy River Netravati's Birthplace: Discover the birthplace of one of India's holy rivers, Netravati, and understand its significance in the region's culture and ecosystem.</li>
              <br></br>
            </ul>
          </div>
          <div className="content" style={{ display: isContentVisible ? 'block' : 'none' }}>
                        <ul style={{    marginTop: "-16px"}}>
                            <li>Experience Local Culture at Adi-Shaktyamaka Shri Annapoorneshwari Temple: Enjoy a visit to the revered Adi-Shaktyamaka Shri Annapoorneshwari Temple in Hornadu and gain insights into the local religious practices.</li>
                            <br></br>
                            <li>Campfire Night and Local Cuisine: Unwind after a day's trek around a warm campfire, share stories, enjoy local vegetarian cuisine, and experience the hospitality of the local homestay.</li>
                        </ul>
                  </div>
                    <button style={{marginTop: "-15px"}} className="read-more-btn" onClick={toggleContent}>{isContentVisible ? 'Read Less' : 'Read More'}</button>
                </div>
            </div>
          </Element>
      
  <Element name = "itinerary">
      <div className="hfs">Itinerary</div>
      {isAllExpanded ? (
        <button
          className="btn btn-primary"
          style={{ marginLeft: '760px' }} 
          onClick={handleCollapseAll}
        >
          Collapse All
        </button>
      ) : (
        <button
          className="btn btn-primary"
          style={{ marginLeft: '765px'  , marginTop: "-9px"}}
          onClick={handleExpandAll}
        >
          Expand All
        </button>
      )}
      <div className="containers1">
        <CollapsiblePanel
          title="Day 0 -Friday"
          content="Content for day 0"
          isExpanded={isAllExpanded || isDay0Expanded}
          onToggle={() => setIsDay0Expanded((prevState) => !prevState)}
        />

        <CollapsiblePanel
          title="Day 1 -Saturday"
          content="Content for day 1"
          isExpanded={isAllExpanded || isDay1Expanded}
          onToggle={() => setIsDay1Expanded((prevState) => !prevState)}
        />

        <CollapsiblePanel
          title="Day 2 -Sunday"
          content="Content for day 2"
          isExpanded={isAllExpanded || isDay2Expanded}
          onToggle={() => setIsDay2Expanded((prevState) => !prevState)}
        />

        <CollapsiblePanel
          title="Day 3 -Monday"
          content="Content for day 3"
          isExpanded={isAllExpanded || isDay3Expanded}
          onToggle={() => setIsDay3Expanded((prevState) => !prevState)}
        />

      </div>
      </Element>

      <Element name = "included/excluded">     
<div class="hfss">Included/Excluded</div>
  <div class="containerpt4">
    <div class="left-half">
       
        <div class="points">
        <ul>
            <li><i class="fas fa-check"></i>Kumara Parvatha, also popularly known as
Pushpagiri (5624 feet above sea level), is the
second-highest mountain belonging to the.</li>
<br></br>
            <li><i class="fas fa-check"></i> Western Ghats mountain ranges situated in the
Kodagu district of Karnataka, after Tadiandamol.</li>
<br></br>
            <li><i class="fas fa-check"></i> If compared to the other treks in this region,
Kumara Parvatha is a little tougher but beautiful.</li>
<br></br>
            <li><i class="fas fa-check"></i>The trekking trail runs through the Pushpagiri
Wildlife Sanctuary, and you’ll be getting up close
and personal with nature during this journey.</li>
<br></br>
           
        </ul>
    </div>
    </div>
    <div class="right-half" style={{    marginLeft: "30px"}}>
        
        <div class="points">
        <ul>
            <li><i class="fas fa-times"></i>Kumara Parvatha, also popularly known as
Pushpagiri (5624 feet above sea level), is the
second-highest mountain belonging to the </li>
<br></br>
            <li><i class="fas fa-times"></i>Western Ghats mountain ranges situated in the
Kodagu district of Karnataka, after Tadiandamol.</li>
<br></br>
            <li><i class="fas fa-times"></i>If compared to the other treks in this region,
Kumara Parvatha is a little tougher but beautiful.</li>
<br></br>
            <li><i class="fas fa-times"></i>The trekking trail runs through the Pushpagiri
Wildlife Sanctuary, and you’ll be getting up close
and personal with nature during this journey</li>
<br></br>
            
        </ul>
        </div>
    </div>
</div>
</Element>

<Element name = "prices"> 
<div class="hfsd">Select Options</div>
<div className={`boxse ${selectedTrek === 'trekWithTransfer' ? 'active' : ''}`} id="trekWithTransfer" onClick={() => selectTrek('trekWithTransfer')}>
                <h4 style={{marginTop: "5px"}}>Netravathi Trek with Transfers</h4>
                <h5>View details</h5>
                <p style={{marginLeft: "75px"}} >
                    <span><s>4999</s><br /></span>
                    <span>INR 3499</span>
                </p>
                <div className="row" onClick={handleOpenModal}>
                    {selectedTrek === 'trekWithTransfer' && <button>Book Now</button>}
                </div>
            </div>

            <div className={`boxse ${selectedTrek === 'trekWithoutTransfer' ? 'active' : ''}`} id="trekWithoutTransfer" onClick={() => selectTrek('trekWithoutTransfer')}>
                <h4 style={{marginTop: "5px"}}>Netravathi Trek without Transfers</h4>
                <h5>View details</h5>
                <p style={{marginLeft: "75px"}}>
                    <span><s>4999</s><br /></span>
                    <span>INR 2399</span>
                </p>
                <div className="row" onClick={handleOpenModal}>
                    {selectedTrek === 'trekWithoutTransfer' && <button>Book Now</button>}
                </div>
            


        <Modal 
                   
                  isOpen={showModal}
                  onRequestClose={handleCloseModal}
                  contentLabel="Modal"
                  ariaHideApp={false}
                  style={customStyles}
                  
                >
                    <div style={{marginTop:"-30px"}}>
                  <h2 style={{marginLeft: "-31px"}}>Booking Details</h2>
                <div
                  style={{
                   
                    padding: "10px",
                    margin: "25px 0px",
                    display: "flex",
                    justifyContent: "space-between",
                    lineHeight: 2,
                   marginLeft:"-28px",
                   width:"387px"
                  }}
                >
                  <div>
                    <div><b>Price</b></div>
                    <h3 style={{ color: "rgb(111,255,233)" }}>INR 1,750</h3>
                    <div style={{    marginTop: "20px"}}>
                        <div>
                    <span style={{marginTop:"-2px",color : 'rgb(58,80,107)'}}>
                    <FaBed />
                    </span>
                    <div style={{marginLeft:"30px",marginTop:"-30px"}}><b>Variant</b></div>
                    <div style={{marginLeft: "30px",
    marginTop: "-9px",
    color: 'grey' }}>Kudremukh Trek without Transportation</div>
    <span style={{marginTop:"-2px"}}></span></div>
                    <div style={{marginTop:"15px"}}>
                    <span style={{marginTop:"-2px",color : 'rgb(58,80,107)'}}>
                    < FaCalendarAlt />
                    </span>
                    <div style={{marginLeft:"30px",marginTop:"-30px"}}><b>Date</b></div>
                    <div style={{marginLeft: "30px",
    marginTop: "-9px",
    color: 'grey' }}>Travel date</div> </div>

    <div style={{marginTop:"15px"}}>
    <span style={{marginTop:"-2px",color : 'rgb(58,80,107)'}}>
    <FaUserFriends />
    </span>  
    <div style={{marginLeft:"30px",marginTop:"-30px"}}><b>Guests</b></div>
                    <div style={{marginLeft: "30px",
    marginTop: "-9px",
    color: 'grey' }}>1 Adult</div> 
    </div>
    </div>
    <div className='dotted-line ' style={{marginTop:"15px"}}></div> 

    <div style={{marginTop:"15px"}}><b>Price Breakdown</b></div>  
    <div style={{marginTop:"15px"}}>
        <span><b>Adult</b></span>
        <span style={{    marginLeft: "50px"}}>INR 1,750 X 1</span>
        <span style={{    marginLeft: "50px"}}>INR 1,750</span>
        </div>   

       
            <div style={{marginTop:"31px"}}><b>Total Price</b></div>
            <div><h3 style={{ color: "rgb(111,255,233)", marginLeft : "200px" , marginTop :"-34px"}}>INR 1,750</h3></div>
              
                  </div>

                  
                </div>

                
                <button
                  onClick={handleCloseModal}
                  className="btn-order model-btn"
                  style={{ backgroundColor:"rgb(58,80,107)" , color :"white" , marginLeft: "-26px" , borderRadius: "5px"}}
                >
                  Close 
                </button>
                <button style={{marginLeft: "210px" , backgroundColor:"rgb(58,80,107)" , color :"white" , borderRadius: "5px"}} >Pay Now</button>
                </div>
                </Modal>
      </div>
      </Element>

      <Element name = "questions"> </Element>
   <div>
  <div class="hf">Frequently Asked Questions</div>
<div class="button-container">
  <button class="buttons">All</button>
  <button class="buttons">others</button>
  <button class="buttons">Timing</button>
  <button class="buttons">Booking</button>
  <button class="buttons">Safety</button>
  <button class="buttons">Age</button>
  <button class="buttons">Cost</button>
</div>
</div>

<div className="containers11">
        <CollapsiblePanel
         title="I have boooked the trek when will I get further updates regarding the treak?"
         content="Content for bar 1"
          isExpanded={isAllExpanded || isDay0Expanded}
          onToggle={() => setIsDay0Expanded((prevState) => !prevState)}
        />

        <CollapsiblePanel
        title="I have boooked the trek when will I get further updates regarding the treak?"
        content="Content for bar 1"
          isExpanded={isAllExpanded || isDay1Expanded}
          onToggle={() => setIsDay1Expanded((prevState) => !prevState)}
        />

        <CollapsiblePanel
        title="I have boooked the trek when will I get further updates regarding the treak?"
        content="Content for bar 1"
          isExpanded={isAllExpanded || isDay2Expanded}
          onToggle={() => setIsDay2Expanded((prevState) => !prevState)}
        />

        <CollapsiblePanel
          title="I have boooked the trek when will I get further updates regarding the treak?"
          content="Content for bar 1"
          isExpanded={isAllExpanded || isDay3Expanded}
          onToggle={() => setIsDay3Expanded((prevState) => !prevState)}
        />

     


 
      
   

     
<div style={{ display: isContentVisible ? 'block' : 'none' }}>
       
<CollapsiblePanel
         title="I have boooked the trek when will I get further updates regarding the treak?"
         content="Content for bar 1"
          isExpanded={isAllExpanded || isDay0Expanded}
          onToggle={() => setIsDay0Expanded((prevState) => !prevState)}
        />

        <CollapsiblePanel
        title="I have boooked the trek when will I get further updates regarding the treak?"
        content="Content for bar 1"
          isExpanded={isAllExpanded || isDay1Expanded}
          onToggle={() => setIsDay1Expanded((prevState) => !prevState)}
        />

        <CollapsiblePanel
        title="I have boooked the trek when will I get further updates regarding the treak?"
        content="Content for bar 1"
          isExpanded={isAllExpanded || isDay2Expanded}
          onToggle={() => setIsDay2Expanded((prevState) => !prevState)}
        />

        <CollapsiblePanel
          title="I have boooked the trek when will I get further updates regarding the treak?"
          content="Content for bar 1"
          isExpanded={isAllExpanded || isDay3Expanded}
          onToggle={() => setIsDay3Expanded((prevState) => !prevState)}
        />
   </div>

</div>

  <button id="readMoreBtn" class="btn btn-primary" style={{marginLeft: "765px"}} onClick={toggleContent}>
  {isContentVisible ? 'Read Less' : 'Read More'}
  </button> 
  </div>   

  <Element name = "reviews"> 
  <div class="sidessssss">Reviews</div>
<div class="boxt-container">
    <div class="boxt">
        <img src="./Assets/logo8t.jpg" alt="logo"/>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <p className='jhfhs'>Testimonials are short quotes from
            people who love your brand. It's a
            great way to convince customers to
            try your services.
            </p>
            <h3 class="rate" style={{    marginLeft: "-11px"}}>The Online Food Hub </h3>

    </div>
    <div class="boxt">
       <img src="./Assets/logo8t.jpg" alt="logo"/>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <p className='jhfhs'>Testimonials are short quotes from
            people who love your brand. It's a
            great way to convince customers to
            try your services.
            </p>
            <h3 class="rate" style={{    marginLeft: "8px"}}>Food Pyramid Co.</h3>
    </div>
    <div class="boxt">
        <img src="./Assets/logo8t.jpg" alt="logo"/>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <p className='jhfhs'>Testimonials are short quotes from
            people who love your brand. It's a
            great way to convince customers to
            try your services.
            </p>
            <h3 class="rate" style={{    marginLeft: "8px"}}>Jul & sons co..</h3>
    </div>
</div>
</Element>

<Element name = "othertreks"> </Element>
<div class="sidess">You Might also like</div>
    <div class="cards-container">
        
         <div class="cards">
            <img src="./Assets/image1.jpg" alt="Image 4" style={{borderRadius: "10px"}}/>
            <div class="cards-content">
                
                <div class="date" style={{color:"rgb(58,80,107)"}}>Friday,Jun 16.9:00</div>
                <div class="contentpt4" >Skandagiri Sunrise Trek</div>
                <div class="timer-container">
                    <i class="fas fa-clock" style={{color:"rgb(58,80,107)"}}>1D/1N</i>
                    <i class="bi bi-geo-alt-fill" style={{color:"rgb(58,80,107)"}}>Dobballapura</i>
                </div>
                
                <div class="bottom">
                    <div><s> 1788</s></div>
                    <div>
                        <span>&#8377; 1249</span>
                        <button class="cardbot"><i class="bi bi-arrow-right-short"></i></button>
                    </div>
                </div>
            </div>
        </div>
         
         <div class="cards">
            <img src="./Assets/image1.jpg" alt="Image 4" style={{borderRadius: "10px"}}/>
            <div class="cards-content">
                <div class="date" style={{color:"rgb(58,80,107)"}}>Friday,Jun 16.9:00</div>
                <div class="contentpt4">Skandagiri Sunrise Trek</div>
                <div class="timer-container">
                    <i class="fas fa-clock" style={{color:"rgb(58,80,107)"}}>1D/1N</i>
                    <i class="bi bi-geo-alt-fill" style={{color:"rgb(58,80,107)"}}>Dobballapura</i>
                </div>
                
                <div class="bottom">
                    <div><s> 1788</s></div>
                    <div>
                        <span>&#8377; 1249</span>
                        <button class="cardbot"><i class="bi bi-arrow-right-short"></i></button>
                    </div>
                </div>
            </div>
        </div>
       
         <div class="cards">
            <img src="./Assets/image1.jpg" alt="Image 4" style={{borderRadius: "10px"}}/>
            <div class="cards-content">
              
                <div class="date" style={{color:"rgb(58,80,107)"}}>Friday,Jun 16.9:00</div>
                <div class="contentpt4">Skandagiri Sunrise Trek</div>
                <div class="timer-container">
                    <i class="fas fa-clock" style={{color:"rgb(58,80,107)"}}>1D/1N</i>
                    <i class="bi bi-geo-alt-fill" style={{color:"rgb(58,80,107)"}}>Dobballapura</i>
                </div>
                <div class="bottom">
                    <div><s> 1788</s></div>
                    <div>
                        <span>&#8377; 1249</span>
                        <button class="cardbot"><i class="bi bi-arrow-right-short"></i></button>
                    
                    </div>
                </div>
                
            </div>
        </div>
        <div class="cards">
            <img src="./Assets/image1.jpg" alt="Image 4" style={{borderRadius: "10px"}}/>
            <div class="cards-content">
              
                <div class="date" style={{color:"rgb(58,80,107)"}}>Friday,Jun 16.9:00</div>
                <div class="contentpt4">Skandagiri Sunrise Trek</div>
                <div class="timer-container">
            
                    <i class="fas fa-clock" style={{color:"rgb(58,80,107)"}}>1D/1N</i>
                    <i class="bi bi-geo-alt-fill" style={{color:"rgb(58,80,107)"}}>Dobballapura</i>
               </div>
                    <div class="bottom">
                        <div><s> 1788</s></div>
                        <div>
                            <div>&#8377; 1249</div>
                            <div><button class="cardbot"><i class="bi bi-arrow-right-short"></i></button></div>
                        
                        </div>
                    </div>
            </div>    
            
        </div>
    </div>
    <div class="boxw">
      <div class="headers">
          <h5>Get Our Stories Delivered</h5>
          <h6>From us to your inbox</h6>
      </div>
      <div class="input-field">
          
          <input type="text" id="name" name="name" placeholder="Enter your name" required/>
      </div>
      <div class="input-field">
         
          <input type="text" id="email" name="email" placeholder="Enter your email" required/>
      </div>
      <button class="subscribe"type="button">Subscribe</button>
  </div>

  <div></div>
  <div></div>
</div>


    )
}


export default Home;