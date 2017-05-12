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
    console.log('submitting!!');
    this.props.changeProcessing(true);
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
                      required
                      data-error="Name is required."
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
                      required
                      data-error="Email is required."
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
                      required
                      data-error="Please,leave a message."
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

export default connect(null, {
  toggleOverlay,
  changeProcessing,
  updateMessage,
  sendMessage
})(Contact);
