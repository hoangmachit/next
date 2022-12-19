export default function AdminLoading() {
  return (
    <>
      <div className="loader-wrapper">
        <div className="loader-admin">
          <div className="preloader">
            <div className="spinner-layer">
              <div className="circle-clipper float-left">
                <div className="circle"></div>
              </div>
              <div className="circle-clipper float-right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
          <p>Please wait...</p>
        </div>
      </div>
    </>
  );
}