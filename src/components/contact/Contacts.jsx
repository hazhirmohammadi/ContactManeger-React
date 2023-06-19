import Contact from "./Contact";
import {CURRENTLINE, ORANGE, PINK} from '../../helpers/Color'
import Spinner from "../spinner";

const Contacts = ({contacts, loading}) => {
    return (
        <>
            <section className="container">
                <div className="grid">
                    <div className="row">
                        <div className="col">
                            <p className="h3">
                                <button
                                    className="btn mx-2"
                                    style={{backgroundColor: PINK}}>
                                    Create new contact
                                    <i className="fa fa-plus-circle mx-2"></i>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {
                loading ? <Spinner/> : (<section className="container">
                        <div className="row">
                            {
                                contacts.length > 0 ? contacts.map(c => (
                                    <Contact key={c.id} contact={c}/>
                                )) : (
                                    <div className="text-center py-5" style={{backgroundColor: CURRENTLINE}}>
                                        <p className="h3" style={{color: ORANGE}}>
                                            Contact not Found🔎...
                                        </p>
                                        <img
                                            src={require("../../assets/no-found1.gif")}
                                            alt="NotFound"
                                            className="w-25"
                                        />

                                    </div>
                                )
                            }:

                        </div>
                    </section>)
            }

        </>


    )
}
export default Contacts