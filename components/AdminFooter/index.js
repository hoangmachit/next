import Link from "next/link";
import { SvgHeart } from "../AdminIcon";
function AdminFooter() {
  return (
    <>
      <footer className="footer footer-transparent d-print-none">
        <div className="container-xl">
          <div className="row text-center align-items-center flex-row-reverse">
            <div className="col-lg-auto ms-lg-auto">
              <ul className="list-inline list-inline-dots mb-0">
                <li className="list-inline-item">
                  <Link href="/admin/support" className="link-secondary" title="Hỗ trợ 24/7">Hỗ trợ 24/7</Link>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.facebook.com/haweb.vn"
                    title="Facebook"
                    target="_blank"
                    className="link-secondary"
                    rel="noopener"
                  >Facebook</a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://haweb.vn"
                    title="Haweb.vn"
                    target="_blank"
                    className="link-secondary"
                    rel="noopener"
                  >
                    <SvgHeart />
                    Haweb.vn
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-auto mt-3 mt-lg-0">
              <ul className="list-inline list-inline-dots mb-0">
                <li className="list-inline-item">
                  Copyright &copy; 2023
                  <a
                    href="https://haweb.vn"
                    className="link-secondary text-decoration-none"
                  ><b>Admin</b></a>
                  <span>. All rights reserved.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default AdminFooter;