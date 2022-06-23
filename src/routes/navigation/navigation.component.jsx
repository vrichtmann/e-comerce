import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from '../../compoments/cart-icon/cart-icon.component'
import CartDropdown from '../../compoments/cart-dropdown/cart-dropdown.component'

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import {signOutUser} from '../../utils/firebase/firebase.utils'

import './navigation.styles.scss'

const Navegation = () => {
    const {currentUser} = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)

    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to="/">
              <CrwnLogo className="logo"/>
            </Link>
           
           <div className='nav-links-container'>
                <Link className="nav-link" to='/shop'>
                    SHOP
                </Link>
                {
                  currentUser ? (
                  <span className="nav-link" onClick={signOutUser} >
                    {' '}
                    SIGN OUT{' '}
                    </span>
                  ) : (
                    <Link className="nav-link" to='/auth'>
                      SIGN IN
                    </Link>
                  )
                }
                <CartIcon />
           </div>
           {isCartOpen && <CartDropdown/>}
        </div>
        <Outlet/>
      </Fragment>
    );
  };

  export default Navegation