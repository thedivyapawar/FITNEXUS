import "../assets/CSS/Card.css"

function Card() {

    return (
      <>
        <div className=" row justify-content-evenly align-items-center flex-wrap my-5">
         
            <p className="fs-1 fw-bolder text-center fst-italic" >
            FITNESS FORMULA
            </p>
  
              <div className="col-10 col-md-4 col-lg-2 my-4 d-flex justify-content-center rounded-4">

              <div className="main-card align-items-center">

                <p className="px-1"> Stay consistent and track your growth. </p>

                <h1 className="icon fs-1">
                  <i className='bx bxs-stopwatch'></i>
                </h1>
                
                <p className="fs-5">PROGRESSION</p>
              </div>


              </div>
              <div className="col-10 col-md-4 col-lg-2 my-4 d-flex justify-content-center">

              <div className="main-card align-items-center">

                  <p className="px-1"> A routine that includes strength and cardio is key. </p>

                  <h1 className="icon fs-1">
                  <i className='bx bx-dumbbell' ></i>
                  </h1>

                  <p className="fs-5">WORKKOUT</p>
                  </div>

              </div>

              <div className="col-10 col-md-4 col-lg-2 my-4 d-flex justify-content-center">

                <div className="main-card align-items-center">

                  <p className="px-1"> Fuel your progress with the right nutrition. </p>

                  <h1 className="icon fs-1">
                  <i className='bx bx-calendar-check' ></i>
                  </h1>

                  <p className="fs-5">NUTRITIONS</p>
                </div>

              </div>

              <div className="col-10 col-md-4 col-lg-2 my-4 d-flex justify-content-center d-none d-lg-block">

                <div className="main-card align-items-center">

                  <p className="px-1">Stay dedicated and persistent with consistent. </p>

                  <h1 className="icon fs-1">
                  <i className='bx bx-run'></i>
                  </h1>

                  <p className="fs-5">CONSISTENCY</p>
                </div>

              </div>

            </div>
          
      </>
    )
  }
  
  export default Card