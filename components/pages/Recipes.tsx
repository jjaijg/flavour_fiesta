import React from 'react';
import FoodImage from '../ui/FoodImage';

const Recipes = () => {
  const arr = [1, 2, 3, 5, 6, 8, 9, 2, 7, 9, 3, 1];
  return (
    <>
      <h2 className="grid place-items-center font-extrabold text-3xl mt-2">
        Recipes
      </h2>
      <div className="flex flex-wrap gap-8">
        {arr.map((e, i) => {
          return <FoodImage key={i} />;
        })}
      </div>
    </>
  );
};

export default Recipes;
