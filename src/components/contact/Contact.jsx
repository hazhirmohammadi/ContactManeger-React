import {CURRENTLINE, CYAN, ORANGE, PURPLE, RED} from "../../helpers/Color";
import {Link} from "react-router-dom";

const Contact = ({contact,confirmDelete}) => {
    return (
        <div className="col-md-6">
            <div style={{backgroundColor: CURRENTLINE}} className="card my-2">
                <div className="card-body ">
                    <div className="row justify-content-between d-flex align-items-center">
                        <div className="col-md-4 col-sm-4">
                            <img
                                src={contact.photo}
                                alt={contact.fullname}
                                style={{border: `1px silid ${PURPLE}`}}
                                className="img-fluid rounded"/>

                        </div>
                        <div className="col-md-7 col-sm-7  ">
                            <ul className="list-group">
                                <li className=" list-group-item list-group-item-dark">
                                    Name & family:{" "}
                                    <span className="fw-bold">{contact.fullname}</span>
                                </li>
                                <li className="list-group-item list-group-item-dark">
                                    Mobile Number:{" "}
                                    <span className="fw-bold">{contact.mobile}</span>
                                </li>
                                <li className="list-group-item list-group-item-dark">
                                    Email:{" "}
                                    <span className="fw-bold">{contact.email}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center">
                            <Link to={`/contacts/${contact.id}`} className="btn my-1" style={{backgroundColor: ORANGE}}>
                                <i className="fa fa-eye"/>
                            </Link>
                            <Link  to={`/contacts/edit/${contact.id}`}
                                className="btn my-1" style={{backgroundColor: CYAN}}>
                                <i className="fa fa-pencil"/>
                            </Link>
                            <button
                                className="btn my-1"
                                style={{backgroundColor: RED}}
                                onClick={confirmDelete}
                            >
                                <i className="fa fa-trash"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;