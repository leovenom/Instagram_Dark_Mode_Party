//rfce + enter - já faz o import da função
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import '../style/Navbar.css';


function Navbar() {
  //Hamburguer = / x
  const [click, setClick] = useState(false);
  //button
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  //Close nav-item
  const closeMobileMenu =  () => setClick(false);
  
  

  const showButton = () => {
    if(window.innerWidth <=960) {
      setButton(false)
    } else {
      setButton(true)
    }
  };
  //show button just one time
  useEffect(() => {
    showButton();
  },[]);

  window.addEventListener('resize', showButton)

  return (
      <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Logo <i class="fab fa-pied-piper-alt" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars '} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-links-mobile' onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>CONTACT</Button>}
        </div>
      </nav>
      </>
  );
}

export default Navbar;