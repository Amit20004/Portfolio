import "./Navbar.css"
import { Element } from 'react-scroll';
import { scroller } from 'react-scroll';

const Navbar=()=> {
  const handleClick1 = (e) => {
    e.preventDefault()
    scroller.scrollTo('about', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };
  const handleClick2 = (e) => {
    e.preventDefault()
    scroller.scrollTo('project', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };
  const handleClick3 = (e) => {
    e.preventDefault()
    scroller.scrollTo('contacts', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };
  
 
  return (
    
    <>
      <Element name="navbar">
    <nav className="navbar navbar-expand-lg navbar-light" >
   <div className="container">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a
           className="nav-link" href='/' onClick={handleClick1}>About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/" onClick={handleClick2}>Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/" onClick={handleClick3}>Contact Us</a>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link social-icon" href="/"><i className="fab fa-facebook-f"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link social-icon" href="/"><i className="fab fa-twitter"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link social-icon" href="/"><i className="fab fa-instagram"></i></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</Element>

        
    </>        
  
  )
}

export default Navbar;

