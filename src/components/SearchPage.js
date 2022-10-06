import React, { Fragment } from 'react'
import Expenses from './Expenses'
import SearchInput from './SearchInput'

const SearchPage = ({ enterSearchHandler, expenses }) => {
  return (
    <Fragment>
        <SearchInput enterSearchHandler={enterSearchHandler}></SearchInput>
        <Expenses expenses={expenses}></Expenses>
    </Fragment>
  )
}

export default SearchPage