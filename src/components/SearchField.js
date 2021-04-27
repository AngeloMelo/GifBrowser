import React from 'react'

const SearchField = ({onClick, inputRef}) => {
    return (
        <div className="searchContainer" >
            
            <div className="inputContainer">
                <input 
                    type="text" 
                    ref={inputRef} 
                    placeholder="Search gifs by a term" 
                />
            </div>
            <button onClick={onClick}>Search</button>
        </div>
    )
}

export default SearchField
