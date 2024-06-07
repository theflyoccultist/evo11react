import React, { useState } from 'react';
import './Grid.css';

const Grid = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Exfoliate Face', checked: false },
    { id: 2, text: 'Hydrate Face', checked: false },
    { id: 3, text: 'Voice Training', checked: false },
    { id: 4, text: 'Makeup', checked: false },
    { id: 5, text: 'Solar Cream', checked: false },
    { id: 6, text: 'Perfume', checked: false }
  ]);

  const handleCheck = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const handleAddItem = () => {
    const newItem = { id: Date.now(), text: `Item ${items.length + 1}`, checked: false };
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleEditItem = (id, newText) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, text: newText } : item
    ));
  };

  return (
    <div className="grid-wrapper">
      <h2 className="grid-title">Morning Routine</h2>
      <div className="grid-container">
        {items.map((item) => (
          <div key={item.id} className="grid-item">
            <input
              type="checkbox"
              id={`item-${item.id}`}
              checked={item.checked}
              onChange={() => handleCheck(item.id)}
            />
            <input
              type="text"
              value={item.text}
              onChange={(e) => handleEditItem(item.id, e.target.value)}
            />
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <button className="add-button" onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default Grid;