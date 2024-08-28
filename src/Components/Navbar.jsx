const Navbar = ({ setCategory }) => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary "
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <div className="navbar-brand" onClick="#">
            <span className="badge bg-light text-dark fs-4">Fast News</span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <div
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => {
                    () => setCategory("general");
                  }}
                >
                  General
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => {
                    () => setCategory("business");
                  }}
                >
                  Business
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => {
                    () => setCategory("entertainment");
                  }}
                >
                  Entertainment
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link "
                  onClick={() => {
                    () => setCategory("technology");
                  }}
                >
                  Technology
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
