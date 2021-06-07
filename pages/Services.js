import  Navbar  from "./Navbar";

const contact = () => {
  return ( 
   <div>
   <Navbar/> 
  
    <div id="service" className="Services">
   
            
                
               
          
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
             <div className="Services-box">
                
             <h3>Simple UI/UX Design</h3>
               
             </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
             <div className="Services-box">
               
                <h3>web development</h3>
               
             </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
             <div className="Services-box">
                
                <h3>User-Friendly Responsive Design</h3>
               
             </div>
          </div>
         
          <a className="read_more" href="/">Go to Main Page</a>
       </div>
    </div>

  );
}

export default contact
