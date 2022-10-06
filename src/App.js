import { Fragment, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddExpensePage from './components/AddExpensePage';
import SearchPage from './components/SearchPage';

function App() {

  const [originalExpenses, setOriginalExpenses] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [isGetLoading, setIsGetLoading] = useState(false);
  const [isAddLoading, setIsAddLoading] = useState(false);
  const [modalShow, setModalShow] = useState(true);
  const [formData, setFormData] = useState({ name: "", description: "", price: "" });
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const updatingFormHandler = (event) => {
    setFormData(prevFormData => ({ ...prevFormData, [event.target.name]: event.target.value }));
  }

  useEffect(() => {
    const initialization = async () => {
      try {
        setIsGetLoading(true);
        const response =  await fetch('https://mealstogo-5da8e-default-rtdb.firebaseio.com/expenses.json');
        const responseData = await response.json();
        const array = [];
        if (responseData) {
          for (const key in responseData) {
            const obj = { idNo: responseData[key].idNo, name: responseData[key].name, description: responseData[key].description, price: responseData[key].price };
            array.push(obj);
          }
        }
        setExpenses(array);
        setOriginalExpenses(array);
      } catch (err) {
        console.log(err);
      } finally {
        setIsGetLoading(false);
      }
    }
    initialization();
  }, []);

  useEffect(() => {
    if (searchInput.length > 0){
      setExpenses(prevExpenses => prevExpenses.filter((expense) => expense.name.toLowerCase().includes(searchInput.toLowerCase())));
    } else {
      setExpenses(originalExpenses);
    }
  }, [searchInput, originalExpenses])

  const enterSearchHandler = (event) => {
    setSearchInput(event.target.value);
  }

  const addExpenseHandler =  async () => {
    if (formData.name.length === 0 || formData.description.length === 0 || formData.price.length === 0){
      setIsAddLoading(false);
      return;
    }
    try {
      setIsAddLoading(true);
      const response = await fetch('https://mealstogo-5da8e-default-rtdb.firebaseio.com/expenses.json', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ idNo: expenses.length + 1, name: formData.name, description: formData.description, price: formData.price }) });
      const responseData = await response.json();
      console.log(responseData);
      setExpenses(prevExpenses => [...prevExpenses, { idNo: prevExpenses.length + 1, name: formData.name, description: formData.description, price: formData.price }]);
      navigate('/');
    } catch(err) {
      console.log(err);
    } finally {
      setIsAddLoading(false);
      setModalShow(false);
    }
  }

  return (
    <Fragment>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage isGetLoading={isGetLoading} expenses={expenses} setModalShow={setModalShow} ></HomePage>}></Route>
        <Route path='/add-expense' element={<AddExpensePage setModalShow={setModalShow} modalShow={modalShow} isAddLoading={isAddLoading} addExpenseHandler={addExpenseHandler} updatingFormHandler={updatingFormHandler}></AddExpensePage>}></Route>
        <Route path='/search' element={<SearchPage enterSearchHandler={enterSearchHandler} expenses={expenses}></SearchPage>}></Route>
      </Routes>
      {/* <InputModal isAddLoading={isAddLoading} addExpenseHandler={addExpenseHandler} updatingFormHandler={updatingFormHandler} show={modalShow} onHide={() => setModalShow(false)}></InputModal>
      <SearchInput enterSearchHandler={enterSearchHandler}></SearchInput> */}
    </Fragment>
  );
}

export default App;
