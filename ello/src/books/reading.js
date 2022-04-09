import React from 'react';
import GET_BOOKS from '../Queries/bookQueris'

import { useQuery } from '@apollo/client';


function Books() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  console.log(data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( ${error.message}`</p>;

  if (data) return (
    <div>

      <h1>{data.book.title}</h1>
      <h2>{data.book.author}</h2>
      <div> {data.book.pages.map(page => (
        <option key={page.id} value={page.id}>
          {page.content}
          <div> {data.book.pages.tokens.map(token => (
            <option key={token.id} value={token.id}>
              {token.position}
              {token.value}

            </option>
          ))}</div>
        </option>
      ))}</div>
      {/* <p>{data.book.pages}</p> */}
    </div>
  );
}

export default Books;