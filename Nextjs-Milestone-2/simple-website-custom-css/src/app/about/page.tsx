import Artists from "../components/AboutPage/Artists/Artists"
import Mission from "../components/AboutPage/Mission/Mission"
import ProductCategories from "../components/HomePage/ProductCategories/ProductCategories"
import Banner from "../components/Utils/Banner/Banner"


const About = () => {
  return (
    <div>
      <Banner bgImg="images/AboutUsBanner/AboutUsBanner.jpg" heading="About Us" aboutUsPage={true}/>
      <ProductCategories />
      <Artists/>
      <Mission/>
    </div>
  )
}

export default About
