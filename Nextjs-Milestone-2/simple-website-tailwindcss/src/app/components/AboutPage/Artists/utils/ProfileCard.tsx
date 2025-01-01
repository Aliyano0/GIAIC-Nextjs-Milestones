import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { FaSquareFacebook, FaSquareXTwitter,FaLinkedin } from "react-icons/fa6";

interface ProfileCardProps {
  image: StaticImageData;
  name: string;
};

const ProfileCard = ({
  image,
  name
}:ProfileCardProps) => {
  return (
    <div className="CardWrapper px-6">

    <div className="ProfileCard m-0 w-full flex flex-col items-center text-center bg-white py-6 px-[18px] rounded-lg shadow-md max-w-[300px] xs:mx-5 ">
      <div className="ImageContainer w-[90px] h-[90px] mx-auto mb-[15px] rounded-full overflow-hidden border-[3px] border-[#f5f5f5] ">
        <Image objectFit="cover" src={image} alt={name} />
      </div>
      <h3 className="name text-[15px] font-medium leading-[25px] ">{name}</h3>
      <p className="Designation text-[10px] text-[#a1a1a1] leading-[25px] font-medium mb-4 uppercase tracking-[1px] ">Senior Developer</p>
      <p className="Description libre-franklin text-sm text-main-gray leading-6 mb-6 text-left ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.  enim in eros elementum</p>
      <div className="SocialLinks w-8 h-8 bg-[#f5f5f5] flex justify-center items-center text-[#555] transition-all duration-[0.3s] "> 
          <Link className="hover:bg-[#555] text-white " href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaSquareFacebook />
          </Link>  
          <Link className="hover:bg-[#555] text-white " href="https://twitter.com/"  target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter />
          </Link>
          <Link className="hover:bg-[#555] text-white " href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </Link>  
      </div>
      </div>
    </div>
  );
};

export default ProfileCard;
