import React from 'react';
import { MaterialData } from '../types';
import MaterialContent from './MaterialContent';
import QuestionPanel from './QuestionPanel';

interface PaperLayoutProps {
  material: MaterialData;
}

const PaperLayout: React.FC<PaperLayoutProps> = ({ material }) => {
  return (
    <div className="w-full flex justify-center py-8">
      {/* A4 Landscape Ratio Container: Approx 297mm x 210mm => ~1.414 aspect ratio */}
      {/* We use a fixed max-width and responsive height for web viewing, mimicking the paper feel */}
      <div className="
        relative w-full max-w-[1280px] aspect-[1.414/1] min-h-[800px]
        bg-white shadow-2xl rounded-sm overflow-hidden flex flex-col md:flex-row
        border border-gray-200 print:shadow-none print:border-none
      ">
        {/* Header Branding (Optional imitation of the PDF header) */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-slate-800 to-slate-600 z-10" />
        
        {/* Left Side: Material */}
        <div className="w-full md:w-1/2 h-full flex flex-col border-r border-gray-100">
           <MaterialContent material={material} />
           {/* Footer decoration */}
           <div className="p-4 text-center text-xs text-gray-300 font-serif border-t border-gray-100">
              公考最新资料 · 练习题 {material.id < 10 ? `0${material.id}` : material.id} 套
           </div>
        </div>

        {/* Right Side: Questions */}
        <div className="w-full md:w-1/2 h-full flex flex-col bg-slate-50/50">
          <QuestionPanel questions={material.questions} />
           {/* Page Number */}
           <div className="p-4 text-right text-xs text-gray-400 font-serif border-t border-gray-200">
             Page {material.id}
           </div>
        </div>
      </div>
    </div>
  );
};

export default PaperLayout;