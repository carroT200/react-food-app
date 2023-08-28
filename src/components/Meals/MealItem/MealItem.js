import { useContext } from 'react';

import MealItemForm from './MealItemFrom';
import CartContext from '../../../store/cart-context';

import classes from './MealItem.module.css';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div className={classes.list}>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <p className={classes.price}>{price}</p>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
