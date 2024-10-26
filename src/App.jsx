import { BrowserRouter } from "react-router-dom"
import { About , Contact, Experience, Feedbacks, Hero, Loader, Navbar, StarsCanvas, Tech, Works} from "./components"

const App = () => {

  return (
    <BrowserRouter>
      <div className = "relative z-0 bg-primary">
        <div className = " bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero/>
        </div>
        <About/>
        {/* <Experience/> */}
        {/* <Tech/> */}
        <Works/>
        {/* <Feedbacks /> */}
        <div className = "relative z-o">
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
