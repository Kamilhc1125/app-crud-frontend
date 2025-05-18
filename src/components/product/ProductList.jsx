
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Heading, Loader } from "../ui";
import { useAxios } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/slices/productSlice";

const ProductList = () => {

  console.clear();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const { response, error, loading, fetchData } = useAxios();

  const handleProductDetails = (e) => {
    const id = e.currentTarget.id;
    navigate(`/product/${id}`);
  };

  let totalPrices = 0;

  for (let i = 0; i < products.length; i++) {
    totalPrices += products[i].price;
  }

  useEffect(() => {
    fetchData({
      url: "/product/category",
      method: "GET",
    });
  }, []);

  useEffect(() => {
    if (response) dispatch(setProducts(response));
  }, [response, dispatch]);

  if (loading) return (
    <div className="container mx-auto h-80 flex items-center justify-center"><Loader /></div>
  )
  if (error) return <p>Error loading products: {error}</p>;

  return (
    <>
      <Heading title="Product - List" />
      <div className="overflow-x-auto round-shadow mb-5">
        <table className="table [&_tr.hover:hover_*]:!bg-secondary">
          <thead>
            <tr>
              <th>#</th>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {products && products.map((product, index) => {

              const { id, name, price, categoryName } = product;

              return (
                <tr
                  key={index}
                  className="hover hover:cursor-pointer"
                  id={id}
                  onClick={handleProductDetails}
                >
                  <td>{index + 1}</td>
                  <td>{id} </td>
                  <td>{name}</td>
                  <td>$ {price.toFixed(2)}</td>
                  <td>{categoryName}</td>
                </tr>
              )
            })}
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th>$ {totalPrices.toFixed(2)}</th>
              <th>Total</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="float-right">
        <Button
          title="Add New Product"
          brandColor="btn-accent"
          onClick={() => navigate(`/product/add`)}
        />
      </div>

    </>
  )
}

export default ProductList;
