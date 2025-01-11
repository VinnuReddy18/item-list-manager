import React, { useState } from 'react';
import './ItemListManager.css';

function ItemListManager() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue.trim()]);
      setInputValue('');
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addItem();
    }
  };
  return (
    <div className="item-list-container">
      <h1 className="item-list-title">Item List Manager</h1>
      <input
        type="text"
        placeholder="Enter an item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp = {handleKeyPress}
        className="item-list-input"
      />
      <button onClick={addItem} className="item-list-button">
        Add Item
      </button>
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index} className="item-list-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListManager;