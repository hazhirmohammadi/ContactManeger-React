import SearchContact from "./contact/SearchContact";
import {PURPLE, BACKGROUND} from '../helpers/Color'

const Navbar = () => {
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
                    <div className="col">
                        <SearchContact/>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;