import React, { useRef, useState } from 'react';
import EmailEditor from 'react-email-editor';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import addUpdateTemplate from '../../actions/templateActions';

const TemplateEditor = ({ addUpdateEmailTemplate, match, history, designTemplate = {} }) => {
  const [title, setTitle] = useState(designTemplate.title || '');
  const editorRef = useRef(null);

  const onLoad = () => {
    if (designTemplate.design && editorRef.current) {
      editorRef.current.loadDesign(designTemplate.design);
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
      <form onSubmit={saveDesign}>
        <input required type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <button type="submit">Save Template</button>
      </form>
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
