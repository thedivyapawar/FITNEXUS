import './App.css'
import { Outlet } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Error from './Components/Error'
import WorkoutPage from "./Pages/WorkoutPage"
import ContactPage from "./Pages/ContactPage"
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import BodyPartExercises from './Components/BodyPartExercises'
import ExerciseDetails from './Components/ExeciseDetails'

function App() {

  return (
    <>
      <div className='container-fluid p-0 m-0 '>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </div>
    </>
  )
}

export default App

export const myRouter = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    errorElement :<Error/>,
    children : [
      {
          path : "/",
          element : <HomePage/>
      },
      {
        path : "/workout",
        element : <WorkoutPage/>
      },
      {
        path : "/contact",
        element : <ContactPage/>
      },
      {
        path : "/exercise/:bodypart",
        element : <BodyPartExercises/>
      },
      {
        path : "/bodypart/:id",
        element : <ExerciseDetails/>
      },
    ]
  }
])
