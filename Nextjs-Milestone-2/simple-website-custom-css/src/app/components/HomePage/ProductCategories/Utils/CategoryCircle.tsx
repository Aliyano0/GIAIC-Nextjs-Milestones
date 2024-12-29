import Image, { StaticImageData } from 'next/image';
import styles from './categoryCircle.module.css'

interface CategoryCircleProps {
  bgColor: string;
  categoryIcon:StaticImageData;
  categoryName:string;
}

const CategoryCircle = ({bgColor, categoryIcon, categoryName}:CategoryCircleProps) => {
 

  return (
    <div style={{ backgroundColor: bgColor }} className={styles.categoryCircle}>
        <Image width={70} src={categoryIcon} alt={categoryName}></Image>
        <h3 className={styles.categoryName}>{categoryName}</h3>
    </div>
  )
}

export default CategoryCircle
