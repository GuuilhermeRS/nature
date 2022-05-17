import { Container } from './styles';

import { Nav } from '../Nav';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="Nature" />

      <div>
        <Nav />
        <a href="/" className="button">Book Now</a>
      </div>
    </Container>
  );
}
