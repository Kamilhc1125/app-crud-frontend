import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAxios, useHandleChange } from "../../hooks";

import { Button, Heading, Input } from "../ui";
import { CategorySelect } from "../category";

const ProductAdd = () => {

  const navigate = useNavigate();
  const { response, error, loading, fetchData } = useAxios();
  const { values, handleChange } = useHandleChange({
    name: '',
    price: '',
    categoryId: '1'
  });

  const handleAddProduct = () => {

    fetchData({
      url: "/product",
      method: "POST",
      data: {
        name: values.name,
        price: values.price,
        categoryId: values.categoryId
      }
    });
    navigate('/product')
  };
 
  useEffect(() => {
    fetchData({
      url: "/category",
      method: "GET",
    });
  }, []);

  return (
    <>
      <Heading title="Product - Add" />
        {!loading &&

          <div className='max-w-sm round-shadow p-4 mx-auto'>
            <Input label="Product name" id="name" name="name" onChange={handleChange} />
            <Input label="Price" id="price" name="price" onChange={handleChange} pattern="\d{1,5}" />
            <CategorySelect onChange={handleChange} />
            <div className="flex justify-between">
              <Button title="Back" onClick={() => navigate('/product')} brandColor="btn-neutral-content" />
              <Button title="Add Product" onClick={() => handleAddProduct()} />
            </div>
          </div>
          }
    </>
  )
}

export default ProductAdd;
