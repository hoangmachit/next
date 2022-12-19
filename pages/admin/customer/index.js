import Head from "next/head";
import AdminLayout from "../../../components/AdminLayout";
export default function Customer() {
    return (
        <>
            <Head>
                <title>Customer - Admin</title>
            </Head>
            <AdminLayout>
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Danh sách khách hàng</h3>
                        </div>
                        <div className="card-body border-bottom py-3">
                            <div className="d-flex">
                                <div className="text-muted">
                                    Hiện
                                    <div className="mx-2 d-inline-block">
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            readonly=""
                                            value="20"
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
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon icon-sm text-dark icon-thick"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                stroke-width="2"
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <polyline points="6 15 12 9 18 15"></polyline>
                                            </svg>
                                        </th>
                                        <th>Họ &amp; tên</th>
                                        <th>Điện thoại</th>
                                        <th>Email</th>
                                        <th>Ngày sinh</th>
                                        <th>CCCD/CMND</th>
                                        <th>Trạng thái</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input
                                                className="form-check-input m-0 align-middle"
                                                type="checkbox"
                                                aria-label="Select invoice"
                                            />
                                        </td>
                                        <td><span className="text-muted">1</span></td>
                                        <td>
                                            <a href="" className="text-reset customers_edit">
                                                <h3 className="title-name">Lâm Nguyễn Văn</h3>
                                            </a>
                                        </td>
                                        <td>
                                            <span className="title-name">0815143089</span>
                                        </td>
                                        <td>
                                            <span className="title-name">Nguyenlamabc9@gmail.com</span>
                                        </td>
                                        <td>1980/10/01</td>
                                        <td>
                                            <span className="label_year pending">0815143089</span>
                                        </td>
                                        <td>
                                            <span className="label_year public">public</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input
                                                className="form-check-input m-0 align-middle"
                                                type="checkbox"
                                                aria-label="Select invoice"
                                            />
                                        </td>
                                        <td><span className="text-muted">2</span></td>
                                        <td>
                                            <a href="" className="text-reset customers_edit">
                                                <h3 className="title-name">Văn Đỗ Văn</h3>
                                            </a>
                                        </td>
                                        <td>
                                            <span className="title-name">096 238 23 23</span>
                                        </td>
                                        <td>
                                            <span className="title-name"></span>
                                        </td>
                                        <td>1075/01/01</td>
                                        <td>
                                            <span className="label_year pending">096 238 23 23</span>
                                        </td>
                                        <td>
                                            <span className="label_year private">private</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input
                                                className="form-check-input m-0 align-middle"
                                                type="checkbox"
                                                aria-label="Select invoice"
                                            />
                                        </td>
                                        <td><span className="text-muted">3</span></td>
                                        <td>
                                            <a href="" className="text-reset customers_edit">
                                                <h3 className="title-name">A Nguyen Văn</h3>
                                            </a>
                                        </td>
                                        <td>
                                            <span className="title-name">0918456441</span>
                                        </td>
                                        <td>
                                            <span className="title-name">phamvanchieu@gmail.com</span>
                                        </td>
                                        <td>2002/09/09</td>
                                        <td>
                                            <span className="label_year pending">123456789</span>
                                        </td>
                                        <td>
                                            <span className="label_year public">public</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input
                                                className="form-check-input m-0 align-middle"
                                                type="checkbox"
                                                aria-label="Select invoice"
                                            />
                                        </td>
                                        <td><span className="text-muted">4</span></td>
                                        <td>
                                            <a href="" className="text-reset customers_edit">
                                                <h3 className="title-name">Her King Man</h3>
                                            </a>
                                        </td>
                                        <td>
                                            <span className="title-name">0987654321</span>
                                        </td>
                                        <td>
                                            <span className="title-name">kingman_her@gmail.com</span>
                                        </td>
                                        <td>1996/07/18</td>
                                        <td>
                                            <span className="label_year pending">0987654321</span>
                                        </td>
                                        <td>
                                            <span className="label_year public">public</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer d-flex align-items-center"></div>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}