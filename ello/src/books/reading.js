import React from 'react';
import GET_BOOKS from '../Queries/bookQueris'

import { useQuery } from '@apollo/client';


//display indivudual pages as per id
//each word match to token

function Books() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  // let s = window.getSelection();
  // let oRange = s.getRangeAt();

  if (loading) return 'Loading...';
  else if (error) return `Error! ${error.message}`;
 
  else if (data) {
    console.log(data)
    // console.log(oRange);
    return (
      <div>
        <h1>{data.book.title}</h1>
        <h2>{data.book.author}</h2>

        {data && data.book.pages
          .filter((page, id) => id === 0)
          .map((page, id) => (

            <div>

              <p>
                {page.content}
              </p>
            </div>
          ))}

      </div>)
  }
}

export default Books