import React from "react"
import logo from './hd.jpg'
import logo1 from './tec2.jpg'
import logo2 from './tec1.jpg'

const Home =() =>{
  
    return(
<><div className="container-fluid-fluid   bgstick">
<h1 id="te">Building Ventures is Our <br/> Business</h1>
<button className="btn btn-outline-light bt"href="/About" style={{border:"2px solid black",color:"black",fontWeight:"bold"}} >Get Started</button>
<div className="container-fluid  ">
    <div className="row">
   <div className="col wvr" >
   <h1 id="t">Who Are We?</h1>
        <p>Fatfish Group Ltd (ASX:FFG) is a publicly traded tech venture builder firm that started out as a Singapore Government partnered incubator in its early days and has expanded quickly to Australia, Southeast Asia and Europe.
In 2014, Fatfish Group has been listed on the Australian Securities Exchange and is on a mission to build tech businesses with the potential to scale regionally or globally through its unique “Seed-to-Exit” approach.
Fatfish Group owns a majority controlling stake in Swedish listed Abelco Investment Group AB (publ) (NGM:ABIG) that is a highly visible publicly traded venture builder firm in Sweden.</p>
     </div> </div>
</div>

<div className="container-fluid-fluid box   idea-2 ">
<div className="card nid" >
  <div className="row g-0 ">
    <div className="col-md-5">
      <img src={logo1} className="img-fluid rounded-start" alt="" />
    </div>
    <div className="col-md-7">
      <div className="card-body">
        <h5 className="card-title">Our Capabilities</h5>
        <p className="card-text">Fatfish Group is a passionate, creative and tenacious venture 
        builder firm that strategically builds tech businesses to help them grow and succeed. We 
        have an extensive network of resources, domain 
         knowledge and tech expertise across multiple verticals, which include:</p>
        <p className="card-text">
<li>Buy-Now-Pay-Later and Online Lending</li>
<li>Online Insurance</li>
<li>Video-games and esports</li>
<li>E-commerce and digital entertainment</li>
<li>Enterprise cloud and software</li></p>
<button className="btn btn-outline-light">See Our Portfolio</button>
      </div>
    </div>
  </div>
</div>
</div>

<div className="container-fluid-fluid  box idea-2">
<div className="card nid " >
  <div className="row g-0">
    <div className="col-md-7">
      <div className="card-body">
        <h5 className="card-title">Recent Highlights</h5>
        <p className="card-text"><li>Jun 17, 2021	Amended Appendix 2A</li>
        <li>Jun 17, 2021	Insurtech Fatberry Charts High Growth</li>
        <li>Jun 15, 2021	Change of Director’s Interest Notice</li>
        <li>Jun 15, 2021	Change of Director’s Interest Notice</li>
        <li>Jun 15, 2021	Cleansing Prospectus</li>
        <li>Jun 11, 2021	Appendix 2A</li>
        <li>Jun 11, 2021	Appendix 3G</li>
        <li>Jun 11, 2021	Reinstatement to Official Quotation</li>
        <li>Jun 11, 2021	Proposed issue of securities – FFG</li>
        <li>Jun 11, 2021	FFG acquires BNPL Next Ltd to enter into Early Wage Access</li></p>
      </div>
      <button className="btn btn-outline-light" id="see-more">See More</button>
    </div>
    <div className="col-md-5">
      <img src={logo2} className="img-fluid rounded-start" alt="" />
    </div>
  </div>
</div>
</div>
</div>
</>
    )
}
export default Home