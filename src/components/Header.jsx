import React from "react";
import {Link} from "react-router-dom";

function Nav(){
    return(
        
        <nav class="px-4 py-4 bg-cyan-900 text-white" >        
   <ul class="flex">
   <li class="mx-2 coursor-pointer">
        <Link to="/">Main</Link>
    </li>
    <li class="mx-2 coursor-pointer">
        <Link to="/Schemes">Schemes</Link>
    </li>
    <li class="mx-2 coursor-pointer">
        <Link to="/Tips">Tips</Link>
    </li>
    <li class="mx-2 coursor-pointer">
        <Link to="/Expert">Expert </Link>
    </li>
    <li class="mx-2 coursor-pointer">
        <Link to="/Blogs">Blogs</Link>
    </li>
    <li class="mx-2 coursor-pointer">
        <Link to="/Contact">Contact us</Link>
    </li>
   </ul>
    </nav>

    )

}

export default Nav;