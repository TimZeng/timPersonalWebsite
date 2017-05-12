import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleOverlay } from '../actions';

// } = ({ img, clickLeft, clickRight, toggleOverlay }) =>

class ImgDisplay extends Component {
  state = {
    index: 0,
    images: this.props.projectImg[this.props.currentProject]
  }

  changeImg(change) {
    var index = this.state.index + change;
    if (index === -1) index = this.state.images.length - 1;
    if (index === this.state.images.length) index = 0;

    this.setState({ index });
  }

  render() {
    const imgURL = `../../Assets/img/projects/${this.state.images[this.state.index]}.jpeg`;

    return (
      <div className='img-display'>
        <i
          onClick={() => this.props.toggleOverlay({ overlay: false, component: '' })}
          className='ion-close-circled'
        />

        <div className='img-container'>
          <div className='arrow'>
            <i
              onClick={() => this.changeImg(-1)}
              className='ion-chevron-left'
            />
          </div>

          <img
            className='work-large-view animated fadeIn'
            src={imgURL}
            alt={this.props.currentProject}
            onClick={() => this.changeImg(1)}
          />

          <div className='arrow'>
            <i
              onClick={() => this.changeImg(1)}
              className='ion-chevron-right'
            />
          </div>
        </div>

        <p className='img-label'>{this.props.currentProject}</p>

      </div>
    );
  }
}

const mapStateToProps = ({ projectImg, currentProject }) => (
  { projectImg, currentProject }
);

export default connect(mapStateToProps, { toggleOverlay })(ImgDisplay);

