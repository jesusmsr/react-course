export const Square = ({children, updateBoard, index, isSelected})=>{
    const className = `square ${isSelected ? 'is-selected' : ''}`
    return <div onClick={()=>updateBoard(index)} className={className} key={index}><span className="cell__content">{children}</span></div>
  }