import React, { Fragment } from 'react'
import Container from './Container'

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
        <Container />
        <Container />

        
        
        </Fragment>
    )
}
export default Right
