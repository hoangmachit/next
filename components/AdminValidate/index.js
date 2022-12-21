function AdminValidate(props) {
    const { errors } = props;
    return (
        <>
            {errors.length > 0 && errors.map((item, index) => {
                return (
                    <small key={index} className="mt-2 d-block alert-domains text-red">
                        {item}
                    </small>
                );
            })}
        </>
    );
}
export default AdminValidate;