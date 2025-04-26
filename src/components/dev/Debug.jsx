import { Heading } from "../ui"

const Debug = () => {

  return (
    <div className="container mx-auto my-5" >
      <Heading title='Debug' />
      {import.meta.env.VITE_API_PRODUCT_BASE_URL}
    </div>
  )
}

export default Debug
