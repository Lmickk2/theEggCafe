import React from 'react'

function Footer() {
  return (
    <div>
    <footer className="social-footer">
    <div className="social-footer-left">
      <a href="#" className="footerlogo">The Egg Cafe</a>
    </div>
    <div className="social-footer-icons">
      <ul className="menu simple">
        <li><a href="https://www.facebook.com/theeggrestaurants"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
        <li><a href="https://www.instagram.com/theeggatdavidson"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
        <li><a href="https://twitter.com/?lang=en"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
      </ul>
    </div>
  </footer>
    </div>
  )
}

export default Footer