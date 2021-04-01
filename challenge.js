
/**
 * calculate area of circle
 * @param {number} radius radius for the circle
 * @returns number
 */
const areaOfCircle = (radius) => {
    if(!isNaN(radius)) {
        return Math.PI * Math.pow(radius, 2)
    } else {
        throw TypeError("Wrong type given, expected a number")
    }
}

/**
 * checks if first character is uppercase
 * @param {string} str string to check
 * @returns boolean
 */
const ifUpperCase = (str) => {
    if(str && typeof str === 'string') {
        const code = str.charCodeAt(0)
        return code >= 65 && code <= 90 ? true : false
    } else {
        throw TypeError("Wrong type given, expected a string")
    }
}

module.exports = {
    areaOfCircle,
    ifUpperCase
}
