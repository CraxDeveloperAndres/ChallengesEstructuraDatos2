import { memo } from 'react';

const CategoryList = memo(({ categories, onShowNumber }) => {
  return (
    <div className="category-list">
      <h2>Categories</h2>
      {categories.length === 0 && <p>No categories yet.</p>}
      {categories.map((cat, index) => (
        <button
          key={index}
          onClick={() => onShowNumber(index + 1)}
          className="category-btn"
        >
          {cat}
        </button>
      ))}
    </div>
  );
});

export default CategoryList;
