import * as React from "react"
import { HashRouter as Router, Link } from 'react-router-dom'
import Logo from "./logo.png";
import { Wrapper } from './Header.styles';

const Header = () => {

        return (
            <Wrapper>
                <Router>
                    <div className="topNav">
                        <a className="active"  href="/">
                            <img className="img" src={Logo} alt="Logo" />
                        </a>
                        <div className="header-right">
                            <div>
                                <i className="map outline icon"></i>
                                <div>
                                    <a href='#tours'>TOURS</a>
                                </div>
                            </div>
                            <div>
                                <i className="question large circle outline icon"></i>
                                <div>
                                    <Link to={`/help`}>HELP</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Router>
            </Wrapper>
        );
    }

export default Header;
