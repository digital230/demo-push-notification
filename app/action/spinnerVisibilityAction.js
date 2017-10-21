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