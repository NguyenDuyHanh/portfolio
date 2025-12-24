
const Button = ({name, onClick}) => {
  return (
    <button 
        className="py-3 px-6 rounded-full text-lg font-medium bg-(--bg-btn) text-(--text-btn) cursor-pointer hover:opacity-80 transition-opacity duration-300"
        onClick={onClick}
    >
        {name}
    </button>
  )
}

export default Button