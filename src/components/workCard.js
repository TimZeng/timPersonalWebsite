import React, { Component } from 'react';

import { connect } from 'react-redux';

import { toggleOverlay } from '../actions';

class WorkCard extends Component {

  renderName() {
    if (this.props.link === null) {
      return <h6>{this.props.name}</h6>;
    }

    return (
      <h6>
        {this.props.name}
        <a className='icon-link' href={this.props.link} target='_blank'>
          <i className='ion-link' />
        </a>
      </h6>
    );
  }

  render() {
    const nameLower = this.props.name.toLowerCase().replace(/\s/g, '');
    const imgURL = `../../Assets/img/projects/${nameLower}-1.jpeg`;

    return (
      <div
        className='workCard'
      >
        <img
          className='work-small-view'
          onClick={
            () => this.props.toggleOverlay({
              overlay: true,
              component: 'ImgDisplay',
              project: nameLower
            })
          }
          src={imgURL}
          alt={this.props.name}
        />

        <div className='text'>
          {this.renderName()}
          <p>{this.props.description}</p>
        </div>

      </div>
    );
  }
}

export default connect(null, { toggleOverlay })(WorkCard);
