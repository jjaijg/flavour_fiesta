import Image from 'next/image';
import React from 'react';

const FoodImage = () => {
  return (
    <div className="m-8">
      <Image
        src="https://images.pexels.com/photos/7593253/pexels-photo-7593253.jpeg"
        width={90}
        height={130}
        className="w-40 h-40 rounded-full object-cover"
        alt="Picture of recipies"
      />
    </div>
  );
};

export default FoodImage;
