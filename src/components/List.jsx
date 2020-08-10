import styled from 'styled-components';

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;

const List = ({ children }) => {
  return <ListStyle>{children}</ListStyle>;
};

export default List;
