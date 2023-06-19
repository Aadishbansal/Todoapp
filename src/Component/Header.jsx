function header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler navbar-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <a
                  className="nav-link active position-absolute top-50 start-50 translate-middle fs-3   text-white-50 "
                  aria-current="page"
                  href="/"
                >
                  Todoapp
                </a>
              </li>
            </ul>
            <div className="d-flex ">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <a className="nav-link text-white-50" href="./About">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default header;
