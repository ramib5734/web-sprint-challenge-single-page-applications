import React, {useState, useEffect} from "react";
import {Link, Route } from "react-router-dom";
import PizzaForm from "./PizzaForm";
import pizzaVerify from "./Pizza";
import axios from 'axios';
import * as yup from 'yup';
import Orders from './Orders'

const initialFormValue = {
  'name-input': '',
  'size-dropdown': null,
  pepperoni: false,
  mushroom: false,
  onion: false,
  chicken: false,
  'special-text': '',
}

const initialErrors = {
  name: '',
  size: ''
}

const initialOrders = [];
const initialDisable = true;

const App = () => {
  const [order, setOrders] = useState(initialOrders)
  const [formValue, setFormValue] = useState(initialFormValue)
  const [disabled, setDisabled] = useState(initialDisable)
  const [formErrors, setFormErrors] = useState(initialErrors)

  const createOrder = (newOrder) => {
    axios.post('https://reqres.in/api/orders', newOrder)
    .then(resp =>{
      setOrders([resp.data, ...order]);
    }).catch (err => console.error(err))
    .finally(()=> {
      setFormValue(initialFormValue)
    })
  }

  const validateForm = (name,value) => {
    yup.reach(pizzaVerify, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({...formErrors,[name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validateForm(name, value);
    setFormValue({
      ...formValue,
      [name]: value
    })
  }

  const submitForm = () => {
    const newOrder = {
      'name-input': formValue['name-input'].trim(),
      'size-dropdown': formValue['size-dropdown'],
      'special-text': formValue['special-text'],
      toppings: [
        'pepperoni',
        'mushroom',
        'onion',
        'chicken'
      ]
      .filter(topping => !!formValue[topping])
    }
    createOrder(newOrder);
  }

  useEffect(() => {
    pizzaVerify.isValid(formValue).then(valid => setDisabled(!valid))
  }, [formValue])

  // const updateForm = (inputPizza, inputValue) => {
  //   setFormValues({...formValues, [inputPizza]: inputValue});
  // }
  return (
    <>
    <header>
      <h1>Lambda Eats</h1>
    </header>
      <nav>
        <Route exact path ='/'>
          <Link to={`/pizza`}>
            <button id='order-pizza'>Order Now!</button>
          </Link>
        </Route>
      </nav>
      <div>
        <Route path='/pizza'>
          <PizzaForm
            disabled = {disabled}
            change = {inputChange}
            submit = {submitForm}
            values = {formValue}
            errors = {formErrors}
            />
        </Route>
      </div>
      <div>
        <Orders order = {order} />
      </div>
    </>
  );
};
export default App;
