import Image, { StaticImageData } from 'next/image';
import styles from './categoryCircle.module.css'

interface CategoryCircleProps {
  bgColor: string;
  categoryIcon:StaticImageData;
  categoryName:string;
}

const CategoryCircle = ({bgColor, categoryIcon, categoryName}:CategoryCircleProps) => {
 

  return (
    <div style={{ backgroundColor: bgColor }} className={`Circle w-60 h-60 lg991:w-[200px] lg991:h-[200px] xl:w-60 xl:h-60 border-[30px] border-[#0000000d] rounded-[240px] flex flex-col justify-center items-center mx-10 pt-5 transition-[box-shadow] duration-500`}>
        <Image width={70} src={categoryIcon} alt={categoryName}></Image>
        <h3 className="text-white tracking-[2px] uppercase mt-0 text-sm leading-[38px] font-normal">{categoryName}</h3>
    </div>
  )
}

export default CategoryCircle
