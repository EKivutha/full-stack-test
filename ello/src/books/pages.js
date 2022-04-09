import GET_BOOKS from '../Queries/bookQueris'

import { useQuery } from '@apollo/client';


//display indivudual pages as per id
//each word match to token

function Books() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return 'Loading...';
  else if (error) return `Error! ${error.message}`;

  else if (data) {
    return (
      data.book.pages
    )
  }
}

export default Books