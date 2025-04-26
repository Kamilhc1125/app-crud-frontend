import { Heading } from "../components/ui";
import { Breadcrumbs } from "../components/ui";
import { usePath } from "../hooks";

const Test = () => {

  const { array, path } = usePath();

  return (
    <>
      <Breadcrumbs array={array} path={path} />
      <Heading title='Test' />
    </>
  )
};

export default Test;