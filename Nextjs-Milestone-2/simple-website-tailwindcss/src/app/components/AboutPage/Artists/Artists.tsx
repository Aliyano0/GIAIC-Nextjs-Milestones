import ContainerHeadings from "../../Utils/ContainerHeadings/ContainerHeadings"
import ProfileCard from "./utils/ProfileCard"
import maria from "@/app/images/Artists/maria.jpeg"
import dominic from "@/app/images/Artists/dominic.jpg"
import eduard from "@/app/images/Artists/eduard.jpg"
import VerticalText from "../../Utils/VerticalText/VerticalText"
const Artists = () => {
  return (
    <section className="section w-full py-[120px] relative border-t-[1px] border-t-[#ebebeb] ">
      <VerticalText text="Our Talented Crew" right={true}/>
      <div className="Container w-full xl:w-[1200px] mx-auto px-6 text-center ">
        <ContainerHeadings subtitle="Our Crew" heading="Talented Artist"/>
        <div className="ArtistCards w-full md:w-auto flex-col md:flex-row justify-center gap-6 md:gap-0 flex items-center md:justify-between ">
          <ProfileCard name="Maria Monroy" image={maria} 
          />
          <ProfileCard name="Dominic Basket" image={dominic} 
          />
          <ProfileCard name="Eduard Fisher" image={eduard} 
          />
        </div>
      </div>
    </section>
  )
}

export default Artists
