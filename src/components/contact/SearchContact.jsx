import {PURPLE} from '../../helpers/Color'
const SearchContact = ({query,search}) => {
    return (
        <div className="input-group mx-2 w-75">
                            <span
                                className="input-group-text"
                                id="basic-addon"
                                style={{backgroundColor: PURPLE}}
                            >
                                <i className="fa fa-search"></i>
                            </span>
            <input
                value={query.text}
                onChange={search}
                type="text"
                style={{ borderColor: PURPLE}}
                placeholder="Search contact"
                aria-label="Search"
                aria-describedby="basic-addon"
            />
        </div>
    )
}
export default SearchContact;