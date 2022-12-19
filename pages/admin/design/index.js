import Head from "next/head";
import AdminLayout from "../../../components/AdminLayout";
import { SvgArrowDown, SvgEyeSlash } from "../../../components/AdminIcon";
export default function Design() {
    return (
        <>
            <Head>
                <title>Design - Admin</title>
            </Head>
            <AdminLayout>
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Danh sách thiết kế</h3>
                        </div>
                        <div class="card-body border-bottom py-3">
                            <div class="d-flex">
                                <div class="text-muted">
                                    Hiện
                                    <div class="mx-2 d-inline-block">
                                        <input
                                            type="text"
                                            class="form-control form-control-sm"
                                            readonly=""
                                            value="20"
                                            size="3"
                                            aria-label="Invoices count"
                                        />
                                    </div>
                                    mục
                                </div>
                                <div class="ms-auto text-muted">
                                    Tìm kiếm:
                                    <div class="ms-2 d-inline-block">
                                        <input
                                            type="text"
                                            class="form-control form-control-sm"
                                            aria-label="Search invoice"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table card-table table-vcenter text-nowrap datatable">
                                <thead>
                                    <tr>
                                        <th class="w-1">
                                            <input
                                                class="form-check-input m-0 align-middle"
                                                type="checkbox"
                                                aria-label="Select all invoices"
                                            />
                                        </th>
                                        <th class="w-1">
                                            No.
                                            <SvgArrowDown />
                                        </th>
                                        <th>Hợp đồng</th>
                                        <th>Họ &amp; tên</th>
                                        <th>Đường dẫn</th>
                                        <th>Bắt đầu</th>
                                        <th>Hoàn thành</th>
                                        <th>Trạng thái</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input
                                                class="form-check-input m-0 align-middle"
                                                type="checkbox"
                                                aria-label="Select invoice" />
                                        </td>
                                        <td><span class="text-muted">1</span></td>
                                        <td>
                                            <span></span>
                                        </td>
                                        <td>
                                            <a
                                                href=""
                                                class="text-reset designs_edit"
                                            >
                                                <h3 class="title-name">Ngọc Trân Wedding</h3>
                                            </a>
                                        </td>
                                        <td>
                                            <a
                                                href="https://user.haweb.vn/design/FoARGkIpox/5"
                                                target="_blank"
                                            >
                                                <SvgEyeSlash />
                                            </a>
                                        </td>
                                        <td>2022/11/25</td>
                                        <td>2022/11/10</td>
                                        <td>
                                            <span class="label_year public">public</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="card-footer d-flex align-items-center"></div>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}