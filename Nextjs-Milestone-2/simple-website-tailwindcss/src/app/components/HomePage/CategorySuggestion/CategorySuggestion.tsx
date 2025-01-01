
import blackGoldVase from "@/app/images/CategorySuggestion/blackGoldVase.png";
import orangeVase from "@/app/images/CategorySuggestion/orangeVase.png";
import Suggestion from "./Suggestion";
import VerticalText from "../../Utils/VerticalText/VerticalText";

const CategorySuggestion = () => {
  return (
    <section className="section w-full py-[120px] relative border-t-[1px] border-t-[#ebebeb]">
      <div className="container w-full xl:w-[1200px] mx-auto px-6">

     <Suggestion image={blackGoldVase} heading="Gold & Black Pottery" para="Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute."/>
     <Suggestion image={orangeVase} heading="Orange Ceramic" para="Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute." second={true}/>
        
      </div>
    <VerticalText text="Featured Products" right={true}/>
      
    </section>
  )  
}

export default CategorySuggestion
