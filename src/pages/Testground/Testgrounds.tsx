import { NavLink, Outlet } from "react-router-dom";
import { getTestgrounds } from "../../data";

export const Testgrounds = () => {
  let testgrounds = getTestgrounds();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
          marginRight: "1rem",
        }}
      >
        {testgrounds.map((testground) => (
          <NavLink
            style={({ isActive }) => ({
              display: "block",
              marginBottom: "20px",
              color: isActive ? "#fa3040" : "#fff",
            })}
            to={`/testgrounds/${testground.id}`}
            key={testground.id}
          >
            {testground.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
};
