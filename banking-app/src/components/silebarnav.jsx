import React from "react";
import { NavLink } from "react-router-dom";
import "../css/side.css";

function Sidebar() {
  const navItems = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/dashboard/branches", label: "Branches" },
    { to: "/dashboard/customers", label: "Customers" },
    { to: "/dashboard/accounts", label: "Accounts" },
    { to: "/dashboard/transactions", label: "Transactions" },
  ];

  return (
    <aside className="simple-sidebar">
      <div className="simple-sidebar__header">
        <h2>Menu</h2>
      </div>

      <nav className="simple-sidebar__nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/dashboard"}
            className={({ isActive }) =>
              `simple-sidebar__link ${isActive ? "simple-sidebar__link--active" : ""}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;