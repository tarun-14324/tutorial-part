import React from 'react';

import Head from "next/head";
import  Navbar  from "./Navbar";




const Home = () => {
  return (
    <div >
      <Head>
        <title>Todo react</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>

        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <Navbar/>
  <div>
  <header className="masthead">
            <div className="containerfour px-4 px-lg-5 h-100">
                <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-8 align-self-end">
                       
                    </div>
                    <div className="col-lg-8 align-self-baseline" id="box">
                        <p className="text mb-5">Welcome to todo website</p>
                        <a className="read_mo" href="/signup">Get Register Now</a>
                        
                    </div>
                    <a className="read_mov" href="/Home">Skip</a>
                </div>
            </div>
        </header>
</div>

<footer className="footer">
        <script
          src="https://unpkg.com/react/umd/react.production.min.js"
          
        ></script>
<script> src="http://www.datouwang.com/uploads/demo/jiaoben/201507/jiaoben544/js/jquery-2.1.1.min.js" </script>
        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          
        ></script>

        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          
        ></script>
      </footer>

    </div>
  );
}
export default Home;

