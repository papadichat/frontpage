import React, { Fragment } from 'react'
import Right from '../Right'

export const Home = () => {
    return (
        <Fragment>
        <div className="left-container">
            <div className="left-container-item">
                <h2>Filters</h2>
            </div>
            <div className="left-container-item-content">
                <div className="div4">
                    <div className="div41-item">
                        <h3>Expertise</h3>
                    </div>
                    <div className="div41-form">
                    <input className="input-field" type="text" name="name"/>
                    <button><i className="fa fa-search icon"/></button>
                
                    </div>
                    <div className="search-div">
                    <div className="div41-search">
                        Strategy <button>x</button>
                    </div>
                    

                    </div>
                     
                </div>
                <div className="div42">
                <div className="div41-item">
                        <h3>Focus Area</h3>
                    </div>
                    <div className="div41-form">
                    <input className="input-field" type="text" name="name"/>
                    <button><i className="fa fa-search icon"/></button>
                
                    </div>
                    <div className="search-div">
                    <div className="div41-search" onClick={()=>console.log("Collect Sticker Clicked")}>
                        Focus Area <button>x</button>
                    </div>
                    <div className="div41-search" id="blue">
                    Focus Area <button>x</button>
                        
                    </div>

                    </div>
                     
                    

                </div>
                <div className="div43">
                    <div className="div41-item">
                        <h3>Ratings</h3>
                    </div>
                    <div className="div43-rating">
                        <div className="rating1">
                            <input type="checkbox" className="rates"></input>{" "}
                            <i className="fas fa-star fa-xs" ></i>{" "}
                            <i className="fas fa-star fa-xs"></i>{" "}
                            <i className="fas fa-star fa-xs"></i>{" "}
                            <i className="fas fa-star fa-xs"></i>{" "}
                        </div>
                        <div className="rating1">
                            <input type="checkbox" className="rates"></input>{" "}
                            <i className="fas fa-star fa-xs"></i>{" "}
                            <i className="fas fa-star fa-xs"></i>{" "}
                            <i className="fas fa-star fa-xs"></i>{" "}
                        
                        </div>
                        
                    </div>
                    <div className="div43-rating">
                        <div className="rating1">
                            <input type="checkbox" className="rates"></input>{" "}
                            <i className="fas fa-star fa-xs"></i>{" "}
                            <i className="fas fa-star fa-xs"></i>{" "}
                        </div>
                        <div className="rating1">
                            <input type="checkbox" className="rates"></input>{" "}
                            <i className="fas fa-star fa-xs"></i>{" "}
                        
                        </div>
                        
                    </div>


                </div>
                <div className="div44">
                    <div className="div41-item">
                        <h3>Price</h3>
                    </div>
                    <div className="price">
                        <div className="p1">
                        <input type="checkbox" className="rates"></input>
                        <p >Free</p>
                        </div>
                        <div className="p1">
                        <input type="checkbox" className="rates"></input>
                        <p>Less than $25</p>
                        </div>
                        <div className="p1">
                        <input type="checkbox" className="rates"></input>
                        <p>$25-50$</p>
                        </div>
                        <div className="p1">
                        <input type="checkbox" className="rates" ></input>
                        <p>50$-100$</p>
                        </div>
                        <div className="p1">
                        <input type="checkbox" className="rates"></input>
                        <p>More than $100</p>
                        </div>
                        
                        

                    </div>
                </div>
            </div>
            
        </div>
    
        <div className="right-container">
            <Right/>
        </div>
        </Fragment>
        
    )
}

export default Home