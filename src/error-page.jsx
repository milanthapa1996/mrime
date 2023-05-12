import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-slate-800 font-semibold text-2xl">Oops!</h1>
      <p className="text-slate-700">Sorry, an unexpected error has occurred.</p>
      <p className="text-slate-600">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}