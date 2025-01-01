

interface ContainerHeadingsProps {
  subtitle: string;
  heading: string;
}

const ContainerHeadings = ({subtitle, heading}:ContainerHeadingsProps) => {
  return (
    <div className="w-full text-center">
      <p className="text-sm leading-6 font-normal tracking-[2px] uppercase text-subtitle">{subtitle}</p>
        <h1 className="xs:text-[40px] text-black font-medium xs:leading-[50px] mt-5 mb-[60px] text-3xl leading-[40px]">{heading}</h1>
    </div>
  )
}

export default ContainerHeadings
