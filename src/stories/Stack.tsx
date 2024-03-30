// Dùng /** */ để thêm mô tả 
type Props = {
   spacing?: number
   direction?: 'row' | 'column'
   wrap?: boolean,
   children?: React.ReactNode,
   numberOfChildren?: number
 }
 
 const Stack = ({spacing = 2, direction = 'row', wrap = false, children = <></> } : Props) => {
    return (
        <div 
            style={{
                display: 'flex',
                flexDirection: direction,
                flexWrap: wrap ? "wrap" : "nowrap",
                gap: `${spacing * 0.25}rem`
            }}
        >
            {children}
        </div>
    )
 }
 
 export default Stack