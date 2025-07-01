import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1 className="flex flex-col font-semibold text-center text-4xl text-white">
        ¡Página No Encontrada! <span className="mt-5 font-bold">404</span>
      </h1>
      <p className="mt-10 text-center text-white">
        Tal vez quieras volver a{" "}
        <Link className="text-fuchsia-500 hover:underline " to={"/"}>
          Proyectos
        </Link>
      </p>
    </>
  );
}
