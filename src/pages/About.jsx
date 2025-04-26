import { Accorrdion } from "../components/main";
import { usePath } from "../hooks";
import { Breadcrumbs, Heading } from "../components/ui";
import { faq } from "../data/constants";

const About = () => {

  const { array, path } = usePath();

  return (
    <>
      <Breadcrumbs array={array} path={path} />
      <Heading title='About' />
      <Accorrdion data={faq} />
    </>
  )
}

export default About;
