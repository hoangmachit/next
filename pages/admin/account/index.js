import Head from "next/head";
import AdminLayout from "../../../components/AdminLayout";
export default function Account() {
    return (
        <>
            <Head>
                <title>Account - Admin</title>
            </Head>
            <AdminLayout>
                <div className="row">
                    Get Account
                </div>
            </AdminLayout>
        </>
    );
}