import React, { Fragment } from 'react'
import CenterDiv from './CenterDiv'
import Expenses from './Expenses'
import Loading from './Loading'

const HomePage = ({ isGetLoading, expenses, setModalShow }) => {
  return (
    <Fragment>
        {isGetLoading && <CenterDiv><Loading></Loading></CenterDiv>}
        {!isGetLoading && <Expenses expenses={expenses} onShow={() => setModalShow(true)}></Expenses>}
    </Fragment>
  )
}

export default HomePage