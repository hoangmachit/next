import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import AdminLayout from "../../../components/AdminLayout";
import AdminAlert from "../../../components/AdminAlert";
import AdminValidate from "../../../components/AdminValidate";
import { SvgArrowDown, SvgPlus } from "../../../components/AdminIcon";
function Domain({ domains, domain_init }) {
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState({
    status: false,
    text: ""
  });
  const [domain, setDomain] = useState({
    name: null,
    domain_name: null,
    address: null,
    domain_init_id: null,
    note: null,
    price: null,
    price_special: null,
    date_payment: null,
    year: null,
    status: null
  });
  const [validate, setValidate] = useState({
    name: [],
    domain_name: [],
    address: [],
    domain_init_id: [],
    note: [],
    price: [],
    price_special: [],
    date_payment: [],
    year: [],
    status: []
  });
  const showModal = (e) => {
    e.preventDefault();
    setModal(!modal);
  };
  const changeDataSubmit = (e, fields) => {
    let value = e.target.value;
    switch (fields) {
      case 'name':
        domain.name = value;
        break;
      case 'domain_name':
        domain.domain_name = value;
        break;
      case 'address':
        domain.address = value;
        break;
      case 'domain_init_id':
        domain.domain_init_id = parseInt(value);
        break;
      case 'note':
        domain.note = value;
        break;
      case 'price':
        domain.price = value;
        break;
      case 'price_special':
        domain.price_special = value;
        break;
      case 'date_payment':
        domain.date_payment = value;
        break;
      case 'year':
        domain.year = parseInt(value);
        break;
      case 'status':
        domain.status = parseInt(value);
        break;
      default:
        break;
    }
    setDomain(domain);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      axios
        .post(`${process.env.NEXT_PUBLIC_API}/domain`, {
          domain
        })
        .then(response => {
          if (!response.data.success) {
            setValidate(response.data.validate);
            setMessage({
              status: true,
              type: "errors",
              text: response.data.message
            });
            return false;
          }
          setMessage({
            status: true,
            type: "success",
            text: response.data.message
          });
          setModal(false);
        });
    } catch (error) {
      console.error(error);
    };
  }
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
          {message.status && (<AdminAlert message={message} />)}
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
                            <span className="text-muted">{index + 1}</span>
                          </td>
                          <td>
                            <h3 className="title-name">
                              <Link
                                href={`/admin/domain/${item.id}`}
                                className="text-decation-none domain_edit"
                                title={item.name}
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
              <form onSubmit={handleSubmit} method="POST" role="form">
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
                        onChange={(e) => changeDataSubmit(e, 'name')}
                      />
                      {validate && validate.name && (<AdminValidate errors={validate.name} />)}
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
                        onChange={(e) => changeDataSubmit(e, 'domain_name')}
                      />
                      {validate && validate.domain_name && (<AdminValidate errors={validate.domain_name} />)}
                    </div>
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="mb-3">
                          <label className="form-label">Đơn vị sản xuất</label>
                          <select
                            className="form-select"
                            name="domain_init_id"
                            required=""
                            onChange={(e) => changeDataSubmit(e, 'domain_init_id')}
                          >
                            <option value="">Choice</option>
                            {domain_init && domain_init.map((item, index) => {
                              return (
                                <option key={index} value={item.id}>{item.name}</option>
                              );
                            })}
                          </select>
                          {validate && validate.domain_init_id && (<AdminValidate errors={validate.domain_init_id} />)}
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label">Thời hạn</label>
                          <select
                            className="form-select"
                            name="year"
                            required=""
                            onChange={(e) => changeDataSubmit(e, 'year')}
                          >
                            <option value="0">Choice</option>
                            <option value="1">1 years</option>
                            <option value="2">2 years</option>
                            <option value="3">3 years</option>
                            <option value="5">5 years</option>
                            <option value="10">10 years</option>
                          </select>
                          {validate && validate.year && (<AdminValidate errors={validate.year} />)}
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
                            onChange={(e) => changeDataSubmit(e, 'price')}
                          />
                          {validate && validate.price && (<AdminValidate errors={validate.price} />)}
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
                            onChange={(e) => changeDataSubmit(e, 'price_special')}
                          />
                          {validate && validate.price_special && (<AdminValidate errors={validate.price_special} />)}
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
                            className="form-select"
                            name="status"
                            onChange={(e) => changeDataSubmit(e, 'status')}
                          >
                            <option>Choice</option>
                            <option value="1">Private</option>
                            <option value="-1">Pending</option>
                            <option value="2">Public</option>
                          </select>
                          {validate && validate.status && (<AdminValidate errors={validate.status} />)}
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
                            onChange={(e) => changeDataSubmit(e, 'date_payment')}
                          />
                          {validate && validate.date_payment && (<AdminValidate errors={validate.date_payment} />)}
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
                            onChange={(e) => changeDataSubmit(e, 'address')}
                          />
                          {validate && validate.address && (<AdminValidate errors={validate.address} />)}
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div>
                          <label className="form-label">Thông tin thêm</label>
                          <textarea
                            className="form-control"
                            name="note"
                            defaultValue=""
                            rows="5"
                            onChange={(e) => changeDataSubmit(e, 'note')}
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
  const url = `${process.env.NEXT_PUBLIC_API}/domain`;
  const { domains, domain_init } = await axios.get(url).then(response => {
    return response.data.result;
  });
  return {
    props: {
      domains,
      domain_init
    },
  };
}
export default Domain;
