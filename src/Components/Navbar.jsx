import { Link } from "react-router-dom"
import '../assets/CSS/Navbar.css'

function Navbar() {

    return (
      <>
        <nav className="navbar navbar-expand-md bg-black mb-sm-4 mb-md-0" >
          <div className="container-fluid px-md-5 mb-2 my-md-1">

            <Link className="navbar-brand fw-bold navy fs-4 fs-lg-3 text-white" to="/">FITNEXUS</Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon "></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-md-auto mb-2 mb-lg-0 text-white">

                <li className="nav-item">
                  <Link className="nav-link navy fs-lg5 fw-bold  mx-md-2 mx-lg-4 text-white" aria-current="page" to="/">Home</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link navy fs-lg-5 fw-bold  mx-md-2 mx-lg-4 text-white" to="/workout">Workout</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link navy fs-lg-5 fw-bold  mx-md-2 mx-lg-4 text-white" to="/contact">Contact</Link>
                </li>
                
              </ul>



              <form className="" role="search">
                <a href="https://www.linkedin.com/in/heydivyapawar/" target="_blank" className=" d-flex align-items-center text-decoration-none gap-3 text-black">
                <span className="fs-lg- 5 text-white navy">Developer</span>
                <i className='bx bx-right-arrow-alt text-center fs-lg-5 text-white navy'></i>
                </a>
              </form>


            </div>
          </div>
        </nav>
      </>
    )
  }
  
  export default Navbar