import React from 'react';

const Contact = ({ toggleOverlay }) => (

  <section className="section-contact">
    <div className="row">

      <i
        className='ion-close-circled'
        onClick={() => toggleOverlay(false, '')}
      />

      <h2>Send me a message</h2>

      <form id="contact-form" method="post" action="contact.php" role="form">


          <div className="controls">

              <div className="row">
                  <div className="col-md-6">
                      <div className="form-group">
                          <label for="form_name">Name *</label>
                          <input onChange={
                            (e) => this.updateState('firstName', e.target.value)
                          } id="form_name" type="text" name="name" className="form-control" placeholder="your name *" required="required" data-error="Name is required." />
                          <div className="help-block with-errors"></div>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="form-group">
                          <label for="form_email">Email *</label>
                          <input onChange={
                            (e) => this.updateState('lastName', e.target.value)
                          } id="form_lastname" type="text" name="surname" className="form-control" placeholder="emial address *" required="required" data-error="Email is required." />
                          <div className="help-block with-errors"></div>
                      </div>
                  </div>
              </div>

              <div className="row">
                  <div className="col-md-12">
                      <div className="form-group">
                          <label for="form_message">Message *</label>
                          <textarea onChange={
                            (e) => this.updateState('message', e.target.value)
                          } id="form_message" name="message" className="form-control" placeholder="Leave a message ..." rows="4" required="required" data-error="Please,leave a message."></textarea>
                          <div className="help-block with-errors"></div>
                      </div>
                  </div>
                  <div className="col-md-12">
                      <div onClick={ () => this.sendMessage() } className="btn btn-success btn-send">Send</div>
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

export default Contact;
      // <form method="post" action="#" className="contact-form">

      //   <div className="row">
      //     <div className="col span-1-of-3">
      //       <label htmlFor="name">Name</label>
      //     </div>
      //     <div className="col span-2-of-3">
      //       <input type="text" name="name" id="name" placeholder="Your name" required />
      //     </div>
      //   </div>

      //   <div className="row">
      //     <div className="col span-1-of-3">
      //       <label htmlFor="email">Email</label>
      //     </div>
      //     <div className="col span-2-of-3">
      //       <input type="email" name="email" id="email" placeholder="Your email" required />
      //     </div>
      //   </div>

      //   <div className="row">
      //     <div className="col span-1-of-3">
      //       <label htmlFor="message">Message</label>
      //     </div>
      //     <div className="col span-2-of-3">
      //       <input type="message" name="message" id="message" placeholder="Your message" required />
      //     </div>
      //   </div>

      //   <div className="row">
      //     <div className="col span-1-of-3">
      //       <label>&nbsp;</label>
      //     </div>
      //     <div className="col span-2-of-3">
      //       <input type="submit" value="Send it!" />
      //     </div>
      //   </div>

      // </form>
