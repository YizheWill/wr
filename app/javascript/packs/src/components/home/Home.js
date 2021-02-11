import React, { useState } from 'react';
import Navbar from './Navbar';
import Books from '../book/Books';
import Authors from '../Authors';
import ToggleButtons from './ToggleButton';

function Home() {
  const [page, setPage] = useState('books');
  return (
    <div style={{ marginTop: 100 }}>
      <ToggleButtons setPage={setPage} />
      {page === 'books' ? <Books /> : <Authors />}
    </div>
  );
}

export default Home;
