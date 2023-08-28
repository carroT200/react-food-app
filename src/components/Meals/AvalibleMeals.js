import classes from './AvalibleMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
const meals = [
  {
    id: 'a1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 20.99,
  },
  {
    id: 'a2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 15.5,
  },
  {
    id: 'a3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 11.99,
  },
  {
    id: 'a4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 28.99,
  },
];

const AvaliableMeals = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {meals.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              price={meal.price}
              description={meal.description}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvaliableMeals;
