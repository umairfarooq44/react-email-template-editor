import React, { useRef, useState } from 'react';
import EmailEditor from 'react-email-editor';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import addUpdateTemplate from '../../actions/templateActions';
import Button from '../Button';

const FormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const TemplateEditor = ({ addUpdateEmailTemplate, match, history, designTemplate = {} }) => {
  const [title, setTitle] = useState(designTemplate.title || '');
  const editorRef = useRef(null);

  const onLoad = () => {
    if (designTemplate.design) {
      // because ref was undefined so using https://github.com/unlayer/react-email-editor/issues/7#issuecomment-348227970
      if (editorRef.current) {
        editorRef.current.loadDesign(designTemplate.design);
      } else {
        setTimeout(() => editorRef.current.loadDesign(designTemplate.design), 3000);
      }
    }
  };

  const saveDesign = e => {
    let {
      params: { id },
    } = match;
    e.preventDefault();
    if (!id) {
      id = uniqid();
    }
    editorRef.current.saveDesign(design => {
      addUpdateEmailTemplate({ id, title, design });
      history.push('/');
    });
  };

  return (
    <div>
      <FormContainer onSubmit={saveDesign}>
        <input
          required
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          maxLength={15}
        />
        <Button type="submit">Save Template</Button>
      </FormContainer>
      <EmailEditor ref={editorRef} onLoad={designTemplate.design && onLoad} />
    </div>
  );
};

TemplateEditor.propTypes = {
  addUpdateEmailTemplate: PropTypes.func,
  match: PropTypes.object,
  history: PropTypes.object,
  designTemplate: PropTypes.object,
};

const mapStateToProps = ({ templates }, { match: { params: id } }) => ({
  designTemplate: templates[id.id],
});

const mapDispatchToProps = dispatch => ({
  addUpdateEmailTemplate: template => dispatch(addUpdateTemplate(template)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TemplateEditor);
