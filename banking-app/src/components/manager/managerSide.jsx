import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/side.css";

function Managersidebar() {
  const navItems = [
    { to: "/manager/dashboard", label: "Dashboard" },
    { to: "/manager/dashboard/customers", label: "Customers" },
    { to: "/manager/dashboard/accounts", label: "Accounts" },
    { to: "/manager/dashboard/transactions", label: "Transactions" },
    { to: "/manager/dashboard/Employees", label: "Employees" },
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
            end={item.to === "/manager/dashboard"}
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

export default Managersidebar;