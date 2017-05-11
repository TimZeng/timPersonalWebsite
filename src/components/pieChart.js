import React, { Component } from 'react';

import { Doughnut } from 'react-chartjs';

class TechPieChart extends Component {
  render() {
    const data = [
    {
      value: this.props.val,
      color: this.props.color
    },
    {
      value: 10 - this.props.val,
      color: '#eee'
    }
    ];

    return (
      <div className='techChart'>
        <Doughnut
          data={data}
          width={this.props.componentSize}
          height={this.props.componentSize}
          redraw
        />
        <p>{this.props.title}</p>
      </div>
    );
  }
}

export default TechPieChart;
