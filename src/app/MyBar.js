"use client"
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'  ,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['Maths','English','Science','Social','Hindi'];

const stdMarks = [
    30,50,80,99,25
]
export const data = {
  labels,
  datasets: [
    {
      label: 'Student Marks',
      data: stdMarks,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    } 
  ],
};

export function MyBar() {
  return <Bar options={options} data={data} />;
}
