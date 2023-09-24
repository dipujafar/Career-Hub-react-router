import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center">
      <h1>Oops!!</h1>
      <button className="bg-slate-300 p-2 mt-2 rounded">
        <Link to="/">Go back home</Link>
      </button>
    </div>
  );
};

export default Error;
