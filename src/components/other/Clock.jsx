import { useState } from 'react';
import { Loader } from '../ui';

const Clock = () => {

  let [currentTime, setCurrentTime] = useState(null);

  const updateTime = () => {
    
    let time = new Date().toLocaleTimeString();;
  
    setCurrentTime(time);

  }

  setInterval(updateTime, 1000);

  return (
    <p className='text-center w-24'>
      {currentTime == null ? <Loader size="loading-xs" />: <span>{currentTime}</span>}
    </p>
  );
}

export default Clock;