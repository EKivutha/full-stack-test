import React,{useEffect} from 'react';
import GET_BOOKS from '../Queries/bookQueris'

import { useQuery } from '@apollo/client';
import {
  useParams
} from "react-router-dom";



//display indivudual pages as per id
//each word match to token

function Books() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  
  let { idr } = useParams();
  let num = parseInt(idr);
  // const handleProceed = (e) => {
  //   history.push(generatePath("/products/:id", { id }));
  // };
  // let s = window.getSelection();
  // let oRange = s.getRangeAt();

  if (loading) return 'Loading...';
  else if (error) return `Error! ${error.message}`;
 
  else if (data) {
    console.log(data)
    console.log("id",idr)
    // console.log(oRange);
    return (
      <div>
        <h1>{data.book.title}</h1>
        <h2>{data.book.author}</h2>

        {data && data.book.pages
          .filter((page, id) => id === num)
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