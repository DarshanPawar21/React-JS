import "../../css/nav.css"
function Employee_Navbar() {
  return (
    <nav className="cbs-navbar">
      <div className="cbs-navbar__inner">
        <div className="cbs-navbar__brand">
          <span className="cbs-navbar__badge" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 10.5 12 4l9 6.5" />
              <path d="M5 10.5V19h14v-8.5" />
              <path d="M9 19v-5h6v5" />
              <line x1="3" y1="19" x2="21" y2="19" />
            </svg>
          </span>
          <div className="cbs-navbar__titles">
            <span className="cbs-navbar__title">Core Banking System</span>
            <span className="cbs-navbar__subtitle">Enterprise Edition</span>
          </div>
        </div>

        <div className="cbs-navbar__actions">
          <div className="cbs-navbar__avatar" title="Employee">
            Employee
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Employee_Navbar;