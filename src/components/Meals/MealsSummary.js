import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h1>Food delivered to You!</h1>
      <p>
        Choose your favorite meal from our menu section and enjoy a delicious
        lunch or dinner at home
      </p>
      <p>All meals are cooked with quality ingredients from our best chefs</p>
    </section>
  );
};

export default MealsSummary;
