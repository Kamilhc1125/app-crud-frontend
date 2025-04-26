import { useNavigate } from 'react-router-dom';
import { Button, Heading } from '../components/ui';
import notFound from '../assets/not_found.svg';

const NotFound = () => {

  const navigate = useNavigate();

  return (
    <div className='grid justify-items-center'>
      <img src={notFound} className='w-80' />
      <Button onClick={() => navigate('/')} title="Home Page" />
    </div>
  )
}

export default NotFound
