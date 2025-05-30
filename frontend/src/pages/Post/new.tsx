import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext.tsx';
import { useNavigate } from 'react-router-dom';

const PostForm = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [theme, setTheme] = useState({ id: null, title: '' });
  const [title, setTitle] = useState('');
  const [photograph, setPhotograph] = useState(null);
  const [body, setBody] = useState('');
  const [materias, setMaterias] = useState('');
  const [recipe, setRecipe] = useState('');

  useEffect(() => {
    const fetchTheme = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/v1/themes/published');
        const data = await res.json();
        if (res.ok) {
          setTheme(data);
        } else {
          console.error('テーマが取得できませんでした');
        }
      } catch (err) {
        console.error('通信エラー:', err);
      }
    };

    fetchTheme();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('post[title]', title);
    if (photograph) formData.append('post[photograph]', photograph);
    formData.append('post[body]', body);
    formData.append('post[materias]', materias);
    formData.append('post[recipe]', recipe);
    formData.append('post[theme_id]', theme.id);
    formData.append('post[user_id]', user.id);

    try {
      const res = await fetch('http://localhost:3000/api/v1/posts', {
        method: 'POST',
        credentials: 'include',
        body: formData,
      });

      if (res.ok) {
        alert('投稿が完了しました');
        navigate('/');
      } else {
        alert('投稿に失敗しました');
      }
    } catch (err) {
      console.error('投稿中にエラーが発生しました', err);
    }
  };

  if (!user) {
    navigate('/login');
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-orange-500 mb-6">「{theme.title}」のお題で投稿する</h2>
      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        <input
          type="text"
          placeholder="タイトル"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPhotograph(e.target.files?.[0] || null)}
          className="w-full border border-gray-300 p-2 rounded"
        />
        <textarea
          placeholder="紹介文"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          rows={4}
        />
        <textarea
          placeholder="材料"
          value={materias}
          onChange={(e) => setMaterias(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          rows={3}
        />
        <textarea
          placeholder="作り方"
          value={recipe}
          onChange={(e) => setRecipe(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          rows={5}
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
        >
          投稿する
        </button>
      </form>
    </div>
  );
};

export default PostForm;
