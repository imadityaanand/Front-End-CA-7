import React from 'react'
import { Link } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";
import "./Header.css"

function Header(props) {
    const username = sessionStorage.getItem("name");

    function HandleChange(e){
        props.setSearch(e.target.value);
    }

    return (
        
        useMediaQuery({ query: '(min-width: 700px)' })
        ?   <div className='header'>
                <h2>KalviumBooks</h2>
                <div className='search-bar'>
                    <img src='../../assets/search.svg' alt='search-icon'></img>
                    <input placeholder='Search' onChange={HandleChange}></input>
                </div>
                {
                    username === null
                    ? <Link to="/register">
                        <div className='register-btn'>
                            Register
                        </div>
                    </Link>
                    : <h3>Hello {username}!</h3>
                }
            </div>
        :   <div className='header'>
                <div className='first-div'>
                    <h2>KalviumBooks</h2>
                    {
                        username === null
                        ? <Link to="/register">
                            <div className='register-btn'>
                                Register
                            </div>
                        </Link>
                        : <h3>Hello {username}!</h3>
                    }
                </div>
                <div className='search-bar'>
                    <img src='../../assets/search.svg' alt='search-icon'></img>
                    <input placeholder='Search' onChange={HandleChange}></input>
                </div>
            </div>
    )
}

export default Header;
