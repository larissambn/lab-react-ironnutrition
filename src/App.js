import './App.css';
import Foods from './foods.json';
import { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import Foodlist from './FoodList';
import FoodBox from '../FoodBox';
import ListofFoodBox from '..';
import AddFood from './components/AddFood';
import Search from '../Search.';
import DeleteButton from '..';
import AddFoodForm from '..';

function App() {
  return (
    <div>
      <Foodlist />
      <FoodBox />
      <ListofFoodBox />
      <AddFood />
      <Search />
      <DeleteButton />
      <AddFoodForm />
    </div>
  );
}

export default App;
