import propTypes from 'prop-types';
import { Container } from './styles';

export function CardCategory({ category, image }) {
  return (
    <Container>
      <img src={image} alt={category} />
      <h4 href="/">{category}</h4>
    </Container>
  );
}

CardCategory.propTypes = {
  category: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
};
