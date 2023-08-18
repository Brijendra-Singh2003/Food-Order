import classes from './Summary.module.css'
import mealImg from "../../assets/quality-meals.jpg"

export default function Summary() {
    return (
        <>
        <div className={classes['main-img']}>
            <img src={mealImg} alt="maels on a table" />
        </div>
        <div className={classes.main}>
            <h1>Delicious Food,  Delivered To You</h1>
            <h3>Choose your favourite meal from our board section available meals and enjoy a delicious lunch or dinner at home.</h3>
            <h3>All our meals are coocked with high-quality ingredients, just-in-time and of corse by experienced chefs!</h3>
        </div>
        </>
    );
}