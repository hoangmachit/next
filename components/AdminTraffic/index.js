import { SvgContract, SvgDesign, SvgDomain, SvgHosting, SvgCustomer, SvgAccount } from "../AdminIcon";
export default function AdminTraffic() {
  return (
    <>
      <div className="col-12">
        <div className="row row-cards">
          <div className="col-sm-6 col-lg-3">
            <div className="card card-sm">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <span className="bg-primary text-white avatar">
                      <SvgContract />
                    </span>
                  </div>
                  <div className="col">
                    <div className="font-weight-medium">132 Hợp đồng</div>
                    <div className="text-muted">12 đã thanh toán</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="card card-sm">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <span className="bg-green text-white avatar">
                      <SvgDesign />
                    </span>
                  </div>
                  <div className="col">
                    <div className="font-weight-medium">78 Thiết kế</div>
                    <div className="text-muted">32 hoạt động</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="card card-sm">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <span className="bg-green text-white avatar"
                    ><SvgDesign
                      /></span>
                  </div>
                  <div className="col">
                    <div className="font-weight-medium">78 Thiết kế</div>
                    <div className="text-muted">32 hoạt động</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="card card-sm">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <span className="bg-green text-white avatar"
                    ><SvgDesign
                      /></span>
                  </div>
                  <div className="col">
                    <div className="font-weight-medium">78 Thiết kế</div>
                    <div className="text-muted">32 hoạt động</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="card card-sm">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <span className="bg-twitter text-white avatar"
                    ><SvgDomain
                      /></span>
                  </div>
                  <div className="col">
                    <div className="font-weight-medium">623 Tên miền</div>
                    <div className="text-muted">16 sử dụng</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="card card-sm">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <span className="bg-facebook text-white avatar"
                    ><SvgHosting
                      /></span>
                  </div>
                  <div className="col">
                    <div className="font-weight-medium">132 Hosting</div>
                    <div className="text-muted">21 hosting</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="card card-sm">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <span className="bg-facebook text-white avatar"
                    ><SvgCustomer
                      /></span>
                  </div>
                  <div className="col">
                    <div className="font-weight-medium">132 Customer</div>
                    <div className="text-muted">21 đã sử dụng</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="card card-sm">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <span className="bg-facebook text-white avatar"
                    ><SvgAccount
                      /></span>
                  </div>
                  <div className="col">
                    <div className="font-weight-medium">132 Tài khoản</div>
                    <div className="text-muted">21 đã đăng ký</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}