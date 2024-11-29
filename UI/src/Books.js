import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';

const Books = () => {
  const { authState } = useOktaAuth();
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      if (!authState || !authState.isAuthenticated) {
        return;
      }

      try {
        const accessToken = authState.accessToken.accessToken;

        const response = await fetch('http://localhost:3000/books', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }

        const data = await response.json();
        setBooks(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchBooks();
  }, [authState]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Books</h1>
      {books.length === 0 ? (
        <p>Loading books...</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Books;
