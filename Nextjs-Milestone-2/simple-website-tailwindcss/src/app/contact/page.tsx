import Banner from "../components/Utils/Banner/Banner";
import ContainerHeadings from "../components/Utils/ContainerHeadings/ContainerHeadings";
import ContactForm from "../components/ContactPage/ContactForm";

const Contact = () => {
  return (
    <div>
      <Banner heading="Contact Us" bgImg="images/ContactBanner/ContactBanner.jpg" contactPage={true}/>
       <section className="w-full mt-[120px] relative">
      <ContainerHeadings heading="Lets get in touch" subtitle="Contact Us"/>
      <div className="container w-full xl:w-[1200px] mx-auto p-2 sm:px-6 text-center ">
        <div className="textContainer p-0 w-full flex flex-col gap-5 sm:gap-10 md:gap-0 items-center md:items-start md:flex-row md:justify-between lg:px-[150px] self-center mb-10 ">
          <div className="text w-[80%] xs:w-[35%] md:w-1/4 lg:w-1/3 text-center ">
            <h5 className="heading text-[13px] font-semibold leading-[23px] mt-[10px] mb-5 uppercase tracking-[1px] ">PHONE</h5>
            <p className="para libre-franklin font-medium text-sm leading-6 text-main-gray ">+1 929 234 5678</p>
          </div>
          <div className="text w-[80%] xs:w-[35%] md:w-1/4 lg:w-1/3 text-center ">
            <h5 className="heading text-[13px] font-semibold leading-[23px] mt-[10px] mb-5 uppercase tracking-[1px] ">LOcation</h5>
            <p className="para libre-franklin font-medium text-sm leading-6 text-main-gray ">2567 Fifth Ave, New York City,
NY 20035, USA</p>
          </div>
          <div className="text w-[80%] xs:w-[35%] md:w-1/4 lg:w-1/3 text-center ">
            <h5 className="heading text-[13px] font-semibold leading-[23px] mt-[10px] mb-5 uppercase tracking-[1px] ">Email</h5>
            <p className="para text-xs libre-franklin font-medium sm:text-sm leading-6 text-main-gray ">pompoe@pottery1990.com</p>
          </div>
        </div>
        <div style={{"backgroundImage": 'url("images/Contact/contactFormBanner.jpeg")', "backgroundPosition": "0 51%", "backgroundSize": "cover",}} className="bannerImage w-auto h-[200px] block ">
        </div>
      </div>
       </section>
       <ContactForm/>
    </div>
  ) 
}

export default Contact
