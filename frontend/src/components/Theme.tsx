import React from 'react';

type ThemeProps = {
  title: string;
};

function Theme({ title }: ThemeProps) {
  return (
    <div className="mt-20 mb-20">
      <h2 className="text-4xl font-semibold text-orange-500 mb-4">今週のお題</h2>
      <p className="text-3xl font-semibold text-center text-gray-800">{title}</p>
    </div>
  );
}

export default Theme;
