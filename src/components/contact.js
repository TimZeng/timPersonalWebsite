import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  toggleOverlay,
  changeProcessing,
  updateMessage,
  sendMessage
} from '../actions';

class Contact extends Component {

  submit(event) {
    event.preventDefault();
    this.props.changeProcessing(true);
    this.props.sendMessage(this.props.message);
  }

  renderMessageForm() {
    if (this.props.messageStatus) {
      return (
        <div className='contact-complete-message'>
          <div className='animated bounceIn'>
            <i className='ion-checkmark-circled' />
          </div>
          <h3>Got It!</h3>
          <p>Thanks for the message. I will get back to you soon!</p>
        </div>
      );
    }

    return (
      <form id="contact-form" onSubmit={(e) => this.submit(e)}>
        <div className="controls">

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="form_name">Name *</label>
                <input
                  onChange={
                    e => this.props.updateMessage({
                      prop: 'name',
                      value: e.target.value
                    })
                  }
                  id="form_name"
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="your name *"
                  value={this.props.message.name}
                  required
                />
                <div className="help-block with-errors" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="form_email">Email *</label>
                <input
                  onChange={
                    (e) => this.props.updateMessage({
                      prop: 'email',
                      value: e.target.value
                    })
                  }
                  id="form_email"
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="emial address *"
                  value={this.props.message.email}
                  required
                />
                <div className="help-block with-errors" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="form_message">Message *</label>
                <textarea
                  onChange={
                    (e) => this.props.updateMessage({
                      prop: 'message',
                      value: e.target.value
                    })
                  }
                  id="form_message"
                  name="message"
                  className="form-control"
                  placeholder="Leave a message ..."
                  rows="4"
                  value={this.props.message.message}
                  required
                />
                <div className="help-block with-errors" />
              </div>
            </div>

            <div className='col-md-12'>
              <input
                type='submit'
                value='Send'
                className="btn btn-success btn-send"
              />
            </div>

          </div>
        </div>

      </form>
    );
  }

  render() {
    return (
      <section className="section-contact">
        <div className="row">

          <i
            className='ion-close-circled'
            onClick={() => this.props.toggleOverlay({ overlay: false, component: '' })}
          />

          <h2>Send me a message</h2>

          {this.renderMessageForm()}

        </div>

        <div className="row">
          <ul className="social-links">

            <li>
              <a href="mailto:zengtiantian1122@gmail.com">
                <i className="ion-email" />
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/tim-zeng-5ab68549/" target='_blank'>
                <i className="ion-social-linkedin" />
              </a>
            </li>

            <li>
              <a href="https://github.com/TimZeng" target='_blank'>
                <i className="ion-social-github" />
              </a>
            </li>

            <li>
              <a href="https://www.facebook.com/profile.php?id=100008497687409" target='_blank'>
                <i className="ion-social-facebook" />
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/cqzengxiao" target='_blank'>
                <i className="ion-social-instagram" />
              </a>
            </li>
          </ul>
        </div>

      </section>

    );
  }
}

const mapStateToProps = ({ message, messageStatus }) => (
  { message, messageStatus }
);

export default connect(mapStateToProps, {
  toggleOverlay,
  changeProcessing,
  updateMessage,
  sendMessage
})(Contact);
