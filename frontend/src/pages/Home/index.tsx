import React, { useEffect, useState } from 'react';
import RecipeCard from '../../components/RecipeCard.tsx';
import Theme from './ThemeIndex.tsx';


const Home = () => {
  const [themeTitle, setThemeTitle] = useState('');

  useEffect(() => {
    // APIから今週のお題を取得
    fetch('http://localhost:3000/api/v1/themes/published')
      .then((res) => res.json())
      .then((data) => {
        if (data.title) {
          setThemeTitle(data.title);
        }
      })
      .catch((err) => console.error('Error fetching theme:', err));
  }, []);

  const recipes = [
    {
      image: 'orange.jpg',
      title: 'タイトル',
      description: '簡単な説明',
      username: 'ユーザー名',
      likes: 12,
    },
    // 他のレシピデータ…
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* お題コンポーネント */}
      <Theme title={themeTitle} />


      {/* レシピ一覧 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe, i) => (
          <RecipeCard  {...recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
