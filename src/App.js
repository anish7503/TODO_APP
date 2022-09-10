import React, { useState } from 'react'
import './App.css'
import Input from './Components/Input';
import Output from './Components/Output';
import DeleteAll from './Components/DeleteAll';

const App = () => {

  const [Item, setItem] = useState("");
  const [Items, setItems] = useState([]);
  const [nitem, setNItem] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [forEdit, setForEdit] = useState(null);

  const addItems = () => {
    if (Item) {
      if (toggle) {
        setItems(
          Items.map((elem) => {
            if (elem.id === forEdit) {
              return { ...elem, name: Item };
            }
            else return elem;
          })
        )
        setItem("");  
        setToggle(false);
      }
      else {
        if (nitem < 5) {
          setNItem(Items.length);
          const newitem = { id: new Date().getTime().toString(), name: Item }
          setItems([...Items, newitem]);
          setItem("");
        }
        else { alert("Can't add items") }
      }

    }
    else { alert("Please Write Something"); }
  }

  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((elem) => {
        return id !== elem.id;
      })
    })
  };

  const editItem = (id) => {
    const upItem = Items.find((elem) => {
      return elem.id === id;
    })
    console.log(upItem);
    setToggle(true);
    setItem(upItem.name);
    setForEdit(id);
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> Todo List</h1>
          <Input value={Item} isToggle={toggle} onChange={(event) => { setItem(event.target.value); }} onClick={addItems} />
          <Output Items={Items} onSelect={deleteItem} onSelect2={editItem} />
          <DeleteAll onSelect={() => setItems([])} />
        </div>
      </div>
    </>
  )
}

export default App;