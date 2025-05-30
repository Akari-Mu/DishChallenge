import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext.tsx';
import { Link } from 'react-router-dom';

type ThemeProps = {
  title: string;
};

function Theme({ title }: ThemeProps) {
  const { user } = useAuth();
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    if (!user) return;

    const updateTimeLeft = () => {
      const now = new Date();
      const today = now.getDay(); // 0:日曜日, 6:土曜日

      // 日曜24時＝月曜0時（次の週の始まり）
      const nextSundayMidnight = new Date(now);
      nextSundayMidnight.setDate(now.getDate() + ((7 - today) % 7));
      nextSundayMidnight.setHours(24, 0, 0, 0); // 24時は technically 月曜0時

      const diffMs = nextSundayMidnight.getTime() - now.getTime();

      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      setTimeLeft(`残り ${diffDays}日 ${diffHours}時間`);
    };

    updateTimeLeft();
    const timer = setInterval(updateTimeLeft, 60000); // 1分ごとに更新
    return () => clearInterval(timer);
  }, [user]);

  return (
    <div>
      {user ? (
        <div className="mt-20 mb-20">
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">今週のお題</h2>
          <p className="text-3xl font-semibold text-center text-gray-800">{title}</p>
          <div className="flex items-center justify-end mt-4">
            <p className="text-red-500 text-xl font-bold mr-8">{timeLeft}</p>
            <Link
              to="/PostForm"
              className="px-7 py-3 text-white bg-orange-500 rounded hover:bg-orange-700 transition"
            >
              投稿する
            </Link>
          </div>
        </div>
      ) : (
        <div className="mt-20 mb-20">
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">今週のお題</h2>
          <p className="text-3xl font-semibold text-center text-gray-800">{title}</p>
        </div>
      )}
    </div>
  );
}

export default Theme;
