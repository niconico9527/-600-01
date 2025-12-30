import React from 'react';
import { TableRow } from '../types';

interface TableMaterialProps {
  data: TableRow[];
}

const TableMaterial: React.FC<TableMaterialProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto mt-4 border border-gray-300 shadow-sm rounded-sm">
      <table className="min-w-full text-xs text-center border-collapse bg-white">
        <caption className="p-2 font-bold text-gray-800 bg-gray-50 border-b border-gray-300">
          表 2020年广东省各级以上市技术合同认定登记情况
        </caption>
        <thead className="bg-gray-100 text-gray-700 font-serif">
          <tr>
            <th className="border border-gray-300 p-1">城市</th>
            <th className="border border-gray-300 p-1">合同数<br/>(项)</th>
            <th className="border border-gray-300 p-1">同比增长<br/>(%)</th>
            <th className="border border-gray-300 p-1">合同成交额<br/>(亿元)</th>
            <th className="border border-gray-300 p-1">同比增长<br/>(%)</th>
            <th className="border border-gray-300 p-1">技术交易额<br/>(亿元)</th>
            <th className="border border-gray-300 p-1">同比增长<br/>(%)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.city} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-yellow-50`}>
              <td className="border border-gray-300 p-1 font-semibold">{row.city}</td>
              <td className="border border-gray-300 p-1">{row.contractCount}</td>
              <td className="border border-gray-300 p-1 text-gray-600">{row.countGrowth}</td>
              <td className="border border-gray-300 p-1">{row.contractAmount}</td>
              <td className="border border-gray-300 p-1 text-gray-600">{row.amountGrowth}</td>
              <td className="border border-gray-300 p-1">{row.techTransAmount}</td>
              <td className="border border-gray-300 p-1 text-gray-600">{row.techTransGrowth}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-2 text-[10px] text-gray-500 italic bg-gray-50 border-t border-gray-300">
        备注：珠三角主要包括广州、佛山、肇庆、深圳、东莞、惠州、珠海、中山、江门等九个地级市
      </div>
    </div>
  );
};

export default TableMaterial;