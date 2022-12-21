import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import AdminLayout from "../../../components/AdminLayout";
import { SvgArrowDown, SvgEyeSlash, SvgPlus } from "../../../components/AdminIcon";
function Design(props) {
    const { designs } = props;
    return (
        <>
            <Head>
                <title>Design - Admin</title>
            </Head>
            <AdminLayout>
                <div className="page-header d-print-none">
                    <div className="container-xl">
                        <div className="row g-2 align-items-center">
                            <div className="col">
                                <div className="page-pretitle">Tổng quan</div>
                                <h2 className="page-title">Thiết kế</h2>
                            </div>
                            <div className="col-auto ms-auto d-print-none">
                                <div className="btn-list">
                                    <Link
                                        href="/admin/design/create"
                                        className="btn btn-primary d-none d-sm-inline-block"
                                    >
                                        <SvgPlus />
                                        Tạo thiết kế
                                    </Link>
                                    <Link
                                        href="/admin/design/create"
                                        className="btn btn-primary d-sm-none btn-icon"
                                    ></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Danh sách thiết kế</h3>
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
                                        <th>Hợp đồng</th>
                                        <th>Họ &amp; tên</th>
                                        <th width="80">Đường dẫn</th>
                                        <th>Bắt đầu</th>
                                        <th>Hoàn thành</th>
                                        <th>Trạng thái</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {designs && designs.length && designs.map((item, index) => {
                                        return (
                                            <tr key={item.id}>
                                                <td><span className="text-muted">{index + 1}</span></td>
                                                <td>
                                                    <span></span>
                                                </td>
                                                <td>
                                                    <Link
                                                        href={`/admin/design/${item.id}`}
                                                        className="text-reset designs_edit"
                                                        title={`${item.first_name} ${item.last_name}`}
                                                    >
                                                        <h3 className="title-name">{item.first_name} {item.last_name}</h3>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link className="d-flex justify-content-center align-items-center"
                                                        href={item.url}
                                                        target="_blank"
                                                    >
                                                        <SvgEyeSlash />
                                                    </Link>
                                                </td>
                                                <td>{item.date_start}</td>
                                                <td>{item.date_finish}</td>
                                                <td>
                                                    <span className={(item.status == 1 ? 'public' : "private")}>{item.status == 1 ? 'public' : "private"}</span>
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
            </AdminLayout>
        </>
    );
}
export async function getServerSideProps() {
    const url = `${process.env.NEXT_PUBLIC_API}/design`;
    const { designs } = await axios.get(url).then(response => {
        return response.data.result;
    });
    return {
        props: {
            designs
        },
    };
}
export default Design;