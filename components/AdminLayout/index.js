import AdminSidebar from "../AdminSidebar";
import AdminTraffic from "../AdminTraffic";
import AdminHeader from "../AdminHeader";
import AdminFooter from "../AdminFooter";
export default function AdminLayout({ children }) {
    return (
        <>
            <div className="page">
                <AdminSidebar />
                <AdminHeader />
                <div className="page-wrapper">
                    <div className="page-body">
                        <div className="container-xl">
                            <div className="row row-deck row-cards">
                                <AdminTraffic />
                                {children}
                            </div>
                        </div>
                    </div>
                    <AdminFooter />
                </div>
            </div>
        </>
    );
}