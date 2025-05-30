import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NewLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: Event) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/api/v1/newlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name }),
      });

      if (res.ok) {
        navigate('/login');
      } else {
        const data = await res.json();
        setError(data.error || '新規作成に失敗しました');
      }
    } catch (err) {
      setError('通信エラーが発生しました');
    }
  };

  return (
    <div>
      <div className="max-w-md mx-auto mt-20 p-8 border rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">新規作成</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">ユーザー名</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">メールアドレス</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1 font-medium">パスワード</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
          >
            新規作成
          </button>
        </form>
      </div>
      <div className="flex justify-center mt-4">
        <Link to="/" className="text-blue-500 hover:underline">ホームに戻る</Link>
      </div>
    </div>
  );
};

export default NewLogin;
