
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Naim Sliti',
        bio: 'Naim Sliti is a Tunisian football player, currently playing for Stade Rennais.',
        imgSrc: 'https://th.bing.com/th/id/OIP.P107MVVNrTpCV2VueBSzhQHaIa?rs=1&pid=ImgDetMain',
        profession: 'Footballer',
      },
      show: false, // Controls if profile is shown or not
      elapsedTime: 0, // Time elapsed since component mounted
    };
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ elapsedTime: this.state.elapsedTime + 1 });
    }, 1000); // Update every second
  }

  componentWillUnmount() {
    clearInterval(this.timer); // Clean up timer
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, elapsedTime } = this.state;

    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Profile of {fullName}</h1>

        {/* Button to toggle profile visibility */}
        <button onClick={this.toggleShow}>
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>

        {/* Conditionally render profile */}
        {show && (
          <div>
            <img src={imgSrc} alt={fullName} style={{ borderRadius: '50%', marginTop: '20px' }} />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p><strong>Profession:</strong> {profession}</p>
          </div>
        )}

        {/* Display elapsed time */}
        <p>Time since mounted: {elapsedTime} seconds</p>
      </div>
    );
  }
}

export default App;
