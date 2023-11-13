import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqU6KRZSI0Yh2vOMng8LNbyja3egNI5KppMA" alt="Error"/></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>

            </div>
            <div className="right"> 
                <Link to="/contact" style={{textDecoration: "none"}}><span>Contact Us</span></Link>
            </div>
        </div>
    )
}

export default Header