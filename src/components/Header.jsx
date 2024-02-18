import React from "react";
import {Link} from "react-router-dom";
import s from "../style/header.module.css"

const Header = () => {
    return (
        <header>
            <h1>Maxvel</h1>
            <nav className={s.navigation}>
                <Link to="news">News</Link>
                <Link to="weather">Weather</Link>
                <Link to="blog">Blog</Link>
            </nav>
        </header>
    )
}

export default Header;