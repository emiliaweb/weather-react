import Search from '../Search/Search';

import './Header.scss';

import logo from './logo.svg';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-wrap">
                    <div className="header-logo">
                        <img src={logo} alt="Weather App"/>
                    </div>
                    <Search />
                </div>
            </div>
        </header>
    )
}

export default Header;