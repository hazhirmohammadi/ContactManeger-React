/*Components*/
import {
    Contact,
    ViewContact,
    Navbar,
    Contacts,
    SearchContact,
    spinner,
    EditContact,
    AddContact
} from "./components"
/*Hocks*/
import {useState} from "react";

/*Css*/
import './App.css';

const App = () => {
    const [getContacts, setContact] = useState([]);
    const [loading, setLoading] = useState(false);

    return (
        <div className="App">
            <Navbar/>
            <Contacts contacts={getContacts} loading={loading}/>

        </div>
    );
}


export default App;
