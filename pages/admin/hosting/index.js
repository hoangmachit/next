import Head from "next/head";
import AdminLayout from "../../../components/AdminLayout";
import { SvgEyeSlash } from "../../../components/AdminIcon";
export default function Hosting() {
    return (
        <>
            <Head>
                <title>Hosting - Admin</title>
            </Head>
            <AdminLayout>
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Danh sách Hosting</h3>
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
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="icon icon-sm text-dark icon-thick"
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
                                        <th>Tên Gói</th>
                                        <th>GB</th>
                                        <th>RAM</th>
                                        <th>Giá</th>
                                        <th>Chú thích</th>
                                        <th>Trạng thái</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input
                                                class="form-check-input m-0 align-middle"
                                                type="checkbox"
                                                aria-label="Select invoice"
                                            />
                                        </td>
                                        <td><span class="text-muted">1</span></td>
                                        <td>
                                            <a
                                                href=""
                                                class="text-reset hostings_edit"
                                            >
                                                <h3 class="title-name">LƯƠNG YẾN PHƯƠNG</h3>
                                            </a>
                                        </td>

                                        <td>20GB</td>
                                        <td>1GB</td>
                                        <td>
                                            <span><SvgEyeSlash /></span>
                                        </td>
                                        <td>Hết hạn : 16/06/2023</td>
                                        <td class="d-none">700.000<sup>đ</sup></td>
                                        <td>
                                            <span class="label_year public">public</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input
                                                class="form-check-input m-0 align-middle"
                                                type="checkbox"
                                                aria-label="Select invoice"
                                            />
                                        </td>
                                        <td><span class="text-muted">2</span></td>
                                        <td>
                                            <a
                                                href=""
                                                class="text-reset hostings_edit"
                                            >
                                                <h3 class="title-name">PHẠM NGỌC LUYẾN ( CHỊ NGỌC )</h3>
                                            </a>
                                        </td>

                                        <td>5GB</td>
                                        <td>1GB</td>
                                        <td>
                                            <span><SvgEyeSlash /></span>
                                        </td>
                                        <td>Hết hạn : 01/06/2022</td>
                                        <td class="d-none">700.000<sup>đ</sup></td>
                                        <td>
                                            <span class="label_year public">public</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input
                                                class="form-check-input m-0 align-middle"
                                                type="checkbox"
                                                aria-label="Select invoice"
                                            />
                                        </td>
                                        <td><span class="text-muted">3</span></td>
                                        <td>
                                            <a
                                                href=""
                                                class="text-reset hostings_edit"
                                            >
                                                <h3 class="title-name">ĐẶNG TẤN XUÂN</h3>
                                            </a>
                                        </td>

                                        <td>10GB</td>
                                        <td>1GB</td>
                                        <td>
                                            <span><SvgEyeSlash /></span>
                                        </td>
                                        <td>Hết hạn : 20/05/2023</td>
                                        <td class="d-none">700.000<sup>đ</sup></td>
                                        <td>
                                            <span class="label_year public">public</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input
                                                class="form-check-input m-0 align-middle"
                                                type="checkbox"
                                                aria-label="Select invoice"
                                            />
                                        </td>
                                        <td><span class="text-muted">4</span></td>
                                        <td>
                                            <a
                                                href=""
                                                class="text-reset hostings_edit"
                                            >
                                                <h3 class="title-name">
                                                    CÔNG TY TNHH MÁY CHẾ BIẾN GỖ CHÍNH XÁC MUSTANG
                                                </h3>
                                            </a>
                                        </td>

                                        <td>2GB</td>
                                        <td>1GB</td>
                                        <td>
                                            <span><SvgEyeSlash /></span>
                                        </td>
                                        <td>Hết hạn : 10/05/2023</td>
                                        <td>
                                            <span class="label_year private">private</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input
                                                class="form-check-input m-0 align-middle"
                                                type="checkbox"
                                                aria-label="Select invoice"
                                            />
                                        </td>
                                        <td><span class="text-muted">5</span></td>
                                        <td>
                                            <a
                                                href=""
                                                class="text-reset hostings_edit"
                                            >
                                                <h3 class="title-name">HÀ THỊ MINH NGUYỆT</h3>
                                            </a>
                                        </td>

                                        <td>2GB</td>
                                        <td>1GB</td>
                                        <td>
                                            <span><SvgEyeSlash /></span>
                                        </td>
                                        <td>Hết hạn: 24/04/2023</td>
                                        <td>
                                            <span class="label_year private">private</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input
                                                class="form-check-input m-0 align-middle"
                                                type="checkbox"
                                                aria-label="Select invoice"
                                            />
                                        </td>
                                        <td><span class="text-muted">6</span></td>
                                        <td>
                                            <a
                                                href=""
                                                class="text-reset hostings_edit"

                                            >
                                                <h3 class="title-name">
                                                    CÔNG TY TNHH THƯƠNG MẠI DỊC VỤ CÔNG NGHỆ PHỐ XANH
                                                </h3>
                                            </a>
                                        </td>

                                        <td>5GB</td>
                                        <td>1GB</td>
                                        <td>
                                            <span><SvgEyeSlash /></span>
                                        </td>
                                        <td>Tặng Host năm đầu Hết hạn : 13/04/2023</td>
                                        <td>
                                            <span class="label_year private">private</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input
                                                class="form-check-input m-0 align-middle"
                                                type="checkbox"
                                                aria-label="Select invoice"
                                            />
                                        </td>
                                        <td><span class="text-muted">7</span></td>
                                        <td>
                                            <a
                                                href=""
                                                class="text-reset hostings_edit"
                                            >
                                                <h3 class="title-name">NGUYỄN THỊ THANH</h3>
                                            </a>
                                        </td>

                                        <td>2GB</td>
                                        <td>1GB</td>
                                        <td>
                                            <span><SvgEyeSlash /></span>
                                        </td>
                                        <td>Hết hạn 23/04/2023</td>
                                        <td>
                                            <span class="label_year public">public</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input
                                                class="form-check-input m-0 align-middle"
                                                type="checkbox"
                                                aria-label="Select invoice"
                                            />
                                        </td>
                                        <td><span class="text-muted">8</span></td>
                                        <td>
                                            <a
                                                href=""
                                                class="text-reset hostings_edit"
                                            >
                                                <h3 class="title-name">DƯƠNG VĂN CẢNH</h3>
                                            </a>
                                        </td>

                                        <td>2GB</td>
                                        <td>1GB</td>
                                        <td>
                                            <span><SvgEyeSlash /></span>
                                        </td>
                                        <td>Hết hạn 07/04/3023</td>
                                        <td>
                                            <span class="label_year public">public</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input
                                                class="form-check-input m-0 align-middle"
                                                type="checkbox"
                                                aria-label="Select invoice"
                                            />
                                        </td>
                                        <td><span class="text-muted">9</span></td>
                                        <td>
                                            <a
                                                href=""
                                                class="text-reset hostings_edit"
                                            >
                                                <h3 class="title-name">NGUYỄN HỒNG LONG</h3>
                                            </a>
                                        </td>

                                        <td>5GB</td>
                                        <td>1GB</td>
                                        <td>
                                            <span><SvgEyeSlash /></span>
                                        </td>
                                        <td>Hết hạn 30/03/2023</td>
                                        <td>
                                            <span class="label_year public">public</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input
                                                class="form-check-input m-0 align-middle"
                                                type="checkbox"
                                                aria-label="Select invoice"
                                            />
                                        </td>
                                        <td><span class="text-muted">10</span></td>
                                        <td>
                                            <a
                                                href=""
                                                class="text-reset hostings_edit"
                                            >
                                                <h3 class="title-name">VŨ ĐỨC VIỆT</h3>
                                            </a>
                                        </td>

                                        <td>2GB</td>
                                        <td>1GB</td>
                                        <td>
                                            <span><SvgEyeSlash /></span>
                                        </td>
                                        <td>Hết hạn 16/03/2022</td>
                                        <td>
                                            <span class="label_year public">public</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input
                                                class="form-check-input m-0 align-middle"
                                                type="checkbox"
                                                aria-label="Select invoice"
                                            />
                                        </td>
                                        <td><span class="text-muted">11</span></td>
                                        <td>
                                            <a
                                                href=""
                                                class="text-reset hostings_edit"
                                            >
                                                <h3 class="title-name">Default</h3>
                                            </a>
                                        </td>
                                        <td>1GB</td>
                                        <td>1GB</td>
                                        <td>
                                            <span><SvgEyeSlash /></span>
                                        </td>
                                        <td>Default</td>
                                        <td>
                                            <span class="label_year private">private</span>
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