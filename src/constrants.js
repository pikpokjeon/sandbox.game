export const CUBE_TYPE_COLOR = {
    a: '#393939',
    b: '#2157f3',
    y: '"#ffeb3b"',
    r: '#f44336',
    j: '#673ab7'
}

export const CUBE_COLOR = {
    DEFAULT_STOKE: '#abadb4',
    FOCUS_STROKE: '#ee24e3',
    FILL: 'white'
}

export const BAORD_COLOR = {
    DEFAULT: 'transparent',
    FOCUSED: '#d3ee24',
    POPUP: 'white',
    QUE: '#393939',
    BUTTON: '#c2e7ff',
    TEXT: '#393939',
}

export const CUBE_INFO = {
    TYPE_LEN: 14,
    JOCKER_SET: 1,
    TYPE_KEY_COUNT: 2,
    TYPES: ['a', 'b', 'y', 'r', 'j']
}

export const PLAY_DATA = {
    TIME: 60,
    INIT_SUM: 30,
}

export const CUBE_GROUP_DATA = {
    MIN_LEN: 3,
}

export const CUBE_GAP_INFO = {
    0: {
        KEY: 'NUM',
        KEYTYPE: 'number',  // "NUM"
        HAS_JOCKER: true,
        MAX_LEN: 5,
        ORDERBY: 'string',  //
    },
    1: {
        KEY: 'TYPE',
        KEYTYPE: 'string',  // "TYPE"
        HAS_JOCKER: true,
        MAX_LEN: 14,
        ORDERBY: 'number'
    }
}