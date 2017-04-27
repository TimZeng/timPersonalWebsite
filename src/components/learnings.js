import React, { Component } from 'react';


class Learnings extends Component {
  state = {
    dateTime: ''
  }

  componentWillMount() {
    const today = new Date();
    const date = `${today.getFullYear()}-${(today.getMonth()+1)}-${today.getDate()}`;
    const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    const dateTime = `${date} ${time}`;

    this.setState({ dateTime });
  }

  render() {
    return (
      <div>
        <header>

          <div className="hero-text-box">
            <h1>Trying to be Better<br />than yesterday...</h1>
            <p style={{ color: '#fff' }}>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <i className='ion-calendar' />
              &nbsp; &nbsp;{this.state.dateTime}
            </p>
          </div>

        </header>

        <section className='section-learnings'>
          <h2>this is the learnigns page</h2>
        </section>
      </div>
    );
  }
}

export default Learnings;
