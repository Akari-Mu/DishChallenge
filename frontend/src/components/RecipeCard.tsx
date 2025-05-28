import React from 'react';

type RecipeCardProps = {
  image: string;
  title: string;
  description: string;
  username: string;
  likes: number;
};

const RecipeCard = ({
  image,
  title,
  description,
  username,
  likes,
}: RecipeCardProps) => {
  return (
    <div className="rounded-xl border shadow-md p-3 text-center">
      <img src={image} alt={title} className="rounded-md w-full h-40 object-cover" />
      <h3 className="text-orange-500 font-bold mt-2">{title}</h3>
      <p className="text-sm">{description}</p>
      <div className="flex justify-between text-sm text-gray-600 mt-2 px-2">
        <span>{username}</span>
        <span>❤️ {likes}</span>
      </div>
    </div>
  );
};

export default RecipeCard;
