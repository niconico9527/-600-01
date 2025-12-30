import React, { useState } from 'react';
import { Question } from '../types';
import { CheckCircle2, Circle } from 'lucide-react';

interface QuestionPanelProps {
  questions: Question[];
}

const QuestionPanel: React.FC<QuestionPanelProps> = ({ questions }) => {
  // Store selected answers: { questionId: 'A' | 'B' | 'C' | 'D' }
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});

  const handleSelect = (questionId: number, option: string) => {
    setSelectedAnswers(prev => ({ ...prev, [questionId]: option }));
  };

  return (
    <div className="flex-1 bg-slate-50 p-8 overflow-y-auto border-l border-gray-100 shadow-inner">
      <h3 className="text-lg font-bold text-slate-700 mb-6 pb-2 border-b border-slate-200">
        请回答 {questions[0].id} ~ {questions[questions.length - 1].id} 题
      </h3>
      
      <div className="space-y-8">
        {questions.map((q) => (
          <div key={q.id} className="group">
            <div className="flex gap-2 mb-3">
              <span className="font-bold text-slate-900 min-w-[1.5rem]">{q.id}.</span>
              <p className="text-slate-800 font-medium leading-relaxed">{q.text}</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-6">
              {(['A', 'B', 'C', 'D'] as const).map((optKey) => {
                const isSelected = selectedAnswers[q.id] === optKey;
                return (
                  <button
                    key={optKey}
                    onClick={() => handleSelect(q.id, optKey)}
                    className={`
                      relative flex items-center gap-3 p-3 rounded-lg text-left transition-all duration-200
                      border
                      ${isSelected 
                        ? 'bg-blue-600 border-blue-600 text-white shadow-md' 
                        : 'bg-white border-gray-200 text-gray-600 hover:border-blue-400 hover:bg-blue-50'}
                    `}
                  >
                    <div className="shrink-0">
                        {isSelected ? <CheckCircle2 size={18} /> : <Circle size={18} className="text-gray-300" />}
                    </div>
                    <span className={`text-sm font-semibold ${isSelected ? 'text-blue-100' : 'text-gray-400'}`}>{optKey}.</span>
                    <span className="text-sm">{q.options[optKey]}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionPanel;