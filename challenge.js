const pi = 3.14

const areaOfCircle = (radius) => {
    if(!isNaN(radius)) {
        return pi * Math.pow(radius, 2)
    } else {
        return 'please enter a number'
    }
}
const ifUpperCase = (str) => {
    if(str && typeof str === 'string') {
        const code = str.charCodeAt(0)
        return code >= 65 && code <= 90 ? true : false
    } else {
        return 'please enter a string'
    }
}

module.exports = {
    areaOfCircle,
    ifUpperCase
}
