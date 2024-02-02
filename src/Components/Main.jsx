import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Component } from 'react';
import Card from 'react-bootstrap/Card';
class MyMain extends Component {
  state = {
    movie: '',
  };
  fetchFilm = () => {
    fetch('http://www.omdbapi.com/?apikey=ed7d026d&s=Star Wars')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Qualcosa è andato storto');
        }
      })
      .then((props) => {
        this.setState({
          movie: props,
        });
        console.log(props);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.fetchFilm();
  }
  render() {
    console.log('tutti i film', this.state.movie);
    return (
      <Container>
        <Row>
          <Col>
            {this.state.movie.map((movies) => {
              console.log('sonoioo', movies);
              return (
                <Row>
                  <Col key={movies.imdbID}>
                    <img src={movies.poster} alt="" />
                  </Col>
                </Row>
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}
export default MyMain;
