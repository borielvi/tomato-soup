import gql from 'graphql-tag';

export const QUERY_ME = gql`
    query {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                book_id
                authors
                description
                title
                image
                link
            }
        }
    }
`;