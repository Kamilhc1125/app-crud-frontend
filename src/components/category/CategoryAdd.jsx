import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAxios, useHandleChange } from "../../hooks";

import { Button, Heading, Input } from "../ui";

const CategoryAdd = () => {

  const navigate = useNavigate();
  const { response, error, loading, fetchData } = useAxios();
  const { values, handleChange } = useHandleChange({
    name: ''
  });

  const handleAddCategory = () => {

    fetchData({
      url: "/category",
      method: "POST",
      data: {
        name: values.name
      }
    });
    navigate('/category')
  };

  return (
    <>
      <Heading title="Product - Add" />
      <div className='max-w-sm round-shadow p-4 mx-auto'>
        <Input label="Category name" id="name" name="name" onChange={handleChange} />
        <div className="flex justify-between mt-4">
          <Button title="Back" onClick={() => navigate('/category')} brandColor="btn-neutral-content" />
          <Button title="Add Category" onClick={() => handleAddCategory()} />
        </div>
      </div>
    </>
  )
}

export default CategoryAdd;
