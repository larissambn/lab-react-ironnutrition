import './App.css';
import Foods from './foods.json';
import { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import Foodlist from './FoodList';
import FoodBox from '../FoodBox';
import ListofFoodBox from '..';
import AddFood from './components/AddFood';
import Search from '../Search.';
import DeleteButton from '../src/components/DeleteButton';
import AddFoodForm from '../src/components/AddFoodForm';
import HideForm from '../src/components/HideForm';
import FeedBack from '../src/components/FeedBack';

function App() {
  return (
    <div>
      <Foods />
      <Card />
      <Foodlist />
      <Col />
      <FoodBox />
      <Row />
      <ListofFoodBox />
      <AddFood />
      <Search />
      <DeleteButton />
      <Divider />
      <Input />
      <AddFoodForm />
      <Button />
      <HideForm />
      <FeedBack />
    </div>
  );
}

export default App;
