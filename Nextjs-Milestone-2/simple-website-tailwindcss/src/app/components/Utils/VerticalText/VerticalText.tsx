
interface VerticalTextProps {
  text: string;
  right?: boolean;
  left?: boolean;
}

const VerticalText = ({text, right=false, left= false}:VerticalTextProps) => {
  return (
       <div className={`" text-[#dbdbdb] tracking-[1px] uppercase text-center text-[22px] font-light leading-[34px] absolute top-[50%] translate-y-[-50%] -rotate-90 hidden xl:inline-block "
       ${right ? "right-0 left-auto " : ''} 
       ${left ? "left-0 right-auto " : ''}
       `}>
        {text}
      </div>
      
  )
}

export default VerticalText
