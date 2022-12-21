import Head from "next/head";
import AdminLayout from "../../../components/AdminLayout";
function Detail({ detail }) {
    return (
        <>
            <Head>
                <title>{detail.first_name} {detail.last_name} - Admin</title>
            </Head>
            <AdminLayout>
                <div className="col-12">
                    <div className="card">
                        <div className="card-header justify-content-between">
                            <h3 className="card-title">Chi tiết thiết kế</h3>
                            <button className="btn btn-danger" title="Delete domain" onClick={(e) => {
                                console.glog('1');
                            }}>Delete Design</button>
                        </div>
                        <div className="card-body py-3">
                            <form action="" method="POST" role="form">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Tạo mới thiết kế</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="mb-3">
                                            <label class="form-label">Hợp đồng</label>
                                            <select class="form-select" name="contract_id" required="">
                                                <option value="0" selected="">Null</option>
                                                <option value="4">Đỗ Văn Văn</option>
                                                <option value="5">CÔNG TY TNHH XÂY DỰNG PHÁT TRIỂN ĐĂNG KHÔI</option>
                                            </select>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="mb-3">
                                                    <label class="form-label">Họ</label>
                                                    <div class="input-group input-group-flat">
                                                        <input type="text" class="form-control ps-2" value="" name="first_name" required="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="mb-3">
                                                    <label class="form-label">Tên</label>
                                                    <div class="input-group input-group-flat">
                                                        <input type="text" class="form-control ps-2" value="" name="last_name" required="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <label class="form-label">Upload image</label>
                                                <div class="col mb-2">
                                                    <div class="row">
                                                        <div class="col-lg-8">
                                                            <div class="progress progress_file_img d-none">
                                                                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <div id="upload-zone_file_img" class="media py-5 border-ec-dashed mb-2 rounded">
                                                                <div class="media-body">
                                                                    <i class="fa fa-cloud-upload fa-3x text-ec-lightGray mx-3 align-middle" aria-hidden="true"></i>
                                                                    <input type="file" id="file_img" name="image" multiple="" accept="image/*" class="form-control-file d-none" />
                                                                    <a class="btn btn-ec-regular mr-2 click_button" data-type="file_img">
                                                                        Chọn tệp tin
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <input type="hidden" name="photo" id="photo_file_img" value="" />
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <div class="c-form__fileUploadThumbnails clearfix ui-sortable classThumb thumbFileImage thumbFileImage_file_img">
                                                                <div class="c-form__fileUploadThumbnail" style={{ backgroundImage:`url('')` }}><a class="delete-image" data-type="file_img"><i class="fa fa-times" aria-hidden="true"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="mb-3">
                                                    <label class="form-label">Url thiết kế</label>
                                                    <input type="text" class="form-control" name="url" value="" required="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-4">
                                                <div class="mb-3">
                                                    <label class="form-label">Ngày bắt đầu</label>
                                                    <input type="date" name="date_start" required="" value="" class="form-control" />
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="mb-3">
                                                    <label class="form-label">Ngày hoàn thành</label>
                                                    <input type="date" name="date_finish" value="" class="form-control" />
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="mb-3">
                                                    <label class="form-label">Trạng thái</label>
                                                    <select class="form-select" name="status">
                                                        <option value="private">
                                                            Private</option>
                                                        <option value="pending">
                                                            Pending</option>
                                                        <option value="public">Public
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="mb-3">
                                                    <label class="form-label">Đường dẫn mẫu</label>
                                                    <textarea class="form-control" name="url_example" rows="3"></textarea>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="mb-3">
                                                    <label class="form-label">Font Family</label>
                                                    <textarea class="form-control" name="font_family" rows="3"></textarea>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="mb-3">
                                                    <label class="form-label">Thông tin thêm</label>
                                                    <textarea class="form-control" name="note" rows="3"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <a href="#" class="btn btn-default link-secondary" data-bs-dismiss="modal">
                                            Hủy bỏ
                                        </a>
                                        <button tyle="submit" class="btn btn-primary ms-auto">
                                            <SvgPlus /> Tạo thiết kế
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}
Detail.getInitialProps = async (ctx) => {
    const id = ctx.query.id;
    const res = await fetch(`http://system.local/api/design/${id}`);
    const { data } = await res.json();
    return { detail: data }
}
export default Detail;