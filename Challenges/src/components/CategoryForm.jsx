const CategoryForm = ({ category, onChange, onAdd }) => {
    return (
      <div className="form">
        <input
          type="text"
          placeholder="Enter category"
          value={category}
          onChange={onChange}
        />
        <button onClick={onAdd}>Add Category</button>
      </div>
    );
  };
  
  export default CategoryForm;
  