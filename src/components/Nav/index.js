import { useState } from 'react';
import { Navbar } from './styles';

const pages = ['Home', 'About', 'Experiences', 'Packages', 'Contact Us', 'Blog'];

export function Nav() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handleCurrentPage = (event) => {
    const { id } = event.target;
    setCurrentPage(id);
  };

  return (
    <Navbar>
      {pages.map((page) => (
        <a
          key={page}
          href="/"
          className={currentPage === page ? 'active' : ''}
          onClick={handleCurrentPage}
        >
          {page}
        </a>
      ))}
    </Navbar>
  );
}
