import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h2>Oops!!</h2>
      <h3>Something Went wrong!!</h3>
      <h4>
        {err.status} : {err.statusText}
      </h4>
    </div>
  );
};

export default Error;
