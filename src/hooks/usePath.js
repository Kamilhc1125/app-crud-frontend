import { useLocation } from "react-router";

const usePath = () => {

  const location = useLocation();
  const path = location.pathname;
  
  const array = path.split('/').filter((e) => { return e });

  return { array, path };

}

export default usePath;