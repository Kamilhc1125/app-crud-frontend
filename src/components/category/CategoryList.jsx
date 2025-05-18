import { useEffect } from "react";
import { Button, Heading, Loader } from "../ui";
import { useAxios } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../../redux/slices/categorySlice";

const CategoryList = () => {

  console.clear();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);

  const { response, error, loading, fetchData } = useAxios();

  useEffect(() => {
    fetchData({
      url: "/category",
      method: "GET"
    });
  }, []);

  useEffect(() => {
    if (response) dispatch(setCategories(response));
  }, [response, dispatch]);

  if (loading) return (
    <div className="container mx-auto h-80 flex items-center justify-center"><Loader /></div>
  )

  if (error) return <p>Error loading categories: {error}</p>;

  return (
    <>
      <Heading title="Category - List" />
      <div className="overflow-x-auto round-shadow mb-5">
        {!loading &&
          <table className="table [&_tr.hover:hover_*]:!bg-secondary">
            <thead>
              <tr>
                <th>#</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {categories && categories.map((item, index) => {
                const { id, name } = item;
                return (
                  <tr key={index} className="hover hover:cursor-pointer" id={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        }
      </div>
      <div className="float-right">
        <Button
          title="Add New Category"
          brandColor="btn-accent"
          onClick={() => navigate(`/category/add`)}
        />
      </div>
    </>
  )
}

export default CategoryList;
