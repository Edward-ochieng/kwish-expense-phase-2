import React, { Fragment } from 'react';
import CenterDiv from './CenterDiv';
import InputModal from './InputModal';

const AddExpensePage = ({ modalShow, isAddLoading, addExpenseHandler, setModalShow, updatingFormHandler }) => {
  return (
    <Fragment>
        <CenterDiv>
            <InputModal isAddLoading={isAddLoading} addExpenseHandler={addExpenseHandler} updatingFormHandler={updatingFormHandler} show={modalShow} onHide={() => setModalShow(false)}></InputModal>
        </CenterDiv>
    </Fragment>
  )
}

export default AddExpensePage