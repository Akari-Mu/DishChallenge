import React from 'react';
import logo from '../assets/header.jpeg';
import { Link, useNavigate } from 'react-router-dom'; 
import { useAuth } from '../contexts/AuthContext.tsx';

const Header = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/v1/logout', {
        method: 'DELETE',
        credentials: 'include',
      });
      if (res.ok) {
        setUser(null);
        navigate('/');
      }
    } catch (err) {
      console.error('ログアウト失敗', err);
    }
  };

  return (
    <header className="flex justify-between items-center p-4 border-t-[10px] border-b border-t-orange-400 border-b-gray-800">
      <div className="flex items-center space-x-2 ml-40">
        <img src={logo} alt="DishChallenge logo" className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto" />
      </div>
      <div className="space-x-20 mr-40">
        {console.log(user)}
        {user ? (
          <>
            <span className="text-xl font-semibold text-gray-800">こんにちは、{user.name}さん</span>
            <button
              onClick={handleLogout}
              className="text-2xl font-bold text-gray-800 hover:text-orange-500"
            >
              ログアウト
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-2xl font-bold text-gray-800 hover:text-orange-500">
              ログイン
            </Link>
            <Link to="/new" className="text-2xl font-bold text-gray-800">
              新規作成
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
