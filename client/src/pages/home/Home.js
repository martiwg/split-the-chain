import Navbar from "./components/Navbar/Navbar"
import Landing from "./components/Landing/Landing"
import Bulletpoints from "./components/Bulletpoints/Bulletpoints"
import Card from "./components/Card/Card"

const Home = () => {
  return(
    <div>
      <Navbar />
      <Landing />
      <Card />
      <Bulletpoints />
    </div>
  )
}

export default Home