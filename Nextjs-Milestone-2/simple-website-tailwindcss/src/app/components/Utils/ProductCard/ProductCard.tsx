
import Image, { StaticImageData } from "next/image";


interface ProductCardProps {  
  productImage: StaticImageData;
  productName: string;
  price: string;
  altText: string;
}
const ProductCard = ({productImage, productName, price, altText}:ProductCardProps) => {
  return (
    <div className="CardContainer w-auto h-[450px] xxs:w-[370px] xxs:h-[580px] md:w-auto md:h-[530px] lg2:w-[370px] lg2:h-[580px] lg:w-auto lg:h-[520px] xl:w-[370px] xl:h-[580px] mb-5 border-b-[1px] border-b-[#dbdbdb] cursor-pointer hover:border-b-main-red transition-all duration-[0.4s]">
      <div className="productImage w-full h-[375px] xxs:h-[495px] md:h-[455px] lg2:h-[495px] lg:h-[435px] xl:h-[495px]">
        <Image className="productImage w-full h-[375px] xxs:h-[495px] md:h-[455px] lg2:h-[495px] lg:h-[435px] xl:h-[495px]" src={productImage} alt={altText}></Image>
      </div>
      <div className="text-left my-[15px]">
        <h3 className="ProdcutName text-base font-normal leading-[26px] text-main-gray libre-franklin">{productName}</h3>
        <p className="Price text-sm font-semibold leading-6">$ {price} USD</p>
      </div>
    </div>
  )
}

export default ProductCard
