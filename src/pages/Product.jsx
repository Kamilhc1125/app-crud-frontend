import { Outlet } from "react-router-dom";
import { Breadcrumbs } from "../components/ui";
import { usePath } from "../hooks";

const Product = () => {

  const { array, path } = usePath();

  return (
    <>
      <Breadcrumbs array={array} path={path} />
      <Outlet />
    </>
    
  )
}



export default Product;