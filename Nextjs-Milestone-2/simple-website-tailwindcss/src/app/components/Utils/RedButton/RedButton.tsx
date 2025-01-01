
interface RedButtonProps {
  btnText:string;
}
const RedButton = ({btnText}: RedButtonProps) => {
  return (
   <button className="bg-main-red py-5 px-10 text-white text-xs leading-[22px] tracking-[1px] uppercase poppins transition-[ease-in-out] duration-[0.2s] delay-[0.1s] hover:bg-black hover:translate-y-[-5px]">{btnText}</button>
  )
}

export default RedButton
