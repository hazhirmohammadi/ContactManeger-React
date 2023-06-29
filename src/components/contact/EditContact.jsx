import {useEffect, useState} from "react";

import {Link, useNavigate, useParams} from "react-router-dom";

import {
    getContact,
    getAllGroups,
    updateContact,
} from "../../services/ContactService";

import {COMMENT, ORANGE, PURPLE} from "../../helpers/Color";
import Spinner from "../Spinner";

const EditContact = ({forceRender,setForceRender}) => {
    const {contactId} = useParams();
    const navigate = useNavigate();



    const [state, setState] = useState({
        loading: false,
        contact: {
            fullname: "",
            photo: "",
            mobile: "",
            email: "",
            job: "",
            group: "",
        },
        groups: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                setState({...state, loading: true});
                const {data: contactData} = await getContact(contactId);
                const {data: groupsData} = await getAllGroups();
                setState({
                    ...state,
                    loading: false,
                    contact: contactData,
                    groups: groupsData,
                });
            } catch (err) {
                console.log(err);
                setState({...state, loading: false});
            }
        };

        fetchData();
    }, []);

    const setContactInfo = (event) => {

        setState({
            ...state,
            contact: {
                ...state.contact,
                [event.target.name]: [event.target.value],

            },
        });
    };

    const submitForm = async (event) => {
        event.preventDefault();
        try {
            setState({...state, loading: true});
            const {data} = await updateContact(state.contact, contactId);
            setState({...state, loading: false});
            if (data) {
                setForceRender(!forceRender)
                navigate("/contacts");
            }
        } catch (err) {
            console.log(err);
            setState({...state, loading: false});
        }
    };

    const {loading, contact, groups} = state;


    return (
        <>
            {loading ? (
                <Spinner/>
            ) : (
                <>
                    <section className="p-3">
                        <div className="container">
                            <div className="row my-2">
                                <div className="col text-center">
                                    <p className="h4 fw-bold" style={{color: ORANGE}}>
                                        Edit contact
                                    </p>
                                </div>
                            </div>
                            <hr style={{backgroundColor: ORANGE}}/>
                            <div
                                className="row p-2 w-75 mx-auto align-items-center"
                                style={{backgroundColor: "#44475a", borderRadius: "1em"}}
                            >
                                <div className="col-md-8">
                                    <form onSubmit={submitForm}>
                                        <div className="mb-2">
                                            <input
                                                name="fullname"
                                                type="text"
                                                className="form-control"
                                                value={contact.fullname}
                                                onChange={setContactInfo}
                                                required={true}
                                                placeholder="Name and lastname"
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
                                                placeholder="Photo addres"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                name="mobile"
                                                type="number"
                                                className="form-control"
                                                value={contact.mobile}
                                                onChange={setContactInfo}
                                                required={true}
                                                placeholder="Mobile number"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                name="email"
                                                type="email"
                                                className="form-control"
                                                value={contact.email}
                                                onChange={setContactInfo}
                                                required={true}
                                                placeholder="Email addres"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                name="job"
                                                type="text"
                                                className="form-control"
                                                value={contact.job}
                                                onChange={setContactInfo}
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

                                                <option  value="">Select group</option>
                                                {groups.length > 0 &&
                                                    groups.map((group) => (
                                                        <option key={group.id} value={group.id}>
                                                            {group.name}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="submit"
                                                className="btn"
                                                style={{backgroundColor: PURPLE}}
                                                value="Edit contact"
                                            />
                                            <Link
                                                to={"/contacts"}
                                                className="btn mx-2"
                                                style={{backgroundColor: COMMENT}}
                                            >
                                                Cancel
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-4">
                                    <img
                                        src={contact.photo}
                                        className="img-fluid rounded"
                                        style={{border: `1px solid ${PURPLE}`}}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-1">
                            <img
                                src={require("../../assets/man-taking-note.png")}
                                height="300px"
                                style={{opacity: "60%"}}
                            />
                        </div>
                    </section>
                </>
            )}
        </>
    );
};

export default EditContact;