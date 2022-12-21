import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import AdminAlert from "../../../components/AdminAlert";
import { SvgPlus } from "../../../components/AdminIcon";
import AdminLayout from "../../../components/AdminLayout";
import AdminValidate from "../../../components/AdminValidate";
const Create = () => {
    const [design, setDesign] = useState({
        first_name: null,
        last_name: null,
        url: null,
        note: null,
        date_start: null,
        date_finish: null,
        font_family: null,
        url_example: null,
        status: 1,
        photo: null,
        code: null,
    });
    const [message, setMessage] = useState({
        status: false,
        text: ""
    });
    const [validate, setValidate] = useState({
        first_name: [],
        last_name: [],
        url: [],
        note: [],
        date_start: [],
        date_finish: [],
        font_family: [],
        url_example: [],
        status: 1,
        photo: [],
        code: [],
    });
    const handleDataDesign = (e, filters) => {
        let value = e.target.value;
        switch (filters) {
            case 'first_name':
                design.first_name = value;
                break;
            case 'last_name':
                design.last_name = value;
                break;
            case 'url':
                design.url = value;
                break;
            case 'note':
                design.note = value;
                break;
            case 'date_start':
                design.date_start = value;
                break;
            case 'date_finish':
                design.date_finish = value;
                break;
            case 'url_example':
                design.url_example = value;
                break;
            case 'status':
                design.status = parseInt(value);
                break;
            case 'photo':
                design.status = value;
                break;
            default:
                break;
        }
        setDesign(design);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('design', design);
        try {
            axios
                .post(`${process.env.NEXT_PUBLIC_API}/design`, {
                    design
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
                <title>Create Design- Admin</title>
            </Head>
            <AdminLayout>
                {message.status &&
                    (<div className="page-header d-print-none">
                        <AdminAlert type="success" message={message} />
                    </div>
                    )}
                <div className="col-12">
                    <div className="card">
                        <div className="card-header justify-content-between">
                            <h3 className="card-title">Thông tin thiết kế</h3>
                        </div>
                        <form onSubmit={(e) => handleSubmit(e)} method="POST" action="" role="form" >
                            <div className="card-body py-3">
                                <div className="mb-3">
                                    <label className="form-label">Hợp đồng</label>
                                    <select className="form-select" value={0} name="contract_id" required="" onChange={(e) => handleDataDesign(e, 'contract_id')} >
                                        <option value="0">Null</option>
                                        <option value="4">Đỗ Văn Văn</option>
                                        <option value="5">CÔNG TY TNHH XÂY DỰNG PHÁT TRIỂN ĐĂNG KHÔI</option>
                                    </select>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label className="form-label">Họ</label>
                                            <div className="input-group input-group-flat">
                                                <input type="text" className="form-control ps-2" defaultValue={design.first_name} onChange={(e) => handleDataDesign(e, 'first_name')} name="first_name" required="" />
                                            </div>
                                            {validate && validate.first_name && (<AdminValidate errors={validate.first_name} />)}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label className="form-label">Tên</label>
                                            <div className="input-group input-group-flat">
                                                <input type="text" className="form-control ps-2" defaultValue={design.last_name} onChange={(e) => handleDataDesign(e, 'last_name')} name="last_name" required="" />
                                            </div>
                                            {validate && validate.last_name && (<AdminValidate errors={validate.last_name} />)}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <label className="form-label">Upload image</label>
                                        <div className="col mb-2">
                                            <div className="row">
                                                <div className="col-lg-8">
                                                    <div className="progress progress_file_img d-none">
                                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div id="upload-zone_file_img" className="media py-5 border-ec-dashed mb-2 rounded">
                                                        <div className="media-body">
                                                            <i className="fa fa-cloud-upload fa-3x text-ec-lightGray mx-3 align-middle" aria-hidden="true"></i>
                                                            <input type="file" id="file_img" name="image" multiple="" accept="image/*" className="form-control-file d-none" />
                                                            <a className="btn btn-ec-regular mr-2 click_button" data-type="file_img">
                                                                Chọn tệp tin
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <input type="hidden" name="photo" id="photo_file_img" defaultValue="" />
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="c-form__fileUploadThumbnails clearfix ui-sortable classThumb thumbFileImage thumbFileImage_file_img">
                                                        <div className="c-form__fileUploadThumbnail" style={{ backgroundImage: `url('')` }}><a className="delete-image" data-type="file_img"><i className="fa fa-times" aria-hidden="true"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <label className="form-label">Url thiết kế</label>
                                            <input type="text" className="form-control" name="url" defaultValue={design.url} onChange={(e) => handleDataDesign(e, 'url')} required="" />
                                            {validate && validate.url && (<AdminValidate errors={validate.url} />)}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="mb-3">
                                            <label className="form-label">Ngày bắt đầu</label>
                                            <input type="date" name="date_start" required="" defaultValue={design.date_start} onChange={(e) => handleDataDesign(e, 'date_start')} className="form-control" />
                                            {validate && validate.date_start && (<AdminValidate errors={validate.date_start} />)}
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mb-3">
                                            <label className="form-label">Ngày hoàn thành</label>
                                            <input type="date" name="date_finish" defaultValue={design.date_finish} onChange={(e) => handleDataDesign(e, 'date_finish')} className="form-control" />
                                            {validate && validate.date_finish && (<AdminValidate errors={validate.date_finish} />)}
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mb-3">
                                            <label className="form-label">Trạng thái</label>
                                            <select className="form-select" value={0} name="status" onChange={(e) => handleDataDesign(e, 'status')} >
                                                <option value="">Choice</option>
                                                <option value="0">Pending</option>
                                                <option value="1">Private</option>
                                                <option value="2">Public</option>
                                            </select>
                                            {validate && validate.status && (<AdminValidate errors={validate.status} />)}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <label className="form-label">Đường dẫn mẫu</label>
                                            <textarea className="form-control" name="url_example" rows="5"></textarea>
                                            {validate && validate.url_example && (<AdminValidate errors={validate.url_example} />)}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <label className="form-label">Font Family</label>
                                            <textarea className="form-control" name="font_family" defaultValue={design.font_family} onChange={(e) => handleDataDesign(e, 'font_family')} rows="5"></textarea>
                                            {validate && validate.font_family && (<AdminValidate errors={validate.font_family} />)}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <label className="form-label">Thông tin thêm</label>
                                            <textarea className="form-control" name="note" rows="5" defaultValue={design.note} onChange={(e) => handleDataDesign(e, 'note')} ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer d-flex align-items-center">
                                <Link
                                    href="/admin/design"
                                    className="btn btn-default"
                                    title="Quay lại"
                                >
                                    Quay lại
                                </Link>
                                <button
                                    type="submit"
                                    id="submit-design-create"
                                    className="btn btn-primary ms-auto"
                                    title="Tạo thiết kế"
                                >
                                    <SvgPlus />
                                    Tạo thiết kế
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </AdminLayout>
        </>
    )
}
export default Create;