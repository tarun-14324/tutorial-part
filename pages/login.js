import  Navbar  from "./Navbar";


const login = () => {
  

    return ( 
      <div>
      <Navbar/>
      <h2 className="name">Login page</h2>
    <div className="containerthree">
  <div className="session">
    <div className="left">
     
	</div>
    <form action=""  autocomplete="off" className="desImage"> 
      
      <p>Welcome back! Log in to your account to view today's tasks:</p>
      <div className="floating-label">
        <input placeholder="Email" type="email" name="email" id="email"/>
    
       
      </div>
      <div className="floating-label">
        <input placeholder="Password" type="password" name="password" id="password" autocomplete="off"/>
        
       
        
      </div>
      <button type="submit"><a href="/Home">Log in</a></button>
      <a href="/signup" className="discrete" target="_blank">Register</a>
    </form>
  </div>

</div>
   </div>    

      
     );
}
 
export default login;