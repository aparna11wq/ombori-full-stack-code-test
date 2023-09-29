
import { useEffect, useState } from "react";
import UserList from "./UserList";
import Loader from "./components/Loader/Loader";

export default function App() {
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        setShowLoader(true);

        setTimeout(() => {
            setShowLoader(false)
        }, 10000);
    }, [])

    return (
        <>
            {showLoader ? <Loader /> :
                <UserList />}
        </>
    )
}
