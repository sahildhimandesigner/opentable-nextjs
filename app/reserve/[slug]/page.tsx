import Link from "next/link";
import NavBar from "../../component/NavBar";
import Header from "./Components/Header";
import Form from "./Components/Form";

const ReservationPage = () => {
    return (  
        <>
            <NavBar />
            {/* NAVBAR END */}
            <div className="border-t h-screen">
                <div className="py-9 w-3/5 m-auto">
                    {/* HEADER */}
                    <Header />
                    {/* HEADER */} {/* FORM */}
                    <Form />
                </div>
            </div>
        </>
    )
}

export default ReservationPage;