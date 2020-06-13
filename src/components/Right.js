import React, { Fragment } from 'react'
import image from '../image/biglogo.jpg'

export const Right = () => {
    return (
        <Fragment>
        <div className="right-container-item">
            <div className="leftmost">
                <h2>Featured Experts</h2>
            </div>
            <div className="custom-select">
            <select>
                <option>Best Match</option>
                <option>How </option>
                <option>are</option>
                <option>you </option>
                <option>good </option>
            </select>
            </div>
            
            
        </div>
        <div className="right-container-content1">
            <div className="photo">
                <div className="img">
                    <img src={image} alt="User" id="biglogo"/>
                </div>
                <div className="pricelogo">
                    <p>Price: <span id="free">Free</span></p>
                </div>
                <div className="ratinglogo">
                <p><i className="fas fa-star fa-xs"/> <span id="rate">4.9</span>&nbsp; (120)</p>
                </div>
            </div>
        <div className="info">
            <div className="upper-container">
                <div className="upper-half">
                    <div className="names"><p>David Melvik</p>
                    </div>
                <div className="view-profile">
                    <div className="heart">
                        <button id="heart">
                        <i className="far fa-heart fa-2x"/>
                        </button>
                    </div>
                    <div className="profbutton heart">
                        <button id="profile">View Profile</button>
                    </div>
                </div>

                </div>
                <div className="lower-half">
                    <p id="founder">Founder @ The Millenials & CEO @ABC</p>

                </div>
                
            </div>
            <div className="lower-container">
                <div className="lower1">
                    <div className="clock">
                    
                    <p className="pinfo"> <i className="fas fa-clock"/>02 Free Sessions Available</p>
                    </div>
                
                    <div className="location">
                    
                    <p className="pinfo"><i className="fas fa-map-marker-alt"></i>Tampa,FL,USA</p>
                    </div>
            
                    <div className="laungages">
                    <p className="pinfo"><i className="fas fa-heading"></i>Greek,English,French</p>
                    </div>
                </div>
                <div className="lower2">
                    <p className="pinfo">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum minima in voluptate veniam cumque. Inventore, nemo voluptas! Ea, aliquam itaque pariatur perferendis fugit consequuntur nulla.</p>
                </div>
                <div className="lower3">
                    <div className="skill1">
                        Marketing
                    </div>
                    <div className="skill1">
                        SEO
                    </div>
                    <div className="skill2">
                        Content Marketing
                    </div>
                    <div className="skill2">
                        Marketing Automation
                    </div>
                </div>
                
                

                </div>
                

            </div>
        </div>

        
        <div className="right-container-content2">
        <div className="photo">
                <div className="img">
                    <img src={image} alt="User" id="biglogo"/>
                </div>
                <div className="pricelogo">
                    <p>Price: <span id="free">Free</span></p>
                </div>
                <div className="ratinglogo">
                <p><i className="fas fa-star fa-xs"/> <span id="rate">4.9</span>&nbsp; (120)</p>
                </div>
            </div>
        <div className="info">
            <div className="upper-container">
                <div className="upper-half">
                    <div className="names"><p>David Melvik</p>
                    </div>
                <div className="view-profile">
                    <div className="heart">
                        <button id="heart">
                        <i className="far fa-heart fa-2x"/>
                        </button>
                    </div>
                    <div className="profbutton heart">
                        <button id="profile">View Profile</button>
                    </div>
                </div>

                </div>
                <div className="lower-half">
                    <p id="founder">Founder @ The Millenials & CEO @ABC</p>

                </div>
                
            </div>
            <div className="lower-container">
                <div className="lower1">
                    <div className="clock">
                    
                    <p className="pinfo"> <i className="fas fa-clock"/>02 Free Sessions Available</p>
                    </div>
                
                    <div className="location">
                    
                    <p className="pinfo"><i className="fas fa-map-marker-alt"></i>Tampa,FL,USA</p>
                    </div>
            
                    <div className="laungages">
                    <p className="pinfo"><i className="fas fa-heading"></i>Greek,English,French</p>
                    </div>
                </div>
                <div className="lower2">
                    <p className="pinfo">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum minima in voluptate veniam cumque. Inventore, nemo voluptas! Ea, aliquam itaque pariatur perferendis fugit consequuntur nulla.</p>
                </div>
                <div className="lower3">
                    <div className="skill1">
                        Marketing
                    </div>
                    <div className="skill1">
                        SEO
                    </div>
                    <div className="skill2">
                        Content Marketing
                    </div>
                    <div className="skill2">
                        Marketing Automation
                    </div>
                </div>
                
                

                </div>
                

            </div>
            
        </div>
        </Fragment>
    )
}
export default Right
