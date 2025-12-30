import React from 'react';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList
} from 'recharts';
import { ChartDataPoint } from '../types';

interface ChartMaterialProps {
  data: ChartDataPoint[];
}

const ChartMaterial: React.FC<ChartMaterialProps> = ({ data }) => {
  return (
    <div className="w-full h-[400px] mt-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
      <h3 className="text-center font-bold mb-4 text-sm text-gray-700">2016~2021年全国数据及互联网业务收入发展情况</h3>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 30, bottom: 20, left: 10 }}
        >
          <CartesianGrid stroke="#f5f5f5" vertical={false} />
          <XAxis dataKey="year" scale="band" padding={{ left: 20, right: 20 }} tick={{fontSize: 12}} />
          
          {/* Left Y Axis for Revenue (Bars) */}
          <YAxis 
            yAxisId="left" 
            orientation="left" 
            domain={[0, 14000]} 
            tick={{fontSize: 12}} 
            label={{ value: '收入 (亿元)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }}
          />

          {/* Right Y Axis for Growth Rate (Lines) */}
          <YAxis 
            yAxisId="right" 
            orientation="right" 
            domain={[-60, 40]} 
            tick={{fontSize: 12}}
            unit="%"
          />

          <Tooltip />
          <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />

          {/* Bars */}
          <Bar yAxisId="left" dataKey="fixedRevenue" name="固定数据及互联网业务收入(亿元)" fill="#cbd5e1" barSize={30}>
            <LabelList dataKey="fixedRevenue" position="top" fontSize={10} fill="#334155" />
          </Bar>
          <Bar yAxisId="left" dataKey="mobileRevenue" name="移动数据及互联网业务收入(亿元)" fill="#94a3b8" barSize={30}>
             <LabelList dataKey="mobileRevenue" position="top" fontSize={10} fill="#334155" />
          </Bar>

          {/* Lines */}
          <Line yAxisId="right" type="monotone" dataKey="fixedGrowth" name="固定数据及互联网业务收入增速(%)" stroke="#475569" strokeWidth={2} dot={{r: 4, fill: '#475569'}} >
             <LabelList dataKey="fixedGrowth" position="top" offset={10} fontSize={10} />
          </Line>
          <Line yAxisId="right" type="monotone" dataKey="mobileGrowth" name="移动数据及互联网业务收入增速(%)" stroke="#0f172a" strokeWidth={2} dot={{r: 4, shape: "diamond", fill: '#0f172a'}} >
             <LabelList dataKey="mobileGrowth" position="bottom" offset={10} fontSize={10} />
          </Line>

        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartMaterial;