import React, {useState} from "react";

function SearchName (props) {
    const [nameSearch, setNameSearch] = useState("")

    const handleChange = event => {
        console.log('Handling name entry', event.target.value);
        const name =  event.target.value
        setNameSearch(name)
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log('Name search submitted');
        props.handleSubmit(nameSearch);
        setNameSearch('')
    };

    return (
        <div className="name-search-div">
            <form onSubmit={handleSubmit}>
              <input
                className='search-input'
                id='name-search-input'
                type='text'
                value={nameSearch}
                onChange={handleChange}
              />
              <input
                className='search-input'
                type='submit'
                value='Search by Name'
              />
            </form>
        </div>
    )
}

export default SearchName;

