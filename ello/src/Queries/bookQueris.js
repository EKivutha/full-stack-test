import { gql} from '@apollo/client';
const GET_BOOKS = gql`
query PagesAndTokens{
    book {
      author
      title
      pages {
        content
        tokens{
          position
          value
        }
      }
    }
  }
`;

export default GET_BOOKS;