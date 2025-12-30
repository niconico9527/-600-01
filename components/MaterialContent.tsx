import React from 'react';
import { MaterialData, MaterialType } from '../types';
import ChartMaterial from './ChartMaterial';
import TableMaterial from './TableMaterial';

interface MaterialContentProps {
  material: MaterialData;
}

const MaterialContent: React.FC<MaterialContentProps> = ({ material }) => {
  return (
    <div className="flex-1 p-8 bg-white border-r border-gray-200 overflow-y-auto font-serif text-gray-800 leading-relaxed text-justify">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white font-bold font-sans">
          {material.id}
        </div>
        <h2 className="text-xl font-bold tracking-wide text-slate-800">资料分析</h2>
      </div>
      
      {material.type === MaterialType.TEXT && material.content && (
        <div className="space-y-4 text-base">
          {material.content.map((paragraph, idx) => (
            <p key={idx} className="indent-8">{paragraph}</p>
          ))}
        </div>
      )}

      {material.type === MaterialType.CHART && (
        <div>
          {material.content && material.content.map((p, i) => <p key={i} className="indent-8 mb-4 text-sm">{p}</p>)}
          {material.chartData && <ChartMaterial data={material.chartData} />}
        </div>
      )}

      {material.type === MaterialType.TABLE && (
        <div>
           {material.tableData && <TableMaterial data={material.tableData} />}
        </div>
      )}
      
      <div className="mt-8 pt-4 border-t border-dashed border-gray-300 text-sm text-gray-500">
        <p>※ 请根据上述材料回答右侧问题。</p>
      </div>
    </div>
  );
};

export default MaterialContent;