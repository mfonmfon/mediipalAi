import React from 'react';
import NavigationBarStyles from '../../styles/NavigationBar.module.css'
import navigation from './navbarData';
import { Links } from 'react-router';
import { Link } from 'react-router-dom';
import { MenuIcon, ShoppingCartIcon } from 'lucide-react';

const NavigationBar =()=>{
    return(
        <div className={NavigationBarStyles.navigationBarContainer}>
            <div className={NavigationBarStyles.navigationBar}>
                <nav className={NavigationBarStyles.navBar}>
                    <h1 className={NavigationBarStyles.navBarLogoTitle}>MedRecsAI</h1>
                    <ul className={NavigationBarStyles.navBarList}>
                        {navigation.map((list, index)=>{
                            return(
                                <li key={index} className={NavigationBarStyles.navBarItem}>
                                   <Link to={list.path}>{list.name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                    <div  className={NavigationBarStyles.secondLink}>
                        <ShoppingCartIcon className={NavigationBarStyles.cartButton}/>
                        <div className={NavigationBarStyles.loginWayButton}>
                        <button onClick={()=>{window.location.pathname="/login"}} className={NavigationBarStyles.signInButton}>sign In</button>
                        </div>
                        <div className={NavigationBarStyles.registerButton}>
                        <button onClick={()=>{window.location.pathname="/signup"}} className={NavigationBarStyles.createAccountButton}>Create Account</button>
                        </div>
                    </div>

                    <div className={NavigationBarStyles.mobileMenu}>
                        <MenuIcon/>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default NavigationBar
