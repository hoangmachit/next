
import Head from "next/head";
import AdminLayout from "../../../components/AdminLayout";
export default function Setting() {
    return (
        <>
            <Head>
                <title>Setting - Admin</title>
            </Head>
            <AdminLayout>
                <div className="row">
                    Get Settings
                </div>
            </AdminLayout>
        </>
    );
}