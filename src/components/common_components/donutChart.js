import React from 'react';

const DonutChart = ({ size, strokewidth, value, title }) => {
  const halfsize = (size * 0.5);
  const radius = halfsize - (strokewidth * 0.5);
  const circumference = 2 * Math.PI * radius;
  const strokeval = ((value * circumference) / 100);
  const dashval = (strokeval + ' ' + circumference);

  const trackstyle = { strokeWidth: strokewidth };
  const indicatorstyle = {
    strokeWidth: strokewidth,
    strokeDasharray: dashval
  };
  const rotateval = `rotate(-90 ${halfsize},${halfsize})`;

  return (
    <div className='techChart'>
      <svg width={size} height={size} className="donutchart">
        <circle
          r={radius}
          cx={halfsize}
          cy={halfsize}
          transform={rotateval}
          style={trackstyle}
          className="donutchart-track"
        />
        <circle
          r={radius}
          cx={halfsize}
          cy={halfsize}
          transform={rotateval}
          style={indicatorstyle}
          className="donutchart-indicator"
        />
      </svg>
      <p>{title}</p>
    </div>
  );
};

export default DonutChart;
