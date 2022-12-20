import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import { SvgArrowDown, SvgPlus } from "../../../components/AdminIcon";
function Domain({ domains }) {
  const [modal, setModal] = useState(false);
  const showModal = (e) => {
    e.preventDefault();
    setModal(!modal);
  };
  return (
    <>
      <Head>
        <title>Domain - Admin</title>
      </Head>
      <AdminLayout>
        <div className="page-header d-print-none">
          <div className="container-xl">
            <div className="row g-2 align-items-center">
              <div className="col">
                <div className="page-pretitle">Tổng quan</div>
                <h2 className="page-title">Tên miền</h2>
              </div>
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <button
                    onClick={showModal}
                    className="btn btn-primary d-none d-sm-inline-block"
                  >
                    <SvgPlus />
                    Tạo tên miền
                  </button>
                  <a
                    href="#"
                    onClick={showModal}
                    className="btn btn-primary d-sm-none btn-icon"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Danh sách tên miền</h3>
            </div>
            <div className="card-body border-bottom py-3">
              <div className="d-flex">
                <div className="text-muted">
                  Hiện
                  <div className="mx-2 d-inline-block">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      readOnly=""
                      defaultValue="20"
                      size="3"
                      aria-label="Invoices count"
                    />
                  </div>
                  mục
                </div>
                <div className="ms-auto text-muted">
                  Tìm kiếm:
                  <div className="ms-2 d-inline-block">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      aria-label="Search invoice"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table card-table table-vcenter text-nowrap datatable">
                <thead>
                  <tr>
                    <th className="w-1">
                      <input
                        className="form-check-input m-0 align-middle"
                        type="checkbox"
                        aria-label="Select all invoices"
                      />
                    </th>
                    <th className="w-1">
                      No.
                      <SvgArrowDown />
                    </th>
                    <th>Tên</th>
                    <th>Tên Miền</th>
                    <th>Đơn vị sản xuất</th>
                    <th>Ngày thanh toán</th>
                    <th>Thời hạn (Năm)</th>
                    <th>Trạng thái</th>
                  </tr>
                </thead>
                <tbody>
                  {domains &&
                    domains.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <input
                              className="form-check-input m-0 align-middle"
                              type="checkbox"
                              aria-label="Select invoice"
                            />
                          </td>
                          <td>
                            <span className="text-muted">{index + 1}</span>
                          </td>
                          <td>
                            <h3 className="title-name">
                              <Link
                                href={`/admin/domain/${item.id}`}
                                className="text-decation-none domain_edit"
                              >
                                {item.name}
                              </Link>
                            </h3>
                          </td>
                          <td>
                            <span className="domain_name">
                              {item.domain_name}
                            </span>
                          </td>
                          <td>
                            <span className="production_unit">
                              {item.domain_init.name}
                            </span>
                          </td>
                          <td>2023/06/24 12:00:AM</td>
                          <td>
                            <span className="label_year">
                              {item.year} years
                            </span>
                          </td>
                          <td>
                            <span
                              className={
                                item.status == 1 ? "public" : "private"
                              }
                            >
                              {item.status == 1 ? "public" : "private"}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
            <div className="card-footer d-flex align-items-center"></div>
          </div>
        </div>
        {modal && (
          <div
            className="modal modal-blur fade show"
            id="modal-report"
            tabIndex="-1"
            style={{ display: "block" }}
            aria-modal="true"
            role="dialog"
          >
            <div className="modal-dialog modal-lg" role="document">
              <form action="" method="POST" role="form">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Tạo tên miền</h5>
                    <button
                      onClick={showModal}
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label className="form-label">Tên</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Name"
                        defaultValue=""
                        required=""
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Tên miền</label>
                      <input
                        type="text"
                        className="form-control"
                        name="domain_name"
                        defaultValue=""
                        required=""
                        placeholder="example.com"
                      />
                      <small className="mt-2 d-block alert-domains d-none text-red">
                        Domain name already in use !!!
                      </small>
                    </div>
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="mb-3">
                          <label className="form-label">Đơn vị sản xuất</label>
                          <div className="input-group input-group-flat">
                            <input
                              type="text"
                              className="form-control ps-2"
                              defaultValue={1}
                              required=""
                              name="production_unit"
                              placeholder="inet.vn"
                              autoComplete="off"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label">Thời hạn</label>
                          <select
                            value="1"
                            className="form-select"
                            name="year"
                            required=""
                            onChange={() => console.log("change thời hạn")}
                          >
                            <option value="1">1 years</option>
                            <option value="2">2 years</option>
                            <option value="3">3 years</option>
                            <option value="5">5 years</option>
                            <option value="10">10 years</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="">
                          <label className="form-label">Giá cũ</label>
                          <input
                            type="text"
                            name="price"
                            defaultValue="0"
                            className="form-control format-price"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="">
                          <label className="form-label">Giá giảm</label>
                          <input
                            type="text"
                            name="price_special"
                            defaultValue="0"
                            className="form-control format-price"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Trạng thái</label>
                          <select
                            value="1"
                            className="form-select"
                            name="status"
                            onChange={() => console.log("change thời hạn")}
                          >
                            <option value="1">Private</option>
                            <option value="-1">Pending</option>
                            <option value="2">Public</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Ngày thanh toán</label>
                          <input
                            type="date"
                            name="date_payment"
                            defaultValue=""
                            className="form-control"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">Địa chỉ</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue=""
                            name="address"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div>
                          <label className="form-label">Thông tin thêm</label>
                          <textarea
                            className="form-control"
                            name="note"
                            defaultValue=""
                            rows="3"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      onClick={showModal}
                      className="btn btn-link link-secondary"
                      data-bs-dismiss="modal"
                    >
                      Hủy bỏ
                    </button>
                    <button
                      type="submit"
                      id="submit-domain-create"
                      className="btn btn-primary ms-auto"
                    >
                      <SvgPlus /> Tạo tên miền
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </AdminLayout>
    </>
  );
}
export async function getServerSideProps() {
  const url = "http://localhost/system/public/api/domain";
  const res = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await res.json();
  const { domains } = data.result;
  return {
    props: {
      domains,
    },
  };
}
export default Domain;
