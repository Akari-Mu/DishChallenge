import React from 'react';
import RecipeCard from '../../components/RecipeCard.tsx';

const Home = () => {
  const recipes = [
    {
      image: 'orange.jpg',
      title: 'タイトル',
      description: '簡単な説明',
      username: 'ユーザー名',
      likes: 12,
    },
    // 追加のレシピデータ…
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-orange-500 text-xl font-bold mb-2">今週のお題</h2>
      <h1 className="text-2xl font-semibold mb-6">30分でできる料理</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe, i) => (
          <RecipeCard key={i} {...recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
