import React from 'react'

const SearchInput = ({ enterSearchHandler }) => {
  return (
    <div className='search-container'>
        <input onChange={enterSearchHandler} type='text' placeholder='Enter search term'></input>
    </div>
  )
}

export default SearchInput;