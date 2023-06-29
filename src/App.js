/*Components*/
import {
    Navbar,
    Contacts,
    EditContact,
    AddContact, ViewContact,
} from "./components"
import {confirmAlert} from 'react-confirm-alert'
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import {getAllContacts, getAllGroups, createContact, deleteContact} from "./services/ContactService"
import {useState, useEffect} from "react";
/*Css*/
import './App.css';

import {COMMENT, CURRENTLINE, FOREGROUND, PURPLE, YELLOW} from "./helpers/Color";
import contact from "./components/contact/Contact";


const App = () => {
    const [forceRender, setForceRender] = useState(false)
    const [getContacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [getGroups, setGroups] = useState([]);
    const [getFilteredContacts, setFilteredContacts] = useState([]);
    const [getContact, setContact] = useState({
        fullname: "",
        photo: "",
        mobile: "",
        email: "",
        job: "",
        group: "",
    });
    const [query, setQuery] = useState({text: ""});
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const {data: contactsData} = await getAllContacts();
                const {data: groupsData} = await getAllGroups();

                setContacts(contactsData);
                setGroups(groupsData);
                setFilteredContacts(contactsData);

                setLoading(false);
            } catch (err) {
                console.log(err.message);
                setLoading(false);
            }
        }
        fetchData();
    }, [])
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const {data: contactsData} = await getAllContacts();
                setContacts(contactsData);
                setLoading(false);
            } catch (err) {
                console.log(err.massage);
                setLoading(false);
            }
        }
        fetchData();
    }, [forceRender])
    const createContactForm = async event => {
        event.preventDefault();
        try {
            const {status} = await createContact(getContact);
            if (status === 201) {
                setContact({})
                setForceRender(!forceRender)
                navigate("/contacts")
            }
        } catch (err) {
            console.log(err.message)
        }
    }
    const setContactInfo = (event) => {
        setContact(
            {...getContact, [event.target.name]: event.target.value}
        );
    }

    const confirm = (contactId) => {
        confirmAlert({
            customUI: ({onClose}) => {

                return (
                    <div
                        style={{
                            backgroundColor: CURRENTLINE,
                            border: `1px solid ${PURPLE}`,
                            borderRadius: "16px"
                        }} className="p-4">
                        <h1 style={{color: YELLOW}}>DELETE CONTACT</h1>
                        <p style={{color: FOREGROUND}}>
                            Are you sure you want to delete it?

                        </p>
                        <button className="btn mx-2"
                                onClick={() => {
                                    removeContact(contactId)
                                    onClose();
                                }}
                                style={{backgroundColor: PURPLE}}
                        >
                            I'm sure
                        </button>
                        <button
                            className="btn"
                            onClick={onClose}
                            style={{backgroundColor: COMMENT}}
                        >
                            CANCEL
                        </button>
                    </div>
                )
            }
        })
    }
    const removeContact = async (contactId) => {
        try {
            setLoading(true);
            const response = await deleteContact(contactId);
            if (response) {
                const {data: contactsData} = await getAllContacts();
                setContacts(contactsData);
                setLoading(false);
            }
        } catch (err) {
            console.log(err.message);
            setLoading(false);
        }
    };
    const contactSearch = event => {
        try {
            setQuery({...query, text: event.target.value});
            const allContacts = getContacts.filter((contact) => {
                return contact.fullname.toLowerCase()
                    .includes(event.target.value.toLowerCase())
            })
            setFilteredContacts(allContacts);
            console.log(`it is ${contact.fullName}`)
        } catch (err) {
            console.log(err.message)
        }
    }
    return (
        <div className="App">
            <Navbar query={query} search={contactSearch}/>
            <Routes>
                <Route path="/" element={<Navigate to="/Contacts"/>}/>
                <Route path="/Contacts" element={
                    <Contacts
                        contacts={getFilteredContacts}
                        loading={loading}
                        confirmDelete={confirm}
                    />}/>
                <Route path="/Contacts/add" element={
                    <AddContact

                        loading={loading}
                        contact={getContact}
                        groups={getGroups}
                        setContactInfo={setContactInfo}
                        createContactForm={createContactForm}
                    />}/>
                <Route path="/Contacts/:contactId" element={<ViewContact/>}/>
                <Route
                    path="/Contacts/edit/:contactId"
                    element={<EditContact forceRender={forceRender} setForceRender={setForceRender}/>}
                />
            </Routes>

            {/*<Contacts contacts={getContacts} loading={loading}/>*/}
        </div>
    );
}


export default App;
