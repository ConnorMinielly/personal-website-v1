import styled from 'styled-components';

const Anchor = styled.a`
  font-size: 1.75em;
  cursor: pointer;
  margin-top: 1.5em;
  color: snow;
  text-decoration: none;
  font-weight: bolder;
`;

const ListItem = ({ children, ...props }) => {
  return <Anchor {...props}>{children}</Anchor>;
};

export default ListItem;
