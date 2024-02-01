import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';


const BackButton = ({ destination = '/' }) => {
  return (
    <div className='flex'>
      <Link to={destination} className='px-4 py-1 bg-sky-700 text-white rounded-lg w-fit'>
        <BsArrowLeft className='mr-2' />
      </Link>
    </div>
  )
}

export default BackButton