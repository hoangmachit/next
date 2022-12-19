import Head from "next/head";
import AdminLayout from "../../../components/AdminLayout";
function Detail({ detail }) {
    return (
        <>
            <Head>
                <title>{detail.first_name} {detail.last_name} - Admin</title>
            </Head>
            <AdminLayout>
                <h1>Detail page</h1>
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