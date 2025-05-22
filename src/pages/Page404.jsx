import { Link } from "react-router";

function Page404() {
  return (
    <div>
      <h2>Oups, il n'y a rien ici...</h2>
      <Link to="/">Retour sur la Homepage</Link>
    </div>
  );
}

export default Page404;
