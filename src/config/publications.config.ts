export type Publication = {
  title: string;
  venue: string;
  year: number;
  url?: string;
};

export const publications: Publication[] = [
  {
    title: "Deepfake Audio Detection with Neural Networks Using Audio Features",
    venue: "IEEE",
    year: 2022,
    url: "https://ieeexplore.ieee.org/document/9862519",
  },
  {
    title: "Stock Market Prediction with Lasso Regression Using Technical Analysis and Time Lag",
    venue: "IEEE",
    year: 2021,
    url: "https://ieeexplore.ieee.org/document/9417935",
  },
];
