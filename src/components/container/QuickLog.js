import {connect} from 'react-redux';
import {QuickLog} from '../presentational/QuickLog.js';
import {addEntry, deleteEntry, editEntry, selectEntry} from '../../ActionCreators.js';

const uuidv4 = require('uuid/v4');

export function quickLogReducer(
  state = [
    {
      data:'Push Ups: 1, 2, 3',
      key : 1,
      active: false
    },
    {
      data :'Pull Ups: 4, 5, 6',
      key : 2,
      active: false
    },
    {
      data :'Squats: 7, 8, 9',
      key : 3,
      active: false
    }
  ], action) {
  if (action.type === 'SELECT_ENTRY') {
    const new_state = state.map(obj => {
      if(obj.key === action.selected){
        obj.active = !obj.active;
      } else {
        obj.active = false;
      }
      return obj;
    });
    return new_state;
  } else if (action.type === 'EDIT_ENTRY'){
    const new_state = [...state];
    for (let i = 0; i < new_state.length; i++) {
      if(new_state[i].key === action.selected) {
        new_state[i].data = action.text;
      }
    }
    return new_state;
  } else if (action.type === 'DELETE_ENTRY'){
    let new_state = [...state];
    new_state = new_state.filter(x => x.key !== action.selected);
    return new_state;
  } else if (action.type === 'ADD_ENTRY'){
    const new_state = [...state];
    new_state.push({
      data : action.data,
      key : uuidv4(),
      active : false
    });
    return new_state;
  } else {
    return state;
  }
}

const mapStateToQuickLogProps = (state) => ({
  entries : [...(state.quickLog)],
});

const mapDispatchToQuickLogProps = (dispatch) => (
  {
    onClickAdd: (data) => (
      dispatch(addEntry(data))
    ),
    onClickEdit: (selected, text) => (
      dispatch(editEntry(selected, text))
    ),
    onClickRemove: (selected) => (
      dispatch(deleteEntry(selected))
    ),
    onClickSelectRow: (selected) => (
      dispatch(selectEntry(selected))
    ),
  }
);

export const QuickLogContainer = connect(
  mapStateToQuickLogProps,
  mapDispatchToQuickLogProps
)(QuickLog);
