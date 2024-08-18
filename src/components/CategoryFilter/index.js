// CategoryFilter.jsx
import React from "react";
import { StyledCategoryFilter } from "./style";

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <StyledCategoryFilter>
      <div className="category-filter">
        <label htmlFor="category-select">Filter by Category:</label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="">All</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </StyledCategoryFilter>
  );
};

export default CategoryFilter;
