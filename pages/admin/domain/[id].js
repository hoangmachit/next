import Head from "next/head";
import { useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
function Domain({ domain, domain_init }) {
  const [domaininit, setDomainInit] = useState(domain.domain_init_id);
  const handleChangeDomainInit = (event) => {
    setDomainInit(event.target.value);
  };
  return (
    <>
      <Head>
        <title>{domain.domain_name} - Admin</title>
      </Head>
      <AdminLayout>
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Thông tin tên miền</h3>
            </div>
            <div className="card-body py-3">
              <div className="mb-3">
                <label className="form-label">Tên</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Name"
                  defaultValue={domain.name}
                  required=""
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Tên miền</label>
                <input
                  type="text"
                  className="form-control"
                  name="domain_name"
                  defaultValue={domain.domain_name}
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
                    <select
                      value={domain.domain_init_id}
                      className="form-select"
                      name="domain_init"
                      onChange={handleChangeDomainInit}
                    >
                      {domain_init &&
                        domain_init.map((item, index) => {
                          return (
                            <option key={index} value={item.id}>
                              {item.name}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label className="form-label">Thời hạn</label>
                    <select className="form-select" name="year">
                      <option value="1">1 years</option>
                      <option value="2">2 years</option>
                      <option value="3">3 years</option>
                      <option value="5">5 years</option>
                      <option value="10">10 years</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="">
                    <label className="form-label">Giá cũ</label>
                    <input
                      type="text"
                      name="price"
                      defaultValue={domain.price}
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
                      defaultValue={domain.price_special}
                      className="form-control format-price"
                      required=""
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Trạng thái</label>
                    <select className="form-select" name="status">
                      <option value="1">Private</option>
                      <option value="0">Pending</option>
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
                      defaultValue={domain.date_payment}
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
                      defaultValue={domain.address}
                      name="address"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div>
                    <label className="form-label">Thông tin thêm</label>
                    <textarea
                      className="form-control"
                      defaultValue={domain.note}
                      name="note"
                      rows="5"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer d-flex align-items-center">
              <a
                href="#"
                className="btn btn-link link-secondary"
                data-bs-dismiss="modal"
              >
                Hủy bỏ
              </a>
              <button
                type="submit"
                id="submit-domain-create"
                className="btn btn-primary ms-auto"
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
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>{" "}
                Tạo tên miền
              </button>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
export async function getServerSideProps(context) {
  const id = context.params.id;
  const url = `http://localhost/system/public/api/domain/${id}`;
  const res = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await res.json();
  const { domain, domain_init } = data.result;
  return {
    props: {
      domain,
      domain_init,
    },
  };
}
export default Domain;
