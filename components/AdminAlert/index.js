function AdminAlert(props) {
    const { type, text } = props.message;
    return (
        <>
            {type == 'success' && (<div className="row mt-3">
                <div className="col-sm-12">
                    <div className="alert  alert-success alert-dismissible fade show" role="alert">
                        {text}
                    </div>
                </div>
            </div>)}
            {type == 'errors' && (<div className="row mt-3">
                <div className="col-sm-12">
                    <div className="alert  alert-danger alert-dismissible fade show" role="alert">
                        {text}
                    </div>
                </div>
            </div>)}
        </>
    );
}
export default AdminAlert;
