import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="bg-dark text-light pt-5 mt-5">
        <div className="container-fluid">
          <div className="row">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo repudiandae alias inventore corrupti sunt. Et quas mollitia quod in nam, atque obcaecati deserunt molestiae nobis illo libero officia sunt accusamus.</p>
            <div className="col-md-4">
              <h4>About Us</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, accusantium?</p>
            </div>
            <div className="col-md-4">
              <h4>Contact Info</h4>
              <ul>
                <li>Email: contact@flowershop.com</li>
                <li>Phone: +1 234 567 890</li>
                <li>Address: 123 Flower Street, Blossom City</li>
              </ul>
            </div>
            <h5>Pages</h5>
            <ul className='list-unstyled'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About Us</Link></li>
              <li><Link to='/service'>Service</Link></li>
              <li><Link to='/contacts'>Contact</Link></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5>Follow Us</h5>

            <Link to='#' className=''></Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer