import styles from './verticalText.module.css'

interface VerticalTextProps {
  text: string;
  right?: boolean;
  left?: boolean;
}

const VerticalText = ({text, right=false, left= false}:VerticalTextProps) => {
  return (
       <div className={`${styles.verticalHeading}
       ${right ? styles.verticalHeadingRight : ''} 
       ${left ? styles.verticalHeadingLeft : ''}
       `}>
        {text}
      </div>
      
  )
}

export default VerticalText
