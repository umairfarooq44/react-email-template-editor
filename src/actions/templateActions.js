import * as actionTypes from './actionTypes';

const addUpdateTemplate = template => ({
  type: actionTypes.ADD_EDIT_TEMPLATE,
  payload: template,
});

export default addUpdateTemplate;
