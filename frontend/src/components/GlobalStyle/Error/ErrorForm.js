import React from "react";
import "./Error.css";


function ErrorPage() {
   
        return(
            <div className= "error-container">
                <div className="img-container">
                    <img src="./Illustration.svg" alt ="404 Error"></img>
                </div>
                <div className="content-container">
                    <h1>Page Not Found</h1>
                    <p id="small-content">
                        Sorry, the page you’re looking for doesn’t exist. If you think something is broken, report a porblem
                    </p>
                    <button className ="btn">Go to home</button>
                </div>
            </div>
        );
};

export default ErrorPage;
