import React from 'react';
import Styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={Styles.Navbar}>
     <div className={Styles.conatiner}>
      <div className={Styles.leftSide}>
        <div className={Styles.logo}>
         <h1>C</h1>
         <h3>Colorful</h3>
        </div>
        <div className={Styles.links}>
          <ul>
            <li>Home</li>
            <li>Industries</li>
            <li>Solutions</li>
            <li>Pricing</li>
            <li>Showcases</li>
            <li>Community</li>
            <li>Learn</li>
          </ul>
        </div>

      </div>
      <div className={Styles.rightSide}>
        <h4>EN</h4>
        <h3>Login</h3>
         <button className={Styles.button}>Demo</button>
      </div>
     </div>
    </div>
  )
}

export default Navbar
