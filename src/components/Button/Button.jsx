
const Button = ({name, onClick}) => {
  return (
    <button 
        className="py-3 px-6 rounded-full text-lg font-medium bg-(--bg-dark) dark:bg-(--bg-light) text-(--text-primary-dark) dark:text-(--text-primary-light) cursor-pointer hover:opacity-80 transition-opacity duration-300"
        onClick={onClick}
    >
        {name}
    </button>
  )
}

export default Button