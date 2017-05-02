import React from 'react';

const Contact = () => (
  <div className='section-contact'>
    <div className='contact-form'>

      <section className="section-form">
        <div className="row">
          <h2>We&#39;re&nbsp;happy&nbsp;to&nbsp;hear&nbsp;from&nbsp;you</h2>
        </div>

        <div className="row">
          <form method="post" action="#" className="contact-form">
            <div className="row">
              <div className="col span-1-of-3">
                <label htmlFor="name">Name</label>
              </div>
              <div className="col span-2-of-3">
                <input type="text" name="name" id="name" placeholder="Your name" required />
              </div>
            </div>

            <div className="row">
              <div className="col span-1-of-3">
                <label htmlFor="email">Email</label>
              </div>
              <div className="col span-2-of-3">
                <input type="email" name="email" id="email" placeholder="Your email" required />
              </div>
            </div>

            <div className="row">
              <div className="col span-1-of-3">
                <label htmlFor="find-us">How did you find us?</label>
              </div>
              <div className="col span-2-of-3">
                <select name="find-us" id="find-us">
                  <option value="friends" selected>Friends</option>
                  <option value="search">Search Engine</option>
                  <option value="ad">Advertisement</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>





            <div className="row">
              <div className="col span-1-of-3">
                <label>&nbsp;</label>
              </div>
              <div className="col span-2-of-3">
                <input type="submit" value="Send it!" />
              </div>
            </div>

          </form>
        </div>
      </section>

    </div>
  </div>
);

export default Contact;
