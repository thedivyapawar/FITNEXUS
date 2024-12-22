import subsection from '../assets/Images/sub-section.png'
import "../assets/CSS/About.css"

function About() {

    return (
      <>
        <div className="row justify-content-center align-items-center bg-black text-white py-5">
          <div className="col-11 col-md-5">
              <p className="fs-2" style={{color:"#d778ce"}}>Welcome to <span className='fw-bolder'>FITNEXUS FITNESS</span></p>
              <h1 className="font-about fw-bold fst-italic">FOCUS ON YOUR <br /> FITNESS NOT <br />YOUR LOSS</h1>
              <p className='subtext'>We understand that every journey is unique. <br /> It’s not about what you’ve lost, but what you’ve gained: strength, endurance, confidence, and overall well-being. <br />
              At FITNEXUS FITNESS, we encourage you to focus on the progress you make each day, not on past setbacks.</p>
          </div>

          <div className="col-md-5">
              <img src={subsection}
              alt="image" className='img-fluid about-img' />
          </div>
        </div>
      </>
    )
  }
  
  export default About