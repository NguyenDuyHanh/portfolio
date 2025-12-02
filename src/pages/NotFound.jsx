import notFound from '../../public/assets/images/Group.png';

const NotFound = () => {
  return (
    <div className='flex flex-col items-center gap-20 h-screen'>
        <img className='' src={notFound} alt="Not Found"/>
        <p>Opps! Page Not Found</p>
        <button 
            className='bg-amber-600 text-white px-8 py-2 rounded cursor-pointer'
            onClick={() => window.history.back()}
        >
            Go back
        </button>
    </div>
  )
}

export default NotFound