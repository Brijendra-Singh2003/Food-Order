import Header from "./components/Header/Header";
import Summary from "./components/summary/Summary";
import Items from "./components/items/Items"
import { useState } from 'react';

const dumyItems = [
    {
        id: 1,
        name: 'Paratha',
        prize: 49,
        amount: 0,
        inCart: false
    },
    {
        id: 2,
        name: 'Paneer',
        prize: 129,
        amount: 0,
        inCart: false
    },
    {
        id: 3,
        name: 'Roti',
        prize: 14,
        amount: 0,
        inCart: false
    },
    {
        id: 4,
        name: 'Sabji',
        prize: 89,
        amount: 0,
        inCart: false
    }
];

function App() {

  const [items, setItems] = useState(dumyItems);

  function addItem(id, Amount) {
    if (Amount > 0)
    setItems(prevItems => {
        const newItems = prevItems.map( item =>
          (item.id === id) ?
          {...item, amount: (item.amount + Amount), inCart: true} :
          item
        )
        return newItems;
      }
    )
  }

  function removeItem(id) {
    setItems(prevItems => {
        const newItems = prevItems.map( item =>
          (item.id === id) ?
          {...item, amount: 0, inCart: false} :
          item
        )
        return newItems;
      }
    )
  }

  return (
    <>
      <Header items={items} removeItem={removeItem} />
      <Summary />
      <Items items={items} addItem={addItem}/>
    </>
  );
}

export default App;