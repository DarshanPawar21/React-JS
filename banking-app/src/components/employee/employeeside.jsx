import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/side.css";

function Employeesidebar() {
  const navItems = [
    { to: "/employee/dashboard", label: "Dashboard" },
    { to: "/employee/dashboard/customers", label: "Customers" },
    { to: "/employee/dashboard/accounts", label: "Accounts" },
    { to: "/employee/dashboard/transactions", label: "Transactions" },
    { to: "/employee/dashboard/transaction", label: "Make Transaction" },
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
            end={item.to === "/employee/dashboard"}
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

export default Employeesidebar;
