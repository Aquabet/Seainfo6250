export const SERVER = {
    AUTH_MISSING: 'auth-missing',
}

export const CLIENT = {
    NETWORK_ERROR: 'networkError',
    NO_SESSION: 'noSession',
    INVALID_WORD: 'InvalidWord'
}

export const MESSAGES = {
    [CLIENT.NETWORK_ERROR]: 'Network problems. Please try again',
    [CLIENT.NO_SESSION]: 'No login session. Please login',
    [CLIENT.AUTH_MISSING]: 'Auth missing. Please login again',
    [CLIENT.INVALID_WORD]: 'Invalid word, Please input valid word',
    default: 'Please inter username to login',
}