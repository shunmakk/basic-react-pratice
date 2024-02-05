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
import FormCheck from './Components/FormCheck';
import FormCheckMulti from './Components/FormCheckMulti';
import FormFile from './Components/FormFile';
import StateNest from './Components/StateNest';
import StateNestImmer from './Components/StateNestImmer';
import StateTodo from './Components/StateTodo';
import FormBasic from './Components/FormBasic';
import FormYup from './Components/FormYup';
import LazyBasic from './Components/LazyBasic';
import LazyMulti from './Components/LazyMulti';
import SuspenceSimple from './Components/SuspenceSimple';
import SuspenceResult from './Components/SuspenceResult';
import StyledBasic from './Components/StyledBasic';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <React.StrictMode>
    <App />
    {/* フォームの更新 */}
    <StateForm/>
    <StateFormUC/>
    <FormTextarea/>
    <FormSelect/>
    <FormList/>
    <FormRadio/>
    <FormCheck/>
    <FormCheckMulti/>
    <FormFile/>
    <StateNest/>
    <StateNestImmer/>
    {/* ⭐️配列の更新 */}
    <StateTodo/>
     {/* ⭐️React Hook Form */}
     <FormBasic/>
     <FormYup/>
      {/* 組み込みコンポーネント */}
      <LazyBasic/>
      <br/>
      <LazyMulti/>
      <SuspenceSimple/>
      <SuspenceResult/>

      <StyledBasic/>
     
      

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
