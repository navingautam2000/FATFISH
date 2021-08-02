import React from 'react'
import { useState } from 'react';
const Footer =()=>{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const msg =(e)=>{
        e.preventDefault();
    alert("Thank You !");
    setName('')
    setEmail('')
    }

    return(
    <>
    <div className="container-fluid footer">
      <div className="row">
          <div className="col-md-6 c1">
          <h1 id="f-heading">Contact </h1>
        <i className="fa fa-facebook"></i>
        <i className="fa fa-twitter"></i>
        <i className="fa fa-linkedin"></i>
          </div>
          <div className="col-md-6 c2">
              <form action="" onSubmit={msg}>
              <h4>E-Newsletters: Follow us to hear more about our business</h4>
              <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" classname="ip1" style={{marginRight:"20px"}}/>
              <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" classname="ip1" />
              <button className="btn btn-outline-dark c-btn" onClick={msg} > Submit</button>
              </form>
          </div>
      </div>
      <div className="hr"></div>
      <div className="row">
          <div className="col c-txt">
               <ul>
                <li> <h5><i class="fa fa-envelope"></i> <b>General Enquiry</b></h5>
                <h4>info@fatfish.co</h4></li>
                <li>   <h5><i class="fa fa-envelope"></i> <b>Investment/Advisory</b></h5>
                <h4>invest@fatfish.co</h4></li>
                <li>
                <h5><i class="fa fa-envelope"></i> <b>Investor Relations</b> </h5>
                <h4>ir@fatfish.co</h4>
                </li>
                <li>
                <h5><i class="fa fa-envelope"></i> <b>ir@fatfish.co</b></h5>
                <h4>jobs@fatfish.co</h4>
                </li>
               </ul>
                   </div>
          </div>
          <h5 className="text-muted" id="cprty">Copyright © 2014-2021 Fatfish Group Limited</h5>
      </div>
</>
    )
}

export default Footer;