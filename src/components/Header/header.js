import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './style.scss';

export default class Header extends Component {
    render() {
        return (
            <header className="Header clearfix">
                <nav>
                    <ul className="clearfix">
                        <li>
                            <Link to='/'>
                                <span>
                                    Home
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/purchase'>
                                <span>
                                    purchase
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}
