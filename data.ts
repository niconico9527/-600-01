import { MaterialData, MaterialType } from './types';

// Set 1: Text Material
export const materialOne: MaterialData = {
  id: 1,
  title: "根据所给材料，回答1~5题。",
  type: MaterialType.TEXT,
  content: [
    "国家能源局发布 2022 年 1~7 月，全国规模以上工业发电 4.77 万亿千瓦时，同比增长 1.4%，增速比上半年加快 0.7 个百分点。7 月份，全国发电量 8059 亿千瓦时，同比增长 4.5%，增速比上月加快 3.0 个百分点。分品种看，7 月份火电由降转增，同比增长 5.3%；由于来水偏枯，水电同比增长 2.4%，增速比上月放缓 26.6 个百分点；风电同比增长 5.7%，增速比上月放缓 11.0 个百分点；核电同比下降 3.3%，降幅比上月收窄 5.7 个百分点；太阳能发电同比增长 13.0%，增速比上月加快 3.1 个百分点。",
    "国家能源局发布 2022 年 1~7 月，全社会用电量累计 49303 亿千瓦时，同比增长 3.4%。分产业看，第一产业用电量 634 亿千瓦时，同比增长 11.1%；第二产业用电量 32552 亿千瓦时，同比增长 1.1%；第三产业用电量 8531 亿千瓦时，同比增长 4.6%；城乡居民生活用电量 7586 亿千瓦时，同比增长 12.5%。7 月份，全社会用电量 8324 亿千瓦时，同比增长 6.3%。分产业看，第一产业用电量 121 亿千瓦时，同比增长 14.3%；第二产业用电量 5132 亿千瓦时，同比下降 0.1%；第三产业用电量 1591 亿千瓦时，同比增长 11.5%；城乡居民生活用电量 1480 亿千瓦时，同比增长 26.8%。"
  ],
  questions: [
    {
      id: 1,
      text: "2021 年 7 月份，全国发电量大约是多少亿千瓦时：",
      options: { A: "6570", B: "6920", C: "7712", D: "7800" }
    },
    {
      id: 2,
      text: "2022 年 1~7 月份，全国城乡居民生活用电量比 2021 年 1~7 月份约多：",
      options: { A: "672 亿千瓦时", B: "843 亿千瓦时", C: "925 亿千瓦时", D: "1020 亿千瓦时" }
    },
    {
      id: 3,
      text: "2021 年 7 月份，全社会用电量中第三产业用电量的占比与城乡居民生活用电量的占比相较约：",
      options: { A: "高 3.3%", B: "低 3.8%", C: "高 9.8%", D: "低 10.3%" }
    },
    {
      id: 4,
      text: "2021 年 1~6 月全社会用电量累计约多少亿千瓦时：",
      options: { A: "38258", B: "39851", C: "40472", D: "41279" }
    },
    {
      id: 5,
      text: "能够从上述材料中推出的是：",
      options: {
        A: "2022 年 7 月全国太阳能发电增长量最大",
        B: "2022 年 6 月全国核电发电量比 5 月份高",
        C: "2022 年 7 月第二产业用电量高于上半年第二产业平均用电量",
        D: "2021 年 7 月第一产业用电量低于 2021 年上半年第一产业平均用电量"
      }
    }
  ]
};

// Set 2: Chart Material
export const materialTwo: MaterialData = {
  id: 2,
  title: "根据所给材料，回答6~10题。",
  type: MaterialType.CHART,
  content: [
    "2021 年全国电信业务实现收入 1.47 万亿元，比上年增长 8.0%，增速同比提高 4.1 个百分点。其中，固定数据及互联网业务实现收入 2601 亿元，比上年增长 9.8%；移动数据及互联网业务实现收入 6409 亿元，比上年增长 3.3%。2016~2021 年全国数据及互联网业务收入发展情况见下图。"
  ],
  chartData: [
    { year: '2016年', fixedRevenue: 1811, mobileRevenue: 4333, fixedGrowth: 7.4, mobileGrowth: 38.3 },
    { year: '2017年', fixedRevenue: 1950, mobileRevenue: 5528, fixedGrowth: 7.7, mobileGrowth: 27.6 },
    { year: '2018年', fixedRevenue: 2074, mobileRevenue: 5984, fixedGrowth: 6.4, mobileGrowth: 8.2 },
    { year: '2019年', fixedRevenue: 2176, mobileRevenue: 6096, fixedGrowth: 4.9, mobileGrowth: 1.9 },
    { year: '2020年', fixedRevenue: 2369, mobileRevenue: 6204, fixedGrowth: 1.8, mobileGrowth: 8.9 },
    { year: '2021年', fixedRevenue: 2601, mobileRevenue: 6409, fixedGrowth: 3.3, mobileGrowth: 9.8 },
  ],
  questions: [
    {
      id: 6,
      text: "2021 全国电信业务实现收入的同比增长额是：",
      options: { A: "0.07 万亿元", B: "0.09 万亿元", C: "0.11 万亿元", D: "0.13 万亿元" }
    },
    {
      id: 7,
      text: "2021 年全国数据及互联网业务总收入的同比增长率是：",
      options: { A: "4.5%", B: "5.1%", C: "6.2%", D: "7.0%" }
    },
    {
      id: 8,
      text: "2016~2021 年全国移动数据及互联网业务收入同比增长额最多的年份是：",
      options: { A: "2016 年", B: "2017 年", C: "2020 年", D: "2021 年" }
    },
    {
      id: 9,
      text: "分别以 R19、R20、R21 表示 2019 年、2020 年、2021 年全国固定数据及互联网业务收入占电信业务实现收入的比重，R19、R20、R21 的大小关系：",
      options: { A: "R19 < R21 < R20", B: "R20 < R19 < R21", C: "R20 < R21 < R19", D: "R19 < R20 < R21" }
    },
    {
      id: 10,
      text: "关于 2017~2021 年全国数据及互联网业务收入发展情况，下列判断正确是：",
      options: {
        A: "移动数据及互联网业务收入增速逐年减小",
        B: "固定数据及互联网业务收入增速逐年增大",
        C: "数据及互联网业务总收入增速呈逐年减小趋势",
        D: "移动数据及互联网业务收入年均增速小于 10%"
      }
    }
  ]
};

// Set 3: Text Material
export const materialThree: MaterialData = {
  id: 3,
  title: "根据所给材料，回答11~15题。",
  type: MaterialType.TEXT,
  content: [
    "《2023 年某市国民经济和社会发展统计公报》显示：",
    "农业生产稳中向好。全市实现农林牧渔业总产值 354.8 亿元，按可比价格计算比上年增长 3.0%。全市农作物播种面积 214.1 千公顷，其中粮食播种面积 132.4 千公顷，蔬菜播种面积 67.1 千公顷。全年粮食产量再创新高，其中夏粮产量 26.9 万吨，增长 6.8%；秋粮产量 68.2 万吨，增长 1.5%。年末地产生猪存栏 22.4 万头，比上年下降 0.4%，全年地产生猪出栏 27.1 万头，比上年增长 33.6%。主要农产品中，猪牛羊禽肉产量 2.4 万吨，比上年增长 31.5%，其中猪肉产量 2.2 万吨，增长 40.0%；蔬菜产量 203.8 万吨，增长 1.0%；水产品产量 14.5 万吨，增长 1.4%。",
    "工业总量迈上新台阶。全年规模以上工业总产值超 4.4 万亿元，达到 44343.9 亿元，比上年增长 3.6%。分行业看，前六大主导行业实现产值 28940.3 亿元，占规模以上工业总产值比重为 65.3%，比上年提高 0.7 个百分点。电子信息、装备制造两个万亿级产业沉锚压舱全年产值分别达 13441.1 亿元和 14241.9 亿元。计算机、通信和其他电子设备制造业，电气机械和器材制造业，汽车制造业，专用设备制造业产值分别比上年增长 4.3%、3.2%、6.3%和 3.4%。规模以上工业中，大型企业产值 18731.7 亿元，比上年增长 2.1%；中型企业产值 10641.6 亿元，下降 2.7%；小微型企业产值 14970.6 亿元，下降 0.3%。全市百强企业实现产值 15377.9 亿元，比上年增长 8.0%。分经济类型看，国有及国有控股企业产值 1730.2 亿元，比上年增长 2.4%；民营企业产值 20689.1 亿元，增长 6.6%，占规模以上工业总产值比重 46.7%；外商及港澳台企业产值 22019.7 亿元，下降 5.5%。",
    "居民收入稳定增长。全市常住居民人均可支配收入 74076 元，比上年增长 4.6%，其中城镇常住居民人均可支配收入 82989 元，增长 4.3%；农村常住居民人均可支配收入 46385 元，增长 5.9%。全市常住居民人均消费支出 46018 元，比上年增长 7.3%，其中城镇常住居民人均消费支出 50656 元，增长 6.8%；农村常住居民人均消费支出 31609 元，增长 10.0%。"
  ],
  questions: [
    {
      id: 11,
      text: "2022 年该市粮食总产量为多少万吨：",
      options: { A: "85.7", B: "89.4", C: "91.1", D: "92.4" }
    },
    {
      id: 12,
      text: "2023 年该市牛羊禽肉产量比 2022 年：",
      options: { A: "增长了 21.3%", B: "下降了 21.3%", C: "增长了 27.0%", D: "下降了 27.0%" }
    },
    {
      id: 13,
      text: "2023 年前六大主导行业产值增长率约为：",
      options: { A: "6.5%", B: "5.6%", C: "4.7%", D: "3.8%" }
    },
    {
      id: 14,
      text: "2022 年该市城镇常住居民与农村常住居民的人均可支配收入比为：",
      options: { A: "1.79 : 1", B: "1.82 : 1", C: "1.83 : 1", D: "1.85 : 1" }
    },
    {
      id: 15,
      text: "2023 年该市农村居民人均消费支出较上一年增加了多少元：",
      options: { A: "2874", B: "2746", C: "2647", D: "2584" }
    }
  ]
};

// Set 4: Table Material
export const materialFour: MaterialData = {
  id: 4,
  title: "根据所给材料，回答16~20题。",
  type: MaterialType.TABLE,
  tableData: [
    { city: "全省", contractCount: 39845, countGrowth: 17.9, contractAmount: 3465.92, amountGrowth: 52.5, techTransAmount: 2652.07, techTransGrowth: 35.26 },
    { city: "广州市", contractCount: 22843, countGrowth: 1.42, contractAmount: 2256.53, amountGrowth: 77.21, techTransAmount: 1484.57, techTransGrowth: 52.25 },
    { city: "深圳市", contractCount: 11717, countGrowth: 14.68, contractAmount: 1036.3, amountGrowth: 46.99, techTransAmount: 1023.19, techTransGrowth: 46.71 },
    { city: "东莞市", contractCount: 275, countGrowth: -34.05, contractAmount: 69.53, amountGrowth: -68.69, techTransAmount: 67.99, techTransGrowth: -69.3 },
    { city: "珠海市", contractCount: 371, countGrowth: 25.34, contractAmount: 40.1, amountGrowth: 11.64, techTransAmount: 32.74, techTransGrowth: -2.59 },
    { city: "佛山市", contractCount: 2653, countGrowth: 521.31, contractAmount: 22.41, amountGrowth: 86.63, techTransAmount: 13.53, techTransGrowth: 21.19 },
    { city: "惠州市", contractCount: 216, countGrowth: 127.37, contractAmount: 11.2, amountGrowth: 99.45, techTransAmount: 10.92, techTransGrowth: 104.07 },
    { city: "云浮市", contractCount: 89, countGrowth: 888.89, contractAmount: 8.13, amountGrowth: 2323.54, techTransAmount: 0.48, techTransGrowth: 44.3 },
    { city: "中山市", contractCount: 415, countGrowth: 87.78, contractAmount: 7.84, amountGrowth: 112.85, techTransAmount: 7.24, techTransGrowth: 104.79 },
    { city: "江门市", contractCount: 350, countGrowth: -40.68, contractAmount: 5.63, amountGrowth: -40.53, techTransAmount: 5.37, techTransGrowth: -38.21 },
    { city: "肇庆市", contractCount: 156, countGrowth: 46.24, contractAmount: 3.01, amountGrowth: 67.43, techTransAmount: 2.27, techTransGrowth: 57.95 },
    { city: "湛江市", contractCount: 166, countGrowth: 1.22, contractAmount: 1.15, amountGrowth: 18.64, techTransAmount: 0.96, techTransGrowth: 0.57 },
    { city: "汕头市", contractCount: 116, countGrowth: 231.43, contractAmount: 1.09, amountGrowth: 146.59, techTransAmount: 0.72, techTransGrowth: 62.49 },
    { city: "茂名市", contractCount: 240, countGrowth: 336.26, contractAmount: 0.92, amountGrowth: 319.74, techTransAmount: 0.72, techTransGrowth: 237.07 },
    { city: "韶关市", contractCount: 85, countGrowth: 672.73, contractAmount: 0.66, amountGrowth: -14.39, techTransAmount: 0.58, techTransGrowth: 44.79 },
    { city: "梅州市", contractCount: 21, countGrowth: -53.33, contractAmount: 0.58, amountGrowth: 6.97, techTransAmount: 0.17, techTransGrowth: -31.84 },
    { city: "清远市", contractCount: 15, countGrowth: 36.36, contractAmount: 0.41, amountGrowth: 39.18, techTransAmount: 0.35, techTransGrowth: 32.93 },
    { city: "阳江市", contractCount: 101, countGrowth: 1920, contractAmount: 0.26, amountGrowth: 896.66, techTransAmount: 0.12, techTransGrowth: 372.6 },
    { city: "河源市", contractCount: 19, countGrowth: -13.64, contractAmount: 0.10, amountGrowth: -39.79, techTransAmount: 0.09, techTransGrowth: 21.05 },
    { city: "揭阳市", contractCount: 3, countGrowth: 200, contractAmount: 0.06, amountGrowth: 312.34, techTransAmount: 0.06, techTransGrowth: 946.04 },
    { city: "汕尾市", contractCount: 6, countGrowth: 0, contractAmount: 0.02, amountGrowth: 336.64, techTransAmount: 0.02, techTransGrowth: 336.64 },
    { city: "潮州市", contractCount: 2, countGrowth: 0, contractAmount: 0, amountGrowth: -94.24, techTransAmount: 0, techTransGrowth: -93.89 },
  ],
  questions: [
    {
      id: 16,
      text: "2020 年，珠三角九市技术合同数占广东省比重约为：",
      options: { A: "57.3%", B: "86.8%", C: "93.4%", D: "97.8%" }
    },
    {
      id: 17,
      text: "2020 年，技术交易额占合同成交额比重有所提高的地市有：",
      options: { A: "7 个", B: "6 个", C: "5 个", D: "4 个" }
    },
    {
      id: 18,
      text: "2020 年，平均每项技术合同成交额高于 1000 万元的地市有：",
      options: { A: "5 个", B: "4 个", C: "3 个", D: "2 个" }
    },
    {
      id: 19,
      text: "2020 年，下列地市的合同成交额同比增量最大的是：",
      options: { A: "珠海市", B: "佛山市", C: "惠州市", D: "云浮市" }
    },
    {
      id: 20,
      text: "根据上表，下列说法正确的是：",
      options: {
        A: "2020 年，广东省技术合同数排前三的地市，其技术合同成交额也排前三",
        B: "2019 年，广东省技术合同数超百项的地市共有 13 个",
        C: "与上年相比，2020 年广东省各地市的技术合同数与技术合同成交额变动呈正相关",
        D: "与上年相比，2020 年深圳市技术交易额占广东省技术交易额比重有所提高"
      }
    }
  ]
};