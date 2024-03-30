// Dùng /** */ để thêm mô tả 
type Props = {
    /** Allows color changes */
    variant?: 'green' | 'yellow' | 'red'
    /** Allows content changes */
    text?: string
}

/** This is description about component Light */
const Light = ({variant = 'green', text = ''} : Props) => {
    return (
        <div 
            style={{ 
                width: 60, 
                height: 60, 
                borderRadius: '50%', 
                background: variant, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
            }}>
            {text}
        </div>
    )
}

export default Light