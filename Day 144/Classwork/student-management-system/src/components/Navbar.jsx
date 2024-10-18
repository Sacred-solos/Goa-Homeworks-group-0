import React from "react";
import {Link} from 'react-router-dom';

const Navbar =() => {
    return(
        <nav className="bg-blue-600 text-white p-4">
            <ul>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/dashboard">dashboard</Link>
                </li>
                <li>
                    <Link to="/students">students</Link>
                </li>
            </ul>
        </nav>
    );
};


export default Navbar;