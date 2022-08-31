import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import Search from '../style-guide/Search.example';
import AddFoodForm from '..';

function App() {
  {
    return (
      <div>
        <Row>
          <Col>
            <Divider>Fancy Input</Divider>
            <Input value={''} onChange={() => {}} />
            <Search />
          </Col>
          <Divider>Foods list</Divider>
          <div className="Food list">
            <p> FOOD_NAME_HERE </p>
            <img src="FOOD_IMAGE_HERE" width={0} />
          </div>
          <Row style={{ width: '100%', justifyContent: 'center' }}></Row>
          <Col>
            <Card
              title={'FOOD_NAME_HERE'}
              style={{ width: 230, height: 300, margin: 10 }}
            >
              <img src={'FOOD_IMAGE_HERE'} height={60} alt="food" />
              <p>Calories: FOOD_CALORIES_HERE</p>
              <p>Servings: FOOD_SERVINGS_HERE</p>
              <p>
                <b>Total Calories: FOOD_CALORIES * FOOD_SERVINGS </b> kcal
              </p>
              <Button type="primary"> Delete </Button>
            </Card>
          </Col>
          <form>
            <Divider>Add Food Entry</Divider>
            <label>Name</label>
            <Input value={undefined} type="text" onChange={() => {}} />
            <label>Image</label>
            <label>Calories</label>
            <label>Servings</label>
            <button type="submit">Create</button>
          </form>
          <Col>
            <Card title={'Fancy Card'}>
              <Button onClick={() => {}}>Fancy Button</Button>
            </Card>
          </Col>
          <Button> Hide Form / Add New Food </Button>
        </Row>
      </div>
    );
  }
}
export default App;
