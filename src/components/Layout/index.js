import {NavLink, Outlet} from "react-router-dom"
import "./LayoutDefault.scss"

function LayoutDefault(){
    return(
        <>
            <div className="layout-default">
                <header className="layout-default__header">
                    <div className="layout-default__logo">GiaiTue</div>
                    <div className="menu">
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/topic">Topic</NavLink>
                            </li>
                        </ul>
                    </div>
                </header>
                <main className="layout-default__main">
                    
                    <Outlet/>

                </main>
                <footer className="layout-default__footer">
                    NgoaiNguGiaiTue 2024@manhducit05
                </footer>
            </div>
        </>
    )
}
export default LayoutDefault;