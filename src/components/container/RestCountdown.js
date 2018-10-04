import {connect} from 'react-redux';
import {RestCountdown} from '../presentational/RestCountdown.js';
import {changeRestCountdown, pauseRestCountdown, resetRestCountdown, startRestCountdown} from '../../ActionCreators.js';


export function renderRemainingString(remaining, runningSince) {
  let totalRemaining = remaining;
  if (runningSince) {
    totalRemaining -= Date.now() - runningSince;
  }
  if (totalRemaining <= 0) {
    totalRemaining = 0;
  }
  return millisecondsToHuman(totalRemaining);
}

function minutesToMilliseconds(mins) {
  const ms = 1000 * 60 * mins;
  return ms;
}

function millisecondsToHuman(ms) {
  const hundredths = Math.floor((ms / 10) % 10);
  const tenths = Math.floor((ms / 100) % 10);
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / 1000 / 60) % 60);


  const humanized = [
    minutes.toString(),
    pad(seconds.toString(), 2),
    tenths.toString(),
    hundredths.toString()
  ];

  return humanized;
}

function pad(numberString, size) {
  let padded = numberString;
  while (padded.length < size) padded = `0${padded}`;
  return padded;
}


export function restCountdownReducer(
  state = {
    remaining: 0,
    runningSince: null,
    restTime : null
  }, action) {
  if (action.type === 'START_REST_COUNTDOWN') {
    const new_state = {
      remaining : state.remaining,
      runningSince : Date.now(),
      restTime : state.restTime
    };
    return new_state;
  } else if (action.type === 'PAUSE_REST_COUNTDOWN') {
    const new_state = {
      remaining :  state.remaining - (Date.now() - state.runningSince),
      runningSince : null,
      restTime : state.restTime
    };
    return new_state;
  } else if (action.type === 'RESET_REST_COUNTDOWN') {
    const new_state = {
      remaining : minutesToMilliseconds(state.restTime),
      runningSince : null,
      restTime : state.restTime
    };
    return new_state;
  } else if (action.type === 'CHANGE_REST_COUNTDOWN') {
    const new_state = {
      remaining : minutesToMilliseconds(action.restTime),
      runningSince : null,
      restTime : action.restTime
    };
    return new_state;
  } else {
    return state;
  }
}

const mapStateToRestCountdownProps = (state) => ({
  ...(state.restCountdown),
});

const mapDispatchToRestCountdownProps = (dispatch) => (
  {
    onClickStart: () => (
      dispatch(startRestCountdown())
    ),
    onClickReset: () => (
      dispatch(resetRestCountdown())
    ),
    onClickPause: () => (
      dispatch(pauseRestCountdown())
    ),
    onTimeSelected: (restTime) => (
      dispatch(changeRestCountdown(restTime))
    ),
  }
);

export const RestCountdownContainer = connect(
  mapStateToRestCountdownProps,
  mapDispatchToRestCountdownProps
)(RestCountdown);
