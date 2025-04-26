import { useNavigate } from "react-router-dom"
import { Button, Heading } from "../ui"

const Hero = () => {

  const navigate = useNavigate();

  return (
    <div className="hero min-h-[calc(100vh-250px)]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <Heading title="Welcome" size="text-5xl" />
          <p className="py-6">
            Welcome to the main page. Click button below to display product list.
          </p>
          <Button
            title="Product List"
            brandColor="btn-primary"
            onClick={() => navigate("product")}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
