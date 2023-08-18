import classes from "./header.module.css"
import Cart from "../Cart/Cart";
import { useState, useEffect } from "react";

const Header = ({items, removeItem}) => {

    let noOfItems = 0;
    const [isActive, setIsActive] = useState(false);
    const [btnClass, setBtnClass] = useState('')

    useEffect(()=>{
        setBtnClass(classes.big);
        setTimeout(() => {
            setBtnClass('');
        }, 200);
    }, [items])

    for(let i=0; i<items.length; i++) {
        noOfItems += items[i].amount;
    }

    function display() {
        setIsActive(true);
    }

    return (
        <>
            <header className={classes.header} >
                <h1>MyMeals</h1>
                <button onClick={display} className={classes.cartButton + ' ' + btnClass}><pre>&#128722;</pre> Cart { (noOfItems!==0) && <span>{noOfItems}</span>}</button>
            </header>
            {isActive && <Cart items={items} setIsActive={setIsActive} removeItem={removeItem} />}
        </>
    )
}

export default Header;