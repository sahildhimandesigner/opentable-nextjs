import Link from "next/link";
import NavBar from "../../component/NavBar";
import Header from "./Components/Header";
import Form from "./Components/Form";

const ReservationPage = () => {
    return (
        <main className="bg-gray-100 min-h-screen w-screen text-black">
            <main className="max-w-screen-2xl m-auto bg-white">
                {/* NAVBAR */}
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
            </main>
        </main>
    )
}

export default ReservationPage;