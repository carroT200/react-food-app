import MealsSummary from './MealsSummary';
import AvalibleMeals from './AvalibleMeals';
import { Fragment } from 'react';

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvalibleMeals />
    </Fragment>
  );
};

export default Meals;
