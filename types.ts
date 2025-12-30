export enum MaterialType {
  TEXT = 'TEXT',
  CHART = 'CHART',
  TABLE = 'TABLE'
}

export interface Question {
  id: number;
  text: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
}

export interface ChartDataPoint {
  year: string;
  fixedRevenue: number;
  mobileRevenue: number;
  fixedGrowth: number;
  mobileGrowth: number;
}

export interface TableRow {
  city: string;
  contractCount: number;
  countGrowth: number;
  contractAmount: number;
  amountGrowth: number;
  techTransAmount: number;
  techTransGrowth: number;
}

export interface MaterialData {
  id: number;
  title: string;
  type: MaterialType;
  content?: string[]; // For text paragraphs
  chartData?: ChartDataPoint[]; // For chart
  tableData?: TableRow[]; // For table
  questions: Question[];
}