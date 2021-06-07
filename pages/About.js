import  Navbar  from "./Navbar";

const About = () => {
  return (  
     <div>
        <Navbar/>
    <div className="about-container-bg">
     
              
         
              <div id="service" className="Services">
    <div className="cont">
     
       <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
             <div className="Services-boxone">
               
                <h3>Simple UI</h3>
               
             </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
             <div className="Services-box">
                
                <h3>Dedicated Pages</h3>
               
             </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
             <div className="Services-box">
               
                <h3>Easy Registration</h3>
               
             </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
             <div className="Services-box">
                
                <h3>User-Friendly</h3>
               
             </div>
          </div>
         
          <a className="read_more" href="/">Main page</a>
       </div>
    </div>
 </div>

 </div>

    </div>
  );
}

export default About;
