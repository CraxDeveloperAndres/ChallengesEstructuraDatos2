import { useState, useCallback } from 'react';
import './App.css';
import CategoryForm from './components/CategoryForm';
import CategoryList from './components/CategoryList';

function App() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');

  const handleInputChange = (e) => setCategory(e.target.value);

  const handleAddCategory = () => {
    if (!category.trim()) return;
    setCategories([...categories, category]);
    setCategory('');
  };

  const handleShowNumber = useCallback((n) => {
    alert(`Número: ${n}`);
  }, []);

  return (
    <div className="container">
      <h1>Dashboard de categorias</h1>
      <CategoryForm
        category={category}
        onChange={handleInputChange}
        onAdd={handleAddCategory}
      />
      <CategoryList categories={categories} onShowNumber={handleShowNumber} />
    </div>
  );
}

export default App;
