import { useState } from 'react';
import { DoublyLinkedList } from '../lists/DoublyLinkedList';

const pageHistory = new DoublyLinkedList();
['Home', 'Profile', 'Settings', 'About'].forEach(page => pageHistory.add(page));

const DoublyLinkedListPage = () => {
  const [current, setCurrent] = useState(pageHistory.goToStart());

  const handleNext = () => {
    setCurrent(pageHistory.forward());
  };

  const handleBack = () => {
    setCurrent(pageHistory.back());
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>🧭 Browser Navegador (Lista doble)</h2>
      <p>Current Page: <strong>{current}</strong></p>
      <button onClick={handleBack}>⬅️ Back</button>
      <button onClick={handleNext}>➡️ Forward</button>
    </div>
  );
};

export default DoublyLinkedListPage;
