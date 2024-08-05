import "./Head.css"
import { scroller } from 'react-scroll';

function Head() {
  const handleClick = (e) => {
    e.preventDefault()
    scroller.scrollTo('navbar', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  
  return (
    <div className="main" id="top">
        {/* <div classNameName='header'></div> */}
        <div className="bg header">
        <div className="content">
            <h1>Hello, I'm <span>Amit Singh</span>.</h1>
            <p>I'm a full-stack web developer.</p>
            <a href="/" className="btn-custom" onClick={handleClick}><span>View my work</span> <i className="fas fa-long-arrow-alt-right"></i></a>
        </div>
    </div>
    </div>
  )
}

export default Head