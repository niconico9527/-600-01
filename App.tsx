import React from 'react';
import { materialOne, materialTwo, materialThree, materialFour } from './data';
import PaperLayout from './components/PaperLayout';

const App: React.FC = () => {
  const papers = [materialOne, materialTwo, materialThree, materialFour];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center gap-8 py-12 px-4 md:px-8">
      
      <header className="w-full max-w-[1280px] text-center mb-4">
        <h1 className="text-3xl font-serif font-bold text-slate-800 mb-2">资料分析专项刷题</h1>
        <p className="text-slate-600">模拟真实考试环境 · A4横向排版 · 4套精选真题</p>
      </header>

      {/* Render all papers vertically */}
      {papers.map((material) => (
        <PaperLayout key={material.id} material={material} />
      ))}

      <footer className="text-center text-gray-400 text-sm pb-8">
        &copy; 2024 模拟练习系统 - 仅供学习使用
      </footer>
    </div>
  );
};

export default App;