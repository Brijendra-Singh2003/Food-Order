import classes from './items.module.css'
import { useEffect, useState } from 'react';

function Items({items, addItem}) {

    const [quantity, setQuantity] = useState([]);

    useEffect(()=>{
        setQuantity(()=>{
            return items.map((item)=>{
                return {...item, quantity: 1};
            })
        })
    }, [items])

    function handleChange(value, id) {
        if (value > 0)
        setQuantity( prevQuantity =>
            prevQuantity.map( item =>
                (item.id === id) ? {...item, quantity: value} : item )
        )
    }

    return (
        <ul className={classes.main}>
            {quantity.map((item)=>{
                return (
                    <li key={item.id}>
                        <h3 className={classes.name}> <b>{item.name}</b> <br /><i>${item.prize}</i></h3>
                        <div className={classes.button}>
                            <h3>Amount:
                                <input
                                    type="number"
                                    onChange={(e)=>{
                                        handleChange(e.target.value, item.id)}
                                    }
                                    value={item.quantity} />
                            </h3>
                            <br />
                            <button onClick={()=>{addItem(item.id, Number.parseInt(item.quantity))}}>Add</button>
                        </div>
                    </li>
                );
            })}
        </ul>
    )
}

export default Items;