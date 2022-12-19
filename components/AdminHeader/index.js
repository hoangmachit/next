import Head from 'next/head';

import { SvgMoon, SvgNotification, SvgSearch } from "../AdminIcon";
function AdminHeader() {
  return (
    <>
      <header
        className="navbar navbar-expand-md navbar-light d-none d-lg-flex d-print-none"
      >
        <div className="container-xl">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-menu"
            aria-controls="navbar-menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-nav flex-row order-md-last">
            <div className="d-none d-md-flex">
              <a
                href=""
                className="nav-link px-0 hide-theme-dark"
                title="Enable dark mode"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
              >
                <SvgMoon />
              </a>
              <a
                href=""
                className="nav-link px-0 hide-theme-light"
                title="Enable light mode"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
              >
                <SvgMoon />
              </a>
              <div className="nav-item dropdown d-none d-md-flex me-3">
                <a
                  href=""
                  className="nav-link px-0"
                  data-bs-toggle="dropdown"
                  tabIndex="-1"
                  aria-label="Show notifications"
                >
                  <SvgNotification />
                  <span className="badge bg-red"></span>
                </a>
                <div
                  className="
                dropdown-menu
                dropdown-menu-arrow
                dropdown-menu-end
                dropdown-menu-card
              "
                >
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Last updates</h3>
                    </div>
                    <div className="list-group list-group-flush list-group-hoverable">
                      <div className="list-group-item">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span
                              className="status-dot status-dot-animated bg-red d-block"
                            ></span>
                          </div>
                          <div className="col text-truncate">
                            <a href="" className="text-body d-block">Example 1</a>
                            <div className="d-block text-muted text-truncate mt-n1">
                              Change deprecated html tags to text decoration classes
                              (#29604)
                            </div>
                          </div>
                          <div className="col-auto">
                            <a href="" className="list-group-item-actions">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon text-muted"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                  d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span className="status-dot d-block"></span>
                          </div>
                          <div className="col text-truncate">
                            <a href="" className="text-body d-block">Example 2</a>
                            <div className="d-block text-muted text-truncate mt-n1">
                              justify-content:between ⇒
                              justify-content:space-between (#29734)
                            </div>
                          </div>
                          <div className="col-auto">
                            <a href="" className="list-group-item-actions show">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon text-yellow"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                  d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span className="status-dot d-block"></span>
                          </div>
                          <div className="col text-truncate">
                            <a href="" className="text-body d-block">Example 3</a>
                            <div className="d-block text-muted text-truncate mt-n1">
                              Update change-version.js (#29736)
                            </div>
                          </div>
                          <div className="col-auto">
                            <a href="" className="list-group-item-actions">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon text-muted"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                  d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span
                              className="
                            status-dot status-dot-animated
                            bg-green
                            d-block
                          "
                            ></span>
                          </div>
                          <div className="col text-truncate">
                            <a href="" className="text-body d-block">Example 4</a>
                            <div className="d-block text-muted text-truncate mt-n1">
                              Regenerate package-lock.json (#29730)
                            </div>
                          </div>
                          <div className="col-auto">
                            <a href="" className="list-group-item-actions">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon text-muted"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                  d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-item dropdown">
              <a
                href=""
                className="nav-link d-flex lh-1 text-reset p-0"
                data-bs-toggle="dropdown"
                aria-label="Open user menu"
              >
                <span
                  className="avatar avatar-sm"
                  style={{ backgroundImage: `url(/admin/image/000m.jpg)` }}
                ></span>
                <div className="d-none d-xl-block ps-2">
                  <div>Admin</div>
                  <div className="mt-1 small text-muted">dev</div>
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <a href="" className="dropdown-item">Status</a>
                <a href="" className="dropdown-item">Profile</a>
                <a href="" className="dropdown-item">Feedback</a>
                <div className="dropdown-divider"></div>
                <a href="" className="dropdown-item">Settings</a>
                <a href="" className="dropdown-item">Logout</a>
              </div>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbar-menu">
            <div>
              <form action="./" method="get" autoComplete="off" noValidate>
                <div className="input-icon">
                  <span className="input-icon-addon">
                    <SvgSearch />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search…"
                    aria-label="Search in website"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
export default AdminHeader;