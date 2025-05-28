import React from 'react';
import logo from '../assets/header.jpeg';


const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="DishChallenge logo" className="h-20 w-auto" />
      </div>
      <div className="space-x-4">
        <button className="text-sm text-gray-700">ログイン</button>
        <button className="text-sm text-gray-700">新規登録</button>
      </div>
    </header>
  );
};

export default Header;