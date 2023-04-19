import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
    return(
        <div>
            회사정보
            <Link to={'/about/member'}>member</Link>
            <Link to={'/about/location'}>location</Link>
            <Outlet></Outlet>
        </div>
    )
}
export default About;