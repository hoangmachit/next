import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import AdminLayout from "../../../components/AdminLayout";
import AdminLoading from "../../../components/AdminLoading";
import AdminValidate from "../../../components/AdminValidate";
import AdminAlert from "../../../components/AdminAlert";
import { SvgPlus } from "../../../components/AdminIcon";
function Domain({ domain, domain_init, id }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [domaininit, setDomainInit] = useState(domain.domain_init_id);
  const [year, setYear] = useState(domain.year);
  const [status, setStatus] = useState(domain.status);
  const [message, setMessage] = useState({
    status: false,
    text: ""
  });
  const [validate, setValidate] = useState({
    name: "",
    domain_name: "",
    address: "",
    domain_init_id: "",
    note: "",
    price: "",
    price_special: "",
    date_payment: "",
    year: "",
    status: ""
  });
  const handleDataDomain = (e, fields) => {
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
        setDomainInit(domain.domain_init_id);
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
        setYear(domain.year);
        break;
      case 'status':
        domain.status = parseInt(value);
        setStatus(domain.status);
        break;
      default:
        break;
    }
    return true;
  };
  const updateDomain = async (event) => {
    event.preventDefault();
    const url = `${process.env.NEXT_PUBLIC_API}/domain/${id}`;
    setLoading(true);
    await axios.put(url, domain)
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
      });
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }
  const deleteDomain = async (event) => {
    event.preventDefault();
    const url = `${process.env.NEXT_PUBLIC_API}/domain/${id}`;
    setLoading(true);
    await axios.delete(url).then(response => {
      setMessage({
        status: true,
        type: "success",
        text: response.data.message
      });
      setTimeout(() => {
        setLoading(false);
        router.push('/admin/domain');
      }, 1000);
      return true;
    });
  }
  return (
    <>
      <Head>
        <title>{domain.domain_name} - Admin</title>
      </Head>
      <AdminLayout>
        {loading && (<AdminLoading />)}
        {message.status &&
          (<div className="page-header d-print-none">
            <AdminAlert type="success" message={message} />
          </div>
          )}
        <div className="col-12">
          <div className="card">
            <div className="card-header justify-content-between">
              <h3 className="card-title">Thông tin tên miền</h3>
              <button className="btn btn-danger" title="Delete domain" onClick={(e) => deleteDomain(e)}>Delete domain</button>
            </div>
            <form onSubmit={(event) => updateDomain(event)} role="form" method="POST">
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
                    onChange={(e) => handleDataDomain(e, 'name')}
                  />
                  {validate && validate.name && (<AdminValidate errors={validate.name} />)}
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
                    onChange={(e) => handleDataDomain(e, 'domain_name')}
                  />
                  {validate && validate.domain_name && (<AdminValidate errors={validate.domain_name} />)}
                </div>
                <div className="row">
                  <div className="col-lg-8">
                    <div className="mb-3">
                      <label className="form-label">Đơn vị sản xuất</label>
                      <select
                        value={domaininit}
                        className="form-select"
                        name="domain_init_id"
                        onChange={(e) => handleDataDomain(e, 'domain_init_id')}
                      >
                        <option value="0">Choice</option>
                        {domain_init &&
                          domain_init.map((item, index) => {
                            return (
                              <option key={index} value={item.id}>
                                {item.name}
                              </option>
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
                        value={year}
                        name="year"
                        onChange={(e) => handleDataDomain(e, 'year')}>
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
                        onChange={(e) => handleDataDomain(e, 'price')}
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
                        defaultValue={domain.price_special}
                        className="form-control format-price"
                        required=""
                        onChange={(e) => handleDataDomain(e, 'price_special')}
                      />
                      {validate && validate.price_special && (<AdminValidate errors={validate.price_special} />)}
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Trạng thái</label>
                      <select
                        className="form-select"
                        name="status"
                        value={status}
                        onChange={(e) => handleDataDomain(e, 'status')}>
                        <option value="0">Pending</option>
                        <option value="1">Private</option>
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
                        defaultValue={domain.date_payment}
                        className="form-control"
                        required=""
                        onChange={(e) => handleDataDomain(e, 'date_payment')}
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
                        defaultValue={domain.address}
                        name="address"
                        onChange={(e) => handleDataDomain(e, 'address')}
                      />
                      {validate && validate.address && (<AdminValidate errors={validate.address} />)}
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
                        onChange={(e) => handleDataDomain(e, 'note')}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex align-items-center">
                <Link
                  href="/admin/domain"
                  className="btn btn-default"
                >
                  Quay lại
                </Link>
                <button
                  type="submit"
                  id="submit-domain-create"
                  className="btn btn-primary ms-auto"
                >
                  <SvgPlus />
                  Tạo tên miền
                </button>
              </div>
            </form>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
export async function getServerSideProps(context) {
  const id = context.params.id;
  const url = `${process.env.NEXT_PUBLIC_API}/domain/${id}`;
  const { domain, domain_init } = await axios.get(url).then(response => {
    return response.data.result;
  });
  return {
    props: {
      domain,
      domain_init,
      id
    },
  };
}
export default Domain;
