import SearchContact from "./contact/SearchContact";
import {PURPLE, BACKGROUND} from '../helpers/Color'
import {useLocation} from 'react-router-dom';

const Navbar = ({query, search}) => {
    const location = useLocation();
    return (
        <nav className="navbar navbar-dark navbar-expand-sm shadow-lg" style={{backgroundColor: BACKGROUND}}>
            <div className="container">
                <div className="row w-100">
                    <div className="col">
                        <div
                            className="navbar-brand"
                        ><i
                            className="fa fa-id-badge"
                            style={{color: PURPLE}}>
                        </i>
                            {" "}web application manager{" "}
                            <span style={{color: PURPLE}}>contact</span>
                        </div>

                    </div>
                    {
                        location.pathname === "/contacts" ? (
                            <div className="col">
                                <SearchContact query={query} search={search}/>
                            </div>
                        ) : null}

                </div>
            </div>
        </nav>
    )
}
export default Navbar;