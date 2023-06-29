import {COMMENT, GREEN, PURPLE} from "../../helpers/Color";
import Spinner from "../Spinner";
import {Link} from "react-router-dom";

const AddContact = ({loading, contact, setContactInfo, groups, createContactForm,}) => {
    console.log("fuckkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
    return (
        <>
            {loading ? (
                <Spinner/>
            ) : (
                <>
                    <section className="p-3">
                        <img
                            src={require("../../assets/man-taking-note.png")}
                            height="400px"
                            style={{
                                position: "absolute",
                                zIndex: "-1",
                                top: "130px",
                                right: "100px",
                                opacity: "50%",
                            }}
                        />
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <p
                                        className="h4 fw-bold text-center"
                                        style={{color: GREEN}}
                                    >
                                        Create new contact
                                    </p>
                                </div>
                            </div>
                            <hr style={{backgroundColor: GREEN}}/>
                            <div className="row mt-5">
                                <div className="col-md-4">
                                    <form onSubmit={createContactForm}>
                                        <div className="mb-2">
                                            <input
                                                name="fullname"
                                                type="text"
                                                value={contact.fullname}
                                                onChange={setContactInfo}
                                                className="form-control"
                                                placeholder="name and family"
                                                required={true}
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                name="photo"
                                                type="text"
                                                value={contact.photo}
                                                onChange={setContactInfo}
                                                className="form-control"
                                                required={true}
                                                placeholder="addses photo"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                name="mobile"
                                                type="number"
                                                value={contact.mobile}
                                                onChange={setContactInfo}
                                                className="form-control"
                                                required={true}
                                                placeholder="mobile number"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="email"
                                                name="email"
                                                value={contact.email}
                                                onChange={setContactInfo}
                                                className="form-control"
                                                required={true}
                                                placeholder="email addres"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="text"
                                                name="job"
                                                value={contact.job}
                                                onChange={setContactInfo}
                                                className="form-control"
                                                required={true}
                                                placeholder="job"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <select
                                                name="group"
                                                value={contact.group}
                                                onChange={setContactInfo}
                                                required={true}
                                                className="form-control"
                                            >
                                                <option value="">Select group</option>
                                                {groups.length > 0 &&
                                                    groups.map((group) => (
                                                        <option key={group.id} value={group.id}>
                                                            {group.name}
                                                        </option>
                                                    ))}
                                            </select>
                                        </div>
                                        <div className="mx-2">
                                            <input
                                                type="submit"
                                                className="btn"
                                                style={{backgroundColor: PURPLE}}
                                                value="import contact"
                                            />
                                            <Link
                                                to={"/contact"}
                                                className="btn mx-2"
                                                style={{backgroundColor: COMMENT}}
                                            >
                                                cancel
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    );
};

export default AddContact;