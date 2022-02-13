import { Outlet, Link } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/">Home</Link> |{" "}
        <Link to="/Lala">Lalal</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default MainLayout;
