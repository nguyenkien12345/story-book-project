// Dùng /** */ để thêm mô tả 
type Props = {
   label?: string
   backgroundColor?: string
   size?: 'sm' | 'md' | 'lg'
   handleClick?: () => void // Cách định nghĩa 1
   // handleClick: Function   // Cách định nghĩa 2
}

const ButtonStory = ({label = '', backgroundColor = "red", size = "md", handleClick} : Props) => {
    let scale = 1
    if(size === 'sm') scale = 0.75
    if(size === 'lg') scale = 1.5

    return (
        <button 
            style={{ 
                backgroundColor: backgroundColor, 
                padding: `${scale * 0.5}rem ${scale * 1}rem`, 
                border: "none" 
            }}
            onClick={handleClick}
        >
            {label}
        </button>
    )
}

export default ButtonStory