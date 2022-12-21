import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import AdminLayout from "../../../components/AdminLayout";
import { SvgArrowDown, SvgEyeSlash } from "../../../components/AdminIcon";
function Hosting(props) {
    const { hostings } = props;
    return (
        <>
            <Head>
                <title>Hosting - Admin</title>
            </Head>
            <AdminLayout>
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Danh sách Hosting</h3>
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
                                        <th>Tên Gói</th>
                                        <th>GB</th>
                                        <th>RAM</th>
                                        <th>Giá</th>
                                        <th>Chú thích</th>
                                        <th>Trạng thái</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {hostings && hostings.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td><span className="text-muted">{index + 1}</span></td>
                                                <td>
                                                    <Link
                                                        href={`/admin/hosting/${item.id}`}
                                                        className="text-reset hostings_edit"
                                                    >
                                                        <h3 className="title-name">{item.name}</h3>
                                                    </Link>
                                                </td>

                                                <td>20GB</td>
                                                <td>1GB</td>
                                                <td>
                                                    <span><SvgEyeSlash /></span>
                                                </td>
                                                <td>Hết hạn : 16/06/2023</td>
                                                <td className="d-none">700.000<sup>đ</sup></td>
                                                <td>
                                                    <span className="label_year public">public</span>
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
    const url = `${process.env.NEXT_PUBLIC_API}/hosting`;
    const { hostings } = await axios.get(url).then(response => {
        return response.data.result;
    });
    return {
        props: {
            hostings
        },
    };
}
export default Hosting;