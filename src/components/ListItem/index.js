import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button';

const Container = styled.div`
  width: 100px;
  border: 1px solid #bbb;
  padding: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Roboto', sans-serif;
`;

const EditBtn = styled(Button)`
  padding: 2px 10px;
`;

const ListItem = ({ id, title }) => (
  <Container>
    <p>{title}</p>
    <Link to={`edit/${id}`}>
      <EditBtn type="button">edit</EditBtn>
    </Link>
  </Container>
);
ListItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
};

export default ListItem;
