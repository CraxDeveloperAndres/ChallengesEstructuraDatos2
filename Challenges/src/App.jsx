import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LinkedListPage from './pages/LinkedListPage';
import DoublyLinkedListPage from './pages/DoublyLinkedListPage';

const App = () => {
  return (
    <Router>
      <nav style={{ textAlign: 'center', margin: '20px' }}>
        <Link to="/linked" style={{ marginRight: '20px' }}>🎵 Linked List</Link>
        <Link to="/doubly">🧭 Doubly Linked List</Link>
      </nav>

      <Routes>
        <Route path="/linked" element={<LinkedListPage />} />
        <Route path="/doubly" element={<DoublyLinkedListPage />} />
        <Route path="*" element={<div style={{ textAlign: 'center' }}>Select a page</div>} />
      </Routes>
    </Router>
  );
};

export default App;
