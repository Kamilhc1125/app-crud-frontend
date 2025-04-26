import React, { useEffect } from 'react';
import { useAxios } from '../../hooks';
import { useDispatch, useSelector } from "react-redux";
import { setCategories, setSelectedCategory } from "../../redux/slices/categorySlice";

const CategorySelect = ({ onChange, selectedCategoryId }) => {

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const selectedCategory = useSelector((state) => state.category.selected);
  const { response, error, loading, fetchData } = useAxios();
 
  useEffect(() => {
    fetchData({
      url: "/category",
      method: "GET"
    })
  }, []);

  useEffect(() => {
    if (response) {
      dispatch(setCategories(response)); 
    }
    if (selectedCategoryId !== undefined && selectedCategoryId !== null) {
      dispatch(setSelectedCategory(selectedCategoryId));
    }

  }, [response, selectedCategoryId, dispatch]);

  const handleChange = (e) => {
    onChange(e), 
    dispatch(setSelectedCategory(e.target.value))
  }

  return (
      <label className="form-control w-full max-w-sm mb-4">
        <div className="label">
          <span className="label-text">Category</span>
        </div>
        {!loading && categories && selectedCategory &&
          <select
            id="categoryId"
            name="categoryId"
            className="select select-bordered"
            value={selectedCategory}
            onChange={handleChange}
          >
            {categories.map((category, index) => {
              const { id, name } = category;
              return <option key={index} value={id}>{name}</option>
            })}
          </select>
        }
      </label>
  )
}

export default CategorySelect;
