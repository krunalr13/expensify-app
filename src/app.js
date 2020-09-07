import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description : 'Water Bill', createdAt : 1000, amount: 5000 }));
store.dispatch(addExpense({ description : 'Gas Bill', createdAt : 2000, amount : 700}));
store.dispatch(addExpense({ description : 'Rent', createdAt : 3000}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store = {store}>
    <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));