import React from 'react';
import GET_BOOKS from '../Queries/bookQueris'

import { useQuery } from '@apollo/client';


//display indivudual pages as per id
//each word match to token

function Books() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return 'Loading...';
  else if (error) return `Error! ${error.message}`;

  else if (data) {
    console.log(data)
    return (
      <div>
        <h1>{data.book.title}</h1>
        <h2>{data.book.author}</h2>

        {data && data.book.pages
          .filter((page, id) => id === 0)
          .map((page, id) => (

            <div>
              {page && page.tokens
                .filter((token, id) => id === 0)
                .map((token, id) => (
                  <div>

                    <p>
                      {token.value}
                    </p>
                  </div>
                ))}

              <p>
                {page.content}
              </p>
            </div>
          ))}

      </div>)
  }
}

export default Books