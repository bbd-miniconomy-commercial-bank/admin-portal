import {Outlet} from "react-router-dom";

import Header from "../../components/Header/Header.jsx"
import Navigation from "../../components/Navigation/Navigation.jsx"

const Main = () => {
    return (
        <div>
            <Header logoutButton={true} />
            <Navigation />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Main