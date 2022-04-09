import React, {Component} from "react";
import Logo from '../assets/img/NutraMeals-removebg-preview (1).png';
import Orders from '../assets/img/orders.png';
import Offers from '../assets/img/offers.png';
import Help from '../assets/img/help.png';
import Wallet from '../assets/img/wallet.png';
import { slide as Menu } from 'react-burger-menu';
import './header.css';

class Header extends Component {
    constructor (props) {
        super(props);
        this.state = {
          menuOpen: false
        }
      }
    
    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
    }
        
    closeMenu () {
        this.setState({menuOpen: false})
    }
    
    toggleMenu () {
        this.setState(state => ({menuOpen: !state.menuOpen}))
    }

	render() {
		return (
			<header id="header" class="fixed-top d-flex align-items-cente">
                    <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
                        <a href="index.html"><img class="logoNutraMeals"    src={Logo} alt=""></img></a>
                        <h1 class="logo me-auto me-lg-0"></h1>
                        {/*Uncomment below if you prefer to use an image logo
                        <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}

                        <nav id="navbar" class="navbar order-3">
                            <ul>
                            <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
                            <li><a class="nav-link scrollto" href="#about">About</a></li>
                            <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                            <li><button class="book-a-table-btn scrollto">Login</button></li>
                            </ul>
                        </nav>
                        
                    </div>
                    <div id="outer-container">
                       <Menu  pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }
                               isOpen={this.state.menuOpen} 
                               onStateChange={(state) => this.handleStateChange(state)}
                        >
                            <div>
                                <div class="image">
                                    <img class="personImage" alt="" role="presentation" src="https://d1w2poirtb3as9.cloudfront.net/default.jpeg?Expires=1647860504&amp;Signature=cmvfZYok8E3glBGSAvswJ9k6NPE5s9Boaq2RTNXGWApq8HyS7z3NTPj1f8AR4ew5HqaEn6eTuwER9tfMOU-khaHB8nEGRVT47SAduduDRgD1bkMd3cdSgrTrgWsPZxVVQyU6M0kOl7zZQi3pAry6uXCkeVteUzLWYwSa8ChZ7kCgaRRvETtWG5ksWu6wAtgBpDPlPteQ90wfKlTcWUjLOjm2PYIYkLy0hr5cubTYF4yX9siJyECw1bHuHF00CIVVWxedMKCnExM-9oAybM0C00UlGFJ05ddIvxD0KLwJrigsNPc08x3~17kjk3kgqz~wXklemDhUxBEm6q2ef2tTVQ__&amp;Key-Pair-Id=APKAJSDH2OZQQSA64LQQ"/>
                                    <div class="spacer"></div>
                                    <div class="spacer"></div>
                                    <div>
                                        <div class="personName">John Doe</div>
                                        <a href="#" style={{textDecoration: "none"}}>View account</a>
                                    </div>
                                </div>    
                            </div>
                            <a href="#" class="nav-link">

                            <hr class="lineBreak"></hr>
                                <div class="menuIcons">
                                    <img src={Orders} className="iconImage"></img>
                                </div>
                                <div class="menuText">Orders</div>
                            </a>
                            <a href="#" class="nav-link">
                                <div class="menuIcons">
                                    <img src={Wallet} className="iconImage"></img>
                                </div>
                                <div class="menuText">Wallet</div>
                            </a>
                            <a href="#" class="nav-link">
                                <div class="menuIcons">
                                    <img src={Offers} className="iconImage"></img>
                                </div>
                                <div class="menuText">Offers</div>
                            </a>
                            <a href="#" class="nav-link">
                                <div class="menuIcons">
                                    <img src={Help} className="iconImage"></img>
                                </div>
                                <div class="menuText">Help</div>
                            </a>
                            <a href="#" class="nav-link">
                                <div class="menuOthers">Sign out
                                </div>

                            <hr class="lineBreak"></hr>
                            </a>
                            <a href="#" class="nav-link">
                                <div class="menuList">Create Business Account
                                </div>
                            </a>
                            <a href="#" class="nav-link">
                                <div class="menuList">Add your restaurant
                                </div>
                            </a>
                            <a href="#" class="nav-link">
                                <div class="menuList">Sign up to deliver
                                </div>
                            </a>
                        </Menu>
                        
                    </div>
            </header>
  //End Header 
        );
	}
}

export default Header;