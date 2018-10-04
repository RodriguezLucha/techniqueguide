
export function startTimerGuide() {
  return {
    type: 'START_TIMER_GUIDE'
  };
}

export function resetTimerGuide() {
  return {
    type: 'RESET_TIMER_GUIDE'
  };
}

export function pauseTimerGuide() {
  return {
    type: 'PAUSE_TIMER_GUIDE'
  };
}

export function startRestCountdown() {
  return {
    type: 'START_REST_COUNTDOWN'
  };
}
export function resetRestCountdown() {
  return {
    type: 'RESET_REST_COUNTDOWN'
  };
}
export function pauseRestCountdown() {
  return {
    type: 'PAUSE_REST_COUNTDOWN'
  };
}
export function changeRestCountdown(restTime) {
  return {
    type: 'CHANGE_REST_COUNTDOWN',
    restTime: restTime
  };
}
export function addEntry(data) {
  return {
    type: 'ADD_ENTRY',
    data: data

  };
}
export function editEntry(selected, text) {
  return {
    type: 'EDIT_ENTRY',
    selected: selected,
    text: text
  };
}
export function deleteEntry(selected) {
  return {
    type: 'DELETE_ENTRY',
    selected: selected,
  };
}
export function selectEntry(selected) {
  return {
    type: 'SELECT_ENTRY',
    selected: selected
  };
}
export function incrementStepsRepGuide() {
  return {
    type: 'INCREMENT_REP_GUIDE'
  };
}

export function resetRepGuide() {
  return {
    type: 'RESET_REP_GUIDE'
  };
}

export function pauseRepGuide() {
  return {
    type: 'PAUSE_REP_GUIDE'
  };
}
