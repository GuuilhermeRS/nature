import { CardCategory } from '../CardCategory';

import resort from '../../assets/images/cards/resort.png';
import camping from '../../assets/images/cards/camping.png';
import beach from '../../assets/images/cards/beach.png';
import { Container } from './styles';

const categories = [
  { name: 'Resort', image: resort },
  { name: 'Camping', image: camping },
  { name: 'Beach', image: beach },
];

export function TravelCategories() {
  return (
    <Container>
      <h2>Discover Nature Experiences</h2>

      <div className="container">
        {categories.map((category) => (
          <CardCategory
            key={category.name}
            category={category.name}
            image={category.image}
          />
        ))}
      </div>

    </Container>
  );
}
