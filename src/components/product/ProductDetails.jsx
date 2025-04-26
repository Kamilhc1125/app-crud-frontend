import { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import { useParams } from 'react-router-dom';
import { useAxios, useHandleChange, useToggle } from '../../hooks';

import { Button, Heading, Input, Modal } from "../ui";
import { CategorySelect } from '../category';

import { useDispatch, useSelector } from "react-redux";
import { setProduct } from '../../redux/slices/productSlice';


const ProductDetails = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const { isOpen: modalOpen, open: openModal, close: closeModal } = useToggle();

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);

  const { response, error, loading, fetchData } = useAxios();
  const { values, setValues, handleChange } = useHandleChange();

  const handleCheck = () => {
    console.log('product', product);
    console.log('values:', values);
    console.log('response:', response);
  }

  const handleDelete = async () => {
    try {
      await fetchData({ url: `/product/${id}`, method: "DELETE" });
      navigate("/product");
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  const handleUpdate = async () => {
    try {
      await fetchData({
        url: `/product/${id}`,
        method: "PUT",
        data: {
          name: values.name,
          price: values.price,
          categoryId: values.categoryId
        }
      });
      navigate('/product');
    } catch (err) {
      console.error("Error updating product", err)
    }
  };

  useEffect(() => {
    if (id) fetchData({ url: `/product/${id}`, method: "GET", });
  }, [id]);

  useEffect(() => {
    if (response) {
      dispatch(setProduct(response));
      setValues(response);
    } 
  }, [response, dispatch, setValues]);


  if (loading) return <p>Loading product...</p>;
  if (error) return <p>Error loading product: {error}</p>;

  return (
    <>
      
      <Heading title={`Product Details - ID: ${id}`} />
      {(!loading && product !== null) && (
        <div className='max-w-sm round-shadow p-4 mx-auto'>
          <Input
            label="ID" 
            id="id"
            name="id"
            defaultValue={product.id}
            isDisabled="true"
          />
          <Input
            label="Name"
            id="name"
            name="name"
            defaultValue={product.name}
            onChange={handleChange}
          />
          <Input
            label="Price"
            id="price"
            name="price"
            defaultValue={product.price}
            onChange={handleChange}
          />
          <CategorySelect onChange={handleChange} selectedCategoryId={product.categoryId} />
          <div className="flex justify-between">
            <Button onClick={() => navigate('/product')} title="Back" brandColor="btn-neutral-content" />
            <Button onClick={handleCheck} title="Check" brandColor="btn-neutral-content" />
            <Button onClick={openModal} title="Delete" />
            <Button
              onClick={handleUpdate}
              title="Update"
            //disabled={values.length == 0 ? "disabled" : ""} 
            />
          </div>
        </div>
      )}
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        onClick={handleDelete}

      />
    </>
  )
}

export default ProductDetails;
