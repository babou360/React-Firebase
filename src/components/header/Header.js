import React from 'react'
import './Header.css';
import logo from '../../images/errandiaga.png';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from '../../components/StateProvider';
import {auth} from './../firebase/utils';

// function Header() {
    const Header = props => {
    const {currentUser} =props;
    const [{basket}]=useStateValue();
    console.log(basket);
    return (
        <nav className="header">
            {/* <img className="header__logo" src={logo}/> */}
            <Link to='/login'>
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            </Link> 
            <div className="header__search">
                <input className="header__Input"></input>
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__Nav">
            {currentUser && (
                    <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello</span>
                        <span onClick={() => auth.signOut()} className="header__optionLineTwo">LogOut</span>
                    </div>
                    </Link>
                )}
                {!currentUser && (
                    <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello</span>
                        <span className="header__optionLineTwo">SignIn</span>
                    </div>
                    </Link>
                )}
            </div>
            <div className="header__Nav">
                <Link to="/checkout" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                </Link>
            </div>
            <div className="header__Nav">
                <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& orders</span>
                </div>
                </Link>
            </div>
            <div className="header__Nav">
                <Link to="/signup" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">SignUp</span>
                </div>
                </Link>
            </div>
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
            </Link>
        </nav>
    )
};

Header.defaultProps ={
    currentUser: null
}

export default Header
