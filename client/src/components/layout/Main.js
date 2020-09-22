import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

const API_KEY = '83BMAdJKqrJkZgt0UfxeidErpbduui3NryEBIKjF';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      picture: '',
      date: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    let dateFromInput = e.target[0].value;
    this.setState({
      date: dateFromInput,
    });
    this.pictureFromDate(dateFromInput);
  }

  handleChange(e) {
    this.setState({
      date: e.target.value,
    });
  }

  componentDidMount() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((json) => this.setState({ picture: json }));
  }

  pictureFromDate = (date) => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((pictureData) => this.setState({ picture: pictureData }));
  };

  render() {
    let picture = this.state.picture;
    return (
      <div className='container text-center'>
        <Jumbotron fluid>
          <Container>
            <h1 className='display-4 header'>NASA Image of the Day</h1>
            <p className='lead'>
              Enjoy today's image or search for a previous day.
            </p>
          </Container>
        </Jumbotron>

        <form className='form' onSubmit={this.handleSubmit}>
          <input
            type='text'
            id='date'
            placeholder='YYYY-MM-DD'
            value={this.state.date}
            onChange={this.handleChange}
          />
          <button type='submit' disabled={!this.state.date}>
            Submit
          </button>
        </form>
        <br />
        <h3 className='date'>{picture.date}</h3>
        <img className='image mb-3' src={picture.url} alt={picture.title}></img>
        <p className='lead explanation pt-3'>{picture.explanation}</p>
      </div>
    );
  }
}

export default Main;
