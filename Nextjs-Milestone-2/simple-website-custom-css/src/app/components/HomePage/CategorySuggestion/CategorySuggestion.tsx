import styles from "./categorySuggestion.module.css";
import blackGoldVase from "@/app/images/CategorySuggestion/blackGoldVase.png";
import orangeVase from "@/app/images/CategorySuggestion/orangeVase.png";
import Suggestion from "./Suggestion";
import VerticalText from "../../Utils/VerticalText/VerticalText";

const CategorySuggestion = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

     <Suggestion image={blackGoldVase} heading="Gold & Black Pottery" para="Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute."/>
     <Suggestion image={orangeVase} heading="Orange Ceramic" para="Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute." second={true}/>
        
      </div>
    <VerticalText text="Featured Products" right={true}/>
      
    </section>
  ) 
}

export default CategorySuggestion
