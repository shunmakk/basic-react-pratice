import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StateForm from './Components/StateForm';
import StateFormUC from './Components/StateFormUC';
import FormTextarea from './Components/FormTextarea';
import FormSelect from './Components/FormSelect';
import FormList from './Components/FormList';
import FormRadio from './Components/FormRadio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <React.StrictMode>
    <App />
    <StateForm/>
    <StateFormUC/>
    <FormTextarea/>
    <FormSelect/>
    <FormList/>
    <FormRadio/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
