import React from "react";

const Navbar = (props) => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            TextUtils
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
            </ul>

            <div className={`form-check form-switch text-${props.mode === 'light'? 'dark' : 'light'}`}>
              {/* {`form-check form-switch text-${props.mode=== ‘light’? ‘Dark’ : ‘light’}`} */}
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={props.toogleMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Mode
            </label>
          </div>
           
          </div>
         
        </div>
      </nav>
    </>
  );
};

export default Navbar;
