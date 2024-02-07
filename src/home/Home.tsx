import AboutUs from "./AboutUs"
import AppSection from "./AppSection"
import Banner from "./Banner"
import CategoryShowCase from "./CategoryShowCase"
import Homecategory from "./HomeCategory"
import Location from "./Location"
import Register from "./Register"
import Sponsor from "./Sponsor"

const Home = () => {
  return (
    <div className="" >
      <Banner />
      <Homecategory />
      <CategoryShowCase />
      <Register />
      <Location />
      <AboutUs />
      <AppSection />
      <Sponsor />
    </div>
  )
}

export default Home
