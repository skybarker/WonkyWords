import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oh No!</h1>
      <p>Something Wonky occurred.</p>
      <p>
        <em>{error.statusText || error.message}</em>
      </p>
    </div>
  );
}
