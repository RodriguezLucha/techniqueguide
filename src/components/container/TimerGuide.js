import { connect } from 'react-redux';
import { TimerGuide } from '../presentational/TimerGuide.js';
import { pauseTimerGuide, resetTimerGuide, startTimerGuide } from '../../ActionCreators.js';


export function renderElapsedString(elapsed, runningSince) {
  let totalElapsed = elapsed;
  if (runningSince) {
    totalElapsed += Date.now() - runningSince;
  }
  return millisecondsToHuman(totalElapsed);
}

function millisecondsToHuman(ms) {
  const hundredths = Math.floor((ms / 10) % 10);
  const tenths = Math.floor((ms / 100) % 10);
  const seconds = Math.floor(ms / 1000);

  const humanized = [
    seconds.toString(),
    tenths.toString(),
    hundredths.toString()
  ];

  return humanized;
}


export function timerGuideReducer(
  state = {
    elapsed: 0,
    runningSince: null
  }, action) {
  if (action.type === 'START_TIMER_GUIDE') {
    const new_state = {
      elapsed : state.elapsed,
      runningSince : Date.now()
    };
    return new_state;
  } else if ( action.type === 'RESET_TIMER_GUIDE') {
    const new_state = {
      elapsed : 0,
      runningSince : null
    };
    return new_state;
  } else if ( action.type === 'PAUSE_TIMER_GUIDE') {
    const new_state = {
      elapsed : (Date.now() - state.runningSince ) + state.elapsed,
      runningSince : null
    };
    return new_state;
  } else {
    return state;
  }
}

const mapStateToTimerGuideProps = (state) => ({
  ...(state.timerGuide),
});

const mapDispatchToTimerGuideProps = (dispatch) => (
  {
    onClickStart: () => (
      dispatch(startTimerGuide())
    ),
    onClickReset: () => (
      dispatch(resetTimerGuide())
    ),
    onClickPause: () => (
      dispatch(pauseTimerGuide())
    ),
  }
);

export const TimerGuideContainer = connect(
  mapStateToTimerGuideProps,
  mapDispatchToTimerGuideProps
)(TimerGuide);
