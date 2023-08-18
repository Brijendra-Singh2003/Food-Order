import classes from './Cart.module.css'
import Items from '../items/Items'
import { useState, useEffect } from 'react';

export default function Cart({items, setIsActive, removeItem}) {

    const [quantity, setQuantity] = useState(items.filter(({inCart}) => inCart));
    let total = 0;

    function remove(id, event) {
        setQuantity(prevQ => prevQ.filter(item => item.id !== id));
    }

    return (
        <>
            <div className={classes.backdrop} onClick={()=>{setIsActive(false)}}></div>
            <ul className={classes.main}>
            {quantity.map((item)=>{
                total = total + item.prize*item.amount;
                return (
                    <li key={item.id}>
                        <div className={classes.name}> <b>{item.name}</b> <br />
                        <h3>Quantity: {item.amount}</h3>
                            <br />
                            <button className={classes.button} onClick={(event)=>{removeItem(item.id);remove(item.id, event)}}>Remove</button>
                        </div>
                        <div className={classes.cost}>
                            <i>${item.prize} X {item.amount}</i>
                            <i style={{color: 'green'}}>${item.prize * item.amount}</i>
                        </div>
                    </li>
                );
            })}
                <li>
                    {quantity.length !== 0 ? <>
                        <h1>Total</h1>
                        <h1>{total}</h1>
                    <div>
                        <button className={classes.close} onClick={()=>{setIsActive(false)}}>close</button>
                        <button className={classes.open} onClick={()=>{setIsActive(false)}}>order</button>
                    </div>
                    </> : <h1>Cart Empty</h1>
                    }
                </li>
            </ul>
        </>
    )
}