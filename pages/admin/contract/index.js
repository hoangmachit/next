import Head from "next/head";
import AdminLayut from "../../../components/AdminLayout";
import { SvgTick, SvgEyeSlash, SvgArrowDown, SvgSearch } from "../../../components/AdminIcon";
export default function Contract() {
    return (
        <>
            <Head>
                <title>Contract - Admin</title>
            </Head>
            <AdminLayut >
                <div class="col-12">
                    <div class="row row-cards">
                        <div class="col-sm-12 col-lg-12">
                            <div class="card card-sm">
                                <form
                                    action="https://user.haweb.vn/dashboard/contracts"
                                    method="GET"
                                >
                                    <input type="hidden" name="search" value="true" />
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="mb-3">
                                                    <label class="form-label">Tên</label>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        name="name"
                                                        value=""
                                                    />
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="mb-3">
                                                    <label class="form-label">Code</label>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        name="code"
                                                        value=""
                                                    />
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="mb-3">
                                                    <label class="form-label">Ngày kí</label>
                                                    <input
                                                        type="date"
                                                        class="form-control"
                                                        name="signing_date"
                                                        value=""
                                                    />
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="mb-3">
                                                    <label class="form-label">Ngày hoàn thành</label>
                                                    <input
                                                        type="date"
                                                        class="form-control"
                                                        value=""
                                                        name="date_of_delivery"
                                                    />
                                                </div>
                                            </div>
                                            <div class="show-content-search">
                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <div class="mb-3">
                                                            <label class="form-label">Giá thấp nhất</label>
                                                            <input
                                                                type="text"
                                                                class="form-control format-price"
                                                                min="0"
                                                                max="100000000"
                                                                name="price_min"
                                                                value=""
                                                                placeholder="0đ"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="mb-3">
                                                            <label class="form-label">Giá cao nhât</label>
                                                            <input
                                                                type="text"
                                                                class="form-control format-price"
                                                                min="0"
                                                                name="price_max"
                                                                max="100000000"
                                                                value=""
                                                                placeholder="10.000.000đ"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="row">
                                                            <div class="col-lg-6 col-ms-12">
                                                                <div class="mb-3">
                                                                    <label class="form-label">TT Đợt 1</label>
                                                                    <input
                                                                        type="text"
                                                                        class="form-control"
                                                                        name="payment_1st"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-6 col-sm-2">
                                                                <div class="mb-3">
                                                                    <label class="form-label">TT Đợt 2</label>
                                                                    <input
                                                                        type="text"
                                                                        class="form-control"
                                                                        name="payment_2st"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="mb-3">
                                                            <label class="form-label">Trạng thái</label>
                                                            <select class="form-select" name="status">
                                                                <option value="public">Public</option>
                                                                <option value="pending">Pending</option>
                                                                <option value="private">Private</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <input type="hidden" name="show" value="false" />
                                            <div class="col-lg-12">
                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <div class="mb-3">
                                                            <button
                                                                class="btn btn-search btn-info form-control"
                                                                type="submit"
                                                            >
                                                                <SvgSearch /> Tìm kiếm
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Danh sách hợp đồng</h3>
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
                            <table
                                class="table card-table table-vcenter text-nowrap datatable"
                                id="table_contracts"
                            >
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

                                        <th>Code</th>

                                        <th>Tên</th>

                                        <th>Ngày kí</th>

                                        <th>T/Toán đợt 1</th>

                                        <th>T/Toán đợt 2</th>

                                        <th>Tên Miền</th>

                                        <th>Hosting</th>

                                        <th>Khách hàng</th>

                                        <th>Trạng thái</th>

                                        <th>Giá</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr
                                        data-contract_id="5"
                                        data-action="https://user.haweb.vn/dashboard/contracts/5"
                                    >
                                        <td>
                                            <input
                                                class="form-check-input m-0 align-middle"
                                                type="checkbox"
                                                aria-label="Select invoice"
                                            />
                                        </td>

                                        <td><span class="text-muted">#5</span></td>

                                        <td>
                                            <h3 class="contract-code">021022W</h3>
                                        </td>

                                        <td>
                                            <a class="text-reset" tabindex="-1">
                                                <h3 class="title-name">
                                                    CÔNG TY TNHH XÂY DỰNG PHÁT TRIỂN ĐĂNG KHÔI
                                                </h3>
                                            </a>
                                        </td>

                                        <td>
                                            <span>16/10/2022</span>
                                        </td>

                                        <td>
                                            <div class="icon-svg">
                                                <span class="svg active">
                                                    <SvgTick />
                                                </span>
                                            </div>
                                        </td>

                                        <td>
                                            <div class="icon-svg">
                                                <span class="svg">
                                                    <SvgTick />
                                                </span>
                                            </div>
                                        </td>

                                        <td>
                                            <span class="label_year public"> Default </span>
                                        </td>

                                        <td>
                                            <span class="label_year public"> Default </span>
                                        </td>

                                        <td>
                                            <span class="label_year public"> Nguyễn Văn Lâm </span>
                                        </td>

                                        <td>
                                            <span class="label_year public"> public </span>
                                        </td>

                                        <td>
                                            <span><SvgEyeSlash /></span>
                                        </td>
                                    </tr>

                                    <tr
                                        data-contract_id="4"
                                        data-action="https://user.haweb.vn/dashboard/contracts/4"
                                    >
                                        <td>
                                            <input
                                                class="form-check-input m-0 align-middle"
                                                type="checkbox"
                                                aria-label="Select invoice"
                                            />
                                        </td>

                                        <td><span class="text-muted">#4</span></td>

                                        <td>
                                            <h3 class="contract-code">011022W</h3>
                                        </td>

                                        <td>
                                            <a class="text-reset" tabindex="-1">
                                                <h3 class="title-name">Đỗ Văn Văn</h3>
                                            </a>
                                        </td>

                                        <td>
                                            <span>05/10/2011</span>
                                        </td>

                                        <td>
                                            <div class="icon-svg">
                                                <span class="svg active">
                                                    <SvgTick />
                                                </span>
                                            </div>
                                        </td>

                                        <td>
                                            <div class="icon-svg">
                                                <span class="svg active">
                                                    <SvgTick />
                                                </span>
                                            </div>
                                        </td>

                                        <td>
                                            <span class="label_year public"> Default </span>
                                        </td>

                                        <td>
                                            <span class="label_year public"> Default </span>
                                        </td>

                                        <td>
                                            <span class="label_year public"> Đỗ Văn Văn </span>
                                        </td>

                                        <td>
                                            <span class="label_year public"> public </span>
                                        </td>

                                        <td>
                                            <span><SvgEyeSlash /></span>
                                        </td>
                                    </tr>

                                    <tr
                                        data-contract_id="3"
                                        data-action="https://user.haweb.vn/dashboard/contracts/3"
                                    >
                                        <td>
                                            <input
                                                class="form-check-input m-0 align-middle"
                                                type="checkbox"
                                                aria-label="Select invoice"
                                            />
                                        </td>

                                        <td><span class="text-muted">#3</span></td>

                                        <td>
                                            <h3 class="contract-code">code003</h3>
                                        </td>

                                        <td>
                                            <a class="text-reset" tabindex="-1">
                                                <h3 class="title-name">Khách hàng 003</h3>
                                            </a>
                                        </td>

                                        <td>
                                            <span>18/06/2022</span>
                                        </td>

                                        <td>
                                            <div class="icon-svg">
                                                <span class="svg active">
                                                    <SvgTick />
                                                </span>
                                            </div>
                                        </td>

                                        <td>
                                            <div class="icon-svg">
                                                <span class="svg">
                                                    <SvgTick />
                                                </span>
                                            </div>
                                        </td>

                                        <td>
                                            <span class="label_year public"> Default </span>
                                        </td>

                                        <td>
                                            <span class="label_year public"> Package 2GB </span>
                                        </td>

                                        <td>
                                            <span class="label_year public"> Bich Tram Ha Thi </span>
                                        </td>

                                        <td>
                                            <span class="label_year private"> private </span>
                                        </td>

                                        <td>
                                            <span><SvgEyeSlash /></span>
                                        </td>
                                    </tr>

                                    <tr
                                        data-contract_id="2"
                                        data-action="https://user.haweb.vn/dashboard/contracts/2"
                                    >
                                        <td>
                                            <input
                                                class="form-check-input m-0 align-middle"
                                                type="checkbox"
                                                aria-label="Select invoice"
                                            />
                                        </td>

                                        <td><span class="text-muted">#2</span></td>

                                        <td>
                                            <h3 class="contract-code">code 001</h3>
                                        </td>

                                        <td>
                                            <a class="text-reset" tabindex="-1">
                                                <h3 class="title-name">Khách hàng 001</h3>
                                            </a>
                                        </td>

                                        <td>
                                            <span>17/06/2022</span>
                                        </td>

                                        <td>
                                            <div class="icon-svg">
                                                <span class="svg active">
                                                    <SvgTick />
                                                </span>
                                            </div>
                                        </td>

                                        <td>
                                            <div class="icon-svg">
                                                <span class="svg">
                                                    <SvgTick />
                                                </span>
                                            </div>
                                        </td>

                                        <td>
                                            <span class="label_year public"> Domain A </span>
                                        </td>

                                        <td>
                                            <span class="label_year public"> Default </span>
                                        </td>

                                        <td>
                                            <span class="label_year public"> Hoang Mach Van </span>
                                        </td>

                                        <td>
                                            <span class="label_year private"> private </span>
                                        </td>

                                        <td>
                                            <span><SvgEyeSlash /></span>
                                        </td>
                                    </tr>

                                    <tr
                                        data-contract_id="1"
                                        data-action="https://user.haweb.vn/dashboard/contracts/1"
                                    >
                                        <td>
                                            <input
                                                class="form-check-input m-0 align-middle"
                                                type="checkbox"
                                                aria-label="Select invoice"
                                            />
                                        </td>

                                        <td><span class="text-muted">#1</span></td>

                                        <td>
                                            <h3 class="contract-code">code001</h3>
                                        </td>

                                        <td>
                                            <a class="text-reset" tabindex="-1">
                                                <h3 class="title-name">Khách hàng 001</h3>
                                            </a>
                                        </td>

                                        <td>
                                            <span>17/06/2022</span>
                                        </td>

                                        <td>
                                            <div class="icon-svg">
                                                <span class="svg active">
                                                    <SvgTick />
                                                </span>
                                            </div>
                                        </td>

                                        <td>
                                            <div class="icon-svg">
                                                <span class="svg">
                                                    <SvgTick />
                                                </span>
                                            </div>
                                        </td>

                                        <td>
                                            <span class="label_year public"> Domain A </span>
                                        </td>

                                        <td>
                                            <span class="label_year public"> Package 2GB </span>
                                        </td>

                                        <td>
                                            <span class="label_year public"> Bich Tram Ha Thi </span>
                                        </td>

                                        <td>
                                            <span class="label_year private"> private </span>
                                        </td>
                                        <td>
                                            <span><SvgEyeSlash /></span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </AdminLayut>
        </>
    );
}