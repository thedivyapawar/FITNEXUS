import contactimg from '../assets/Images/contact-girl.png'
import '../assets/CSS/Contact.css'

function Contact() {

    return (
      <>
        <div className="row justify-content-center align-items-center pt-5 pt-md-0" style={{backgroundColor:"#e6c6f0"}}>

          <div className="col-md-5 text-center text-md-start my-3 my-md-0">
            <h1 className='fw-bolder font-contact'>NEED A FITNESS TRAINER?</h1>
            <h1 className='fw-bolder font-contact'>Call : +130-4044888 </h1>
            <button className='get-started '>JOIN OUR TEAM</button>
          </div>

          <div className="col-md-5 d-flex justify-content-center overflow-hidden mt-3 mt-md-0">
            <img src={contactimg} alt="contactimg"  className='img-fluid rounded-4 contact-girl'  />
          </div>

        </div>
      </>
    )
  }
  
  export default Contact