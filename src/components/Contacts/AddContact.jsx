import {useContext} from "react";
import {Link} from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from 'formik';

import {contactSchema} from "../../validations/contactValidation";
import {ContactContext} from "../../context/contactContext";
import {Spinner} from "../";
import {COMMENT, GREEN, PURPLE} from "../../helpers/colors";

const AddContact = () => {
    const {loading, groups, createContact} = useContext(ContactContext);

    return (
        <>
            {loading ? (
                <Spinner/>
            ) : (
                <>
                    <section className="p-3">
                        <img
                            alt=""
                            src={require("../../assets/man-taking-note.png")}
                            height="400px"
                            style={{
                                position: "absolute",
                                zIndex: "-1",
                                top: "130px",
                                left: "100px",
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
                                        Create a new audience
                                    </p>
                                </div>
                            </div>
                            <hr style={{backgroundColor: GREEN}}/>
                            <div className="row mt-5">
                                <div className="col-md-4">
                                    <Formik
                                        initialValues={{
                                            fullname: "",
                                            photo: "",
                                            mobile: "",
                                            email: "",
                                            job: "",
                                            group: ""
                                        }}
                                        validationSchema={contactSchema}
                                        onSubmit={(values) => {
                                            createContact(values)
                                        }}
                                    >
                                        <Form>
                                            <div className="mb-2">
                                                <Field
                                                    name="fullname"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="name & last name"
                                                />
                                                <ErrorMessage
                                                    name="fullname"
                                                    render={(msg) => (
                                                        <div className="text-danger">{msg}</div>)}/>
                                            </div>
                                            <div className="mb-2">
                                                <Field
                                                    name="photo"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Image address"/>
                                                <ErrorMessage
                                                    name="fullname"
                                                    render={(msg) => (
                                                        <div className="text-danger">{msg}</div>)}/>
                                            </div>
                                            <div className="mb-2">
                                                <Field
                                                    name="mobile"
                                                    type="number"
                                                    className="form-control"
                                                   placeholder="phone number"/>
                                                <ErrorMessage
                                                    name="mobile"
                                                    render={(msg) => (
                                                        <div className="text-danger">{msg}</div>
                                                    )}/>
                                            </div>
                                            <div className="mb-2">
                                                <Field
                                                    name="email"
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="E-mail"
                                                />
                                                <ErrorMessage
                                                    name="email"
                                                    render={(msg) => (
                                                        <div className="text-danger">{msg}</div>
                                                    )}/>
                                            </div>
                                            <div className="mb-2">
                                                <Field
                                                    name="job"
                                                    type="text"
                                                    className="form-control"
                                                    required={true}
                                                    placeholder="job"
                                                />
                                                <ErrorMessage
                                                    name="job"
                                                    render={(msg) => (
                                                        <div className="text-danger">{msg}</div>
                                                    )}/>
                                            </div>
                                            <div className="mb-2">
                                                <Field as="select"
                                                    name="group"
                                                    className="form-control"
                                                >
                                                    <option value="">Select group</option>
                                                    {groups.length > 0 &&
                                                        groups.map((group) => (
                                                            <option key={group.id} value={group.id}>
                                                                {group.name}
                                                            </option>
                                                        ))}
                                                </Field>
                                            {/*</div>*/}
                                            {/*<div className="mx-2">*/}
                                                <ErrorMessage
                                                    name="fullname"
                                                    render={(msg) => (
                                                        <div className="text-danger">{msg}</div>
                                                    )}/>
                                                <input
                                                    type="submit"
                                                    className="btn"
                                                    style={{backgroundColor: PURPLE}}
                                                    value="Build an audience"
                                                />
                                                <Link
                                                    to={"/contacts"}
                                                    className="btn mx-2"
                                                    style={{backgroundColor: COMMENT}}
                                                >
                                                    cancel
                                                </Link>
                                            </div>
                                        </Form>
                                    </Formik>

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
