import { Outlet } from "react-router-dom";
import { Breadcrumbs } from "../components/ui";
import { usePath } from "../hooks";

const Category = () => {

  const { array, path } = usePath();

  return (
    <>
      <Breadcrumbs array={array} path={path} />
      <Outlet />
    </>
  )
}

export default Category;
