import React, {Component} from "react";
import './events.css'

export default class Events extends Component{
    render(){
        return(
            <div>
                <section>
                    <div className="event">
                        <h1>Upcoming Events</h1>
                      <div className="card">
                        <div className="event2">
                        <img src= {process.env.PUBLIC_URL+"images/hackathon.png"} alt="logo" width="570px" height="200px" />
                        </div>
                        <div className="event3">
                        <h5>Event</h5>
                        <h3>Design Hackathon: 14th - 18th Sep, 2022</h3>
                        <p>LakeHub in partnership with Garage48 is bringing a 5-day design hackathon<br></br> 
                        from the 14-18th September to empower the local talents in digital design<br></br> 
                        and prototyping skills! The program is organized in 
                        collaboration and with<br></br> the financing of the Estonia 
                        Ministry of Foreign Affairs Development<br></br> Cooperation.</p>
                        <div className="sheeysheila">
                        <img src= {process.env.PUBLIC_URL+"images/sheey"} alt="none" width="70px" height="70px"></img>
                        <h5> Sheey Sheila <br></br><span>Aug 17, 2022</span></h5>
                         
                        </div>
                        
                        </div>      
                      </div>
                        
                    </div>
                </section>
            </div>
        )
    }
}