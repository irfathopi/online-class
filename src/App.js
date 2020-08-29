import React from 'react';
import './App.css';
import Courses from './components/courses/Courses';
import Cart from './components/cart/Cart';

 

function App() {
  
  
    const addHandle = (price) => {
      console.log( price)};

  return (
    <div className="App" >
      
          <div>
          <h2 className = 'd-flex justify-content-center'>Start our online class</h2>
          <Courses name={'Graphic Design'} instructor = {'Md.Rassel'} price = {'2500'} addHandle = {addHandle}></Courses>
          <Courses name={'Learning React'} instructor = {'Md.Rassel'} price = {'5000'} addHandle = {addHandle}></Courses>
          <Courses name={'Learning Php'} instructor = {'Md.Rassel'} price = {'3000'} addHandle = {addHandle}></Courses>
          <Courses name={'Learning Paython'} instructor = {'Md.Rassel'} price = {'2300'} addHandle = {addHandle}></Courses>
          <Courses name={'Learning C++'} instructor = {'Md.Rassel'} price = {'3000'} addHandle = {addHandle}></Courses>
          <Courses name={'Complete Web development'} instructor = {'Md.Rassel'} price = {'2500'} addHandle = {addHandle}></Courses>
          <Courses name={'Cooking food'} instructor = {'Md.Rassel'} price = {'6000'} addHandle = {addHandle}></Courses>
          <Courses name={'How to on your computer'} instructor = {'Md.Rassel'} price = {'5800'} addHandle = {addHandle}></Courses>
          <Courses name={'Build online shop'} instructor = {'Md.Rassel'} price = {'4500'} addHandle = {addHandle}></Courses>
          <Courses name={'Build a website'} instructor = {'Md.Rassel'} price = {'8000'} addHandle = {addHandle}></Courses>
          <Courses name={'Logo making'} instructor = {'Md.Rassel'} price = {'6000'} addHandle = {addHandle}></Courses>
          <Courses name={'Hacking'} instructor = {'Md.Rassel'} price = {'10000'} addHandle = {addHandle}></Courses>
          <Courses name={'ES6 learning'} instructor = {'Md.Rassel'} price = {'6000'} addHandle = {addHandle}></Courses>
          <Courses name={'How to cook food'} instructor = {'Md.Rassel'} price = {'2500'} addHandle = {addHandle}></Courses>
          <Courses name={'How to sleep'} instructor = {'Md.Rassel'} price = {'25000'} addHandle = {addHandle}></Courses>
          </div>
          <div>
            <h3> course :  </h3>
          </div>
          <div>
            <Cart>
              total amount of money : {console.log('price')}
            </Cart>
          </div>
          
          
        
    </div>

    
  );
}              
export default App;
