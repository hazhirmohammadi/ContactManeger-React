import { useContext } from "react";

import { ContactContext } from "../../context/contactContext";
import { PURPLE } from "../../helpers/colors";

const SearchContact = ({ query, search }) => {
  const { contactSearch } = useContext(ContactContext);

  return (
    <div className="input-group mx-2 w-75" >
      <span
        className="input-group-text"
        id="basic-addon1"
        style={{ backgroundColor: PURPLE }}
      >
        <i className="fas fa-search" />
      </span>
      <input
        type="text"
        onChange={(event)=> contactSearch(event.target.value)}
        className="form-control"
        placeholder="Audience search"
        aria-label="Search"
        aria-describedby="basic-addon1"
      />
    </div>
  );
};

export default SearchContact;
