import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ListItem from '../ListItem';

const TemplateList = ({ templates }) => (
  <div>
    <Link to="/new">
      <button type="button">Add Template</button>
    </Link>
    {templates.map(item => (
      <ListItem title={item.title} id={item.id} />
    ))}
  </div>
);

TemplateList.propTypes = {
  templates: PropTypes.array,
};

const mapStateToProps = ({ templates }) => ({
  templates: Object.values(templates),
});

export default connect(mapStateToProps)(TemplateList);
