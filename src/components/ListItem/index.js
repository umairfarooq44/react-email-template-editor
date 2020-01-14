import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid;
`;

const ListItem = ({ id, title }) => (
  <Container>
    {title}
    <Link to={`edit/${id}`}>
      <button type="button">edit</button>
    </Link>
  </Container>
);
ListItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
};

export default ListItem;
