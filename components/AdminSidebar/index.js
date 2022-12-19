import Link from "next/link";
import { SvgHome, SvgContract, SvgHosting, SvgDomain, SvgDesign, SvgAccount, SvgSetting, SvgSupport, SvgCustomer } from "../AdminIcon";
export default function AdminSidebar() {
  return (
    <>
      <aside className="navbar navbar-vertical navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebar-menu"
            aria-controls="sidebar-menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <h1 className="navbar-brand navbar-brand-autodark">
            <a href="">
              <img
                src="/admin/image/logo-white.svg"
                width="110"
                height="32"
                alt="Tabler"
                className="navbar-brand-image"
              />
            </a>
          </h1>
          <div className="navbar-nav flex-row d-lg-none">
            <div className="nav-item d-none d-lg-flex me-3">
              <div className="btn-list">
                <a href="" className="btn" target="_blank" rel="noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
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
                      d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
                    />
                  </svg>
                  Source code
                </a>
                <a href="" className="btn" target="_blank" rel="noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon text-pink"
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
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
                    />
                  </svg>
                  Sponsor
                </a>
              </div>
            </div>
            <div className="d-none d-lg-flex">
              <a
                href=""
                className="nav-link px-0 hide-theme-dark"
                title="Enable dark mode"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
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
                    d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"
                  />
                </svg>
              </a>
              <a
                href=""
                className="nav-link px-0 hide-theme-light"
                title="Enable light mode"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
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
                  <circle cx="12" cy="12" r="4" />
                  <path
                    d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"
                  />
                </svg>
              </a>
              <div className="nav-item dropdown d-none d-md-flex me-3">
                <a
                  href=""
                  className="nav-link px-0"
                  data-bs-toggle="dropdown"
                  tabIndex="-1"
                  aria-label="Show notifications"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
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
                      d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
                    />
                    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                  </svg>
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
                            <a href="#" className="text-body d-block">Example 4</a>
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
                href="#"
                className="nav-link d-flex lh-1 text-reset p-0"
                data-bs-toggle="dropdown"
                aria-label="Open user menu"
              >
                <span
                  className="avatar avatar-sm"
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
          <div className="collapse navbar-collapse" id="sidebar-menu">
            <ul className="navbar-nav pt-lg-3">
              <li className="nav-item">
                <Link className="nav-link" href="/admin" title="Home">
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <SvgHome />
                  </span>
                  <span className="nav-link-title"> Home </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/admin/contract" title="Hợp đồng">
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <SvgContract />
                  </span>
                  <span className="nav-link-title"> Hợp đồng </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/admin/customer" title="Khách hàng">
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <SvgCustomer />
                  </span>
                  <span className="nav-link-title"> Khách hàng </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/admin/hosting" title="Hosting">
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <SvgHosting />
                  </span>
                  <span className="nav-link-title"> Hosting </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/admin/design" title="Thiết kế">
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <SvgDesign />
                  </span>
                  <span className="nav-link-title"> Thiết kế </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/admin/domain" title="Tên miền">
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <SvgDomain />
                  </span>
                  <span className="nav-link-title"> Tên miền </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/admin/account" title="Tài khoản">
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <SvgAccount />
                  </span>
                  <span className="nav-link-title"> Tài khoản </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/admin/setting" title="Setting">
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <SvgSetting />
                  </span>
                  <span className="nav-link-title"> Cấu hình chung </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/admin/support" title="Support">
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <SvgSupport />
                  </span>
                  <span className="nav-link-title"> Hỗ trợ 24/7 </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}