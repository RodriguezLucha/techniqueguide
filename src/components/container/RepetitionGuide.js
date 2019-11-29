import {connect} from 'react-redux';
import {RepetitionGuide} from '../presentational/RepetitionGuide.js';
import {incrementStepsRepGuide, pauseRepGuide, resetRepGuide} from '../../ActionCreators.js';

const synth = window.speechSynthesis;

function speakCount(count){
  if (synth.speaking) {
    console.error('speechSynthesis.speaking');
    return;
  }
  let utterThis = new SpeechSynthesisUtterance(count);
  synth.speak(utterThis);
}


export function repetitionGuideReducer(
  state = {
    steps: ['1', '2', 'Hold', '3', 'Count'],
    count: 0,
    step: null,
    isRunning: false
  }, action) {
  if(action.type === 'INCREMENT_REP_GUIDE'){
    let new_state = {...state};
    if(new_state.step === null) {
      new_state.step = 0;
    } else {
      new_state.step = (new_state.step + 1) % new_state.steps.length;
      if((new_state.step + 1) % new_state.steps.length === 1){
        new_state.count++;
      }
      new_state.isRunning = true;
    }

    if(new_state.step !== null){
      let step_string = new_state.steps[new_state.step];

      if(new_state.step % 5 === 4){
        step_string = new_state.count + 1;
      }
      speakCount(step_string);
    }

    return new_state;
  } 
  else if (action.type === 'RESET_REP_GUIDE'){
    let new_state = {...state};
    new_state.isRunning = false;
    new_state.count = 0;
    new_state.step = null;
    return new_state;
  } else if (action.type === 'PAUSE_REP_GUIDE'){
    let new_state = {...state};
    new_state.isRunning = false;
    return new_state;
  } else {
    return state;
  }
}

const mapStateToRepGuideProps = (state) => ({
  ...(state.repetitionGuide),
});

const mapDispatchToRepGuideProps = (dispatch) => (
  {
    onClickReset: () => (
      dispatch(resetRepGuide())
    ),
    onClickPause: () => (
      dispatch(pauseRepGuide())
    ),
    incrementSteps: () => (
      dispatch(incrementStepsRepGuide())
    )
  }
);

export const RepetitionGuideContainer = connect(
  mapStateToRepGuideProps,
  mapDispatchToRepGuideProps
)(RepetitionGuide);
