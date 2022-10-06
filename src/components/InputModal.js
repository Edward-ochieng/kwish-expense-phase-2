import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CenterDiv from './CenterDiv';
import Loading from './Loading';
import PaddingDiv from './PaddingDiv';

function InputModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Enter your Expense
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Name</h4>
        <input onChange={props.updatingFormHandler} placeholder='Name' name='name' type='text' className='inputs'></input>
        <PaddingDiv></PaddingDiv>
        <h4>Description</h4>
        <input onChange={props.updatingFormHandler} placeholder='Description' name='description' type='text' className='inputs'></input>
        <PaddingDiv></PaddingDiv>
        <h4>Price</h4>
        <input onChange={props.updatingFormHandler} placeholder='Price' name='price' type='number' className='inputs'></input>
        <PaddingDiv></PaddingDiv>
        <CenterDiv>
          { props.isAddLoading ? <Loading></Loading> : <Button onClick={props.addExpenseHandler}>Add Expense</Button>}
        </CenterDiv>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default InputModal;