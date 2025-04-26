import axios from 'axios';
import { useState, useEffect } from 'react';
import Categories from '../components/main/Categories';


const Test = () => {



  useEffect(() => {
    
  }, [])

  return (
    <div>
      <h1 className='text-3xl text-blue-800'>test</h1>
      <button className="btn btn-primary !hover:bg-red-500 !active:bg-green-500">
        Click me
      </button>
      <Categories />
    
    </div>
  )
}

export default Test
