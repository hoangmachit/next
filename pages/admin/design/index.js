import Head from "next/head";
import Link from "next/link";
import AdminLayout from "../../../components/AdminLayout";
import { SvgArrowDown, SvgEyeSlash } from "../../../components/AdminIcon";
import { useState, useEffect } from "react";
export default function Design() {
    const [designs, setDesigns] = useState([]);
    const fetchData = async () => {
        try {
            const res = await fetch(`http://system.local/api/design`);
            const { data } = await res.json();
            await setDesigns(data);
            return data;
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            <Head>
                <title>Design - Admin</title>
            </Head>
            <AdminLayout>
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
                                        <th>Hợp đồng</th>
                                        <th>Họ &amp; tên</th>
                                        <th width="80">Đường dẫn</th>
                                        <th>Bắt đầu</th>
                                        <th>Hoàn thành</th>
                                        <th>Trạng thái</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {designs.length ? designs.map((item, index) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>
                                                    <input
                                                        className="form-check-input m-0 align-middle"
                                                        type="checkbox"
                                                        aria-label="Select invoice" />
                                                </td>
                                                <td><span className="text-muted">{index + 1}</span></td>
                                                <td>
                                                    <span></span>
                                                </td>
                                                <td>
                                                    <Link
                                                        href={`/admin/design/${item.id}`}
                                                        className="text-reset designs_edit"
                                                    >
                                                        <h3 className="title-name">{item.first_name} {item.last_name}</h3>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <span className="d-flex justify-content-center align-items-center"
                                                        href={item.url}
                                                        target="_blank"
                                                    >
                                                        <SvgEyeSlash />
                                                    </span>
                                                </td>
                                                <td>{item.date_start}</td>
                                                <td>{item.date_finish}</td>
                                                <td>
                                                    <span className={`label_year ` + (item.status == 1 ? 'public' : "Private")}>{item.status == 1 ? 'public' : "Private"}</span>
                                                </td>
                                            </tr>
                                        );
                                    }) : ""}

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