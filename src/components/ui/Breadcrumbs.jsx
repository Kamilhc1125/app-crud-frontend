import { Link } from "react-router-dom";

const Breadcrumbs = ({ array, path }) => {

  const isLast = (index) => index === array.length - 1;

  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li><Link to="/">Home</Link></li>
        {array && array.map((item, index) => {
          const trimmedPath = path.split("/").slice(1, index + 2).join("/");
          return (
            <li className={`capitalize ${isLast(index) ? 'font-semibold' : ""}`} key={index} id={index}>
              <Link to={`${window.location.origin}/${trimmedPath}`}>{item}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Breadcrumbs;
