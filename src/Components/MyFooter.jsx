import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToggleButton from 'react-bootstrap/ToggleButton';

const MyFooter = () => (
  <Container fluid className="bg-dark">
    <Row className="justify-content-center">
      <Col sm={12} md={8}>
        <Row>
          <Col>
            <FaFacebook className="text-secondary me-2" />
            <FaInstagram className="text-secondary me-2" />
            <FaXTwitter className="text-secondary me-2 " />
            <FaYoutube className="text-secondary me-2" />
          </Col>
        </Row>
        <Row sm={12} md={4}>
          <Col>
            <Row>
              <Col>
                <p className="text-secondary fw-bold">Audio and Subtitles</p>
                <p className="text-secondary fw-bold">MediaCenter</p>
                <p className="text-secondary fw-bold">Privacy</p>
                <p className="text-secondary fw-bold">Contact us</p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <p className="text-secondary fw-bold">Audio Description</p>
                <p className="text-secondary fw-bold">Investor Relations</p>
                <p className="text-secondary fw-bold">LegalNotices</p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <p className="text-secondary fw-bold">HelpCenter</p>
                <p className="text-secondary fw-bold">Jobs</p>
                <p className="text-secondary fw-bold">Cookie Preferences</p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <p className="text-secondary fw-bold">Gift Cards</p>
                <p className="text-secondary fw-bold">Terms of Use</p>
                <p className="text-secondary fw-bold"> Corporate Information</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <ToggleButton
            className="mb-2 col col-sm-3    col-md-4 col-lg-2"
            id="toggle-check"
            type="checkbox"
            variant="outline-secondary"
          >
            Service Code
          </ToggleButton>
        </Row>
        <Row>
          <p className="text-secondary p-0">© 1997-2023 Netflix, Inc.</p>
        </Row>
      </Col>
    </Row>
  </Container>
);
export default MyFooter;
