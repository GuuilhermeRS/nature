import logo from '../../assets/images/logo.svg';
import image from '../../assets/images/image1.png';
import { Container } from './styles';

export function Section() {
  return (
    <Container>
      <img src={image} alt="Travel" />
      <div>
        <h1>
          Let’s Enjoy Your Vacation with
          <img src={logo} alt="Travel" />
        </h1>
        <p>Are you planning a vacation to enjoy your free time? Looking for a place to explore, eat and enjoy your vacation with your loved ones or Are you a solo traveler who travels often for a wonderful experiences.</p>
        <a href="/">Book Now</a>
      </div>
    </Container>
  );
}
