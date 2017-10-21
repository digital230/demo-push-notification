
export function showSpinner() {
    return {
        type: 'SHOW-SPINNER',
        visible: true,
    };
}

export function hideSpinner() {
    return {
        type: 'HIDE-SPINNER',
        visible: false,
    };
}

export function inc(value, date) {
  return {
        type: 'INC',
        inc: value,
        date,
    };
}

export function saveAlert(todayAlert) {
    return {
        type: 'ALERT_STR',
        todayAlert,
    };
}

export function setSwitchState(value) {
    return {
        type: 'Switch',
        switch: value,
    };
}

export function showTimePicker(val) {
    return {
        type: 'SHOW-TIME-PICKER',
        timePicker: val,
    }
}

export function setTime(time) {
    return {
        type: 'SET-TIME',
        time,
    }
}

