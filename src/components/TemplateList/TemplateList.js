import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ListItem from '../ListItem';
import Button from '../Button';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TemplateContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Heading = styled.h2`
  font-family: 'Roboto', sans-serif;
`;

const TemplateList = ({ templates }) => (
  <div>
    <Header>
      <Heading>Templates</Heading>
      <Link to="/new">
        <Button type="button">Add Template</Button>
      </Link>
    </Header>
    <TemplateContainer>
      {templates.map(item => (
        <ListItem title={item.title} id={item.id} />
      ))}
    </TemplateContainer>
  </div>
);

TemplateList.propTypes = {
  templates: PropTypes.array,
};

const mapStateToProps = ({ templates }) => ({
  templates: Object.values(templates),
});

export default connect(mapStateToProps)(TemplateList);
