import {CURRENTLINE, CYAN, ORANGE, PURPLE, RED} from "../../helpers/Color";

const Contact=()=>{
    return(
        <div className="col-md-6">
            <div style={{backgroundColor: CURRENTLINE}} className="card my-2">
                <div className="card-body ">
                    <div className="row justify-content-between d-flex align-items-center">
                        <div className="col-md-4 col-sm-4">
                            <img
                                src="https://via.placeholder.com/200"
                                alt=""
                                style={{border: `1px silid ${PURPLE}`}}
                                className="img-fluid rounded"/>

                        </div>
                        <div className="col-md-7 col-sm-7  ">
                            <ul className="list-group">
                                <li className=" list-group-item list-group-item-dark">
                                    Name & family:{" "}
                                    <span className="fw-bold">
                                                        hazhir mohammadi
                                                    </span>
                                </li>
                                <li className="list-group-item list-group-item-dark">
                                    Mobile Number:{" "}
                                    <span className="fw-bold">
                                                        0905756277
                                                    </span>
                                </li>
                                <li className="list-group-item list-group-item-dark">
                                    Email:{" "}
                                    <span className="fw-bold">
                                                        hazhir6690@gmail.com
                                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center">
                            <button className="btn my-1" style={{backgroundColor:ORANGE}}>
                                <i className="fa fa-eye"/>
                            </button>
                            <button className="btn my-1" style={{backgroundColor:CYAN}}>
                                <i className="fa fa-pencil"/>
                            </button>
                            <button className="btn my-1" style={{backgroundColor:RED}}>
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