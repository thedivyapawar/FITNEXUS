import "../assets/CSS/Home.css"
import main from "../assets/Images/main-bg.jpg"
import { Link } from "react-router-dom"

function Home() {

    return (
        <div className="container-fluid g-0">
          <div className="row justify-content-between  g-0 home-bg ">
            <div className="col-md-4 margin-div">
              <h1 className="fw-bold fst-italic font-big strokeme hollow-text text-black" >SPEAK</h1>
              <h1 className="fw-bold fst-italic font-big hollow-text" style={{color:"#8f9af6"}}>FITNESS</h1>
              <h1 className="fw-bold fst-italic font-big strokeme hollow-text text-black" >WITH YOUR</h1>
              <h1 className="fw-bold fst-italic font-big hollow-text" style={{color:"#8f9af6"}}>BODY</h1>

              <Link to="/workout" className="text-decoration-none">  
                <button className="get-started ">
                    Get Started
                </button>
              </Link>

            </div>

            <div className="col-md-1 justify-content-center d-md-flex flex-column gap-2  gap-lg-4 d-none ">

                <p><i className='bx bxl-facebook-circle fs-1'></i></p>
                <p><i className='bx bxl-youtube fs-1' ></i></p>
                <p><i className='bx bxl-twitter fs-1' ></i></p>
                <p><i className='bx bxl-instagram-alt fs-1' ></i></p>

            </div>

          </div>
        </div>
    )
  }
  
  export default Home