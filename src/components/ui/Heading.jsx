const Heading = ({ title, size = "text-2xl" }) => {

  return (
    <h1 className={`mb-4 ${size} font-bold leading-none md:${size} lg:${size} dark:text-white`}>
      {title}
    </h1>
  );
}

export default Heading;
