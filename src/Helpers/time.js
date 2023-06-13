/**
 * Get a country's name by its code
 * @param {string} code - (for ex. KZ)
 * @returns {string} country's name 
 */
function getCountryName(code) {
    const name = new Intl.DisplayNames(['en'], {type: 'region'});
    return name.of(code);
}

/**
 * Convert milliseconds to hours, minutes, and seconds
 * @param {number} ms - time in milliseconds
 * @returns {object} hours, minutes, seconds
 */
function msToTime(ms) {
    const hours = Math.floor((ms  / (1000 * 60 * 60) ) % 24)
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const seconds = Math.floor((ms / 1000) % 60);

    return {hours, minutes, seconds};
}

/**
 * Prepend a 0 if the number is less than 10
 * @param {number} n - integer
 * @returns 
 */
function getZero(n) {
    return n < 10 ? '0' + n : n;
}

/**
 * Get a timezone offset in a human-readable format
 * @param {number} timezone - timezone offset in ms
 * @returns {string} formatted time
 */
function formatTimezone(timezone) { 
    const timezoneObject = msToTime(timezone);

    let hours = getZero(timezoneObject.hours);
    if (timezoneObject.hours > 0) {
        hours = '+' + getZero(timezoneObject.hours);
    } else if (timezoneObject.hours < 0) {
        hours = '-' + getZero(Math.abs(timezoneObject.hours));
    } 

    const minutes = getZero(msToTime(timezone).minutes);

    return `${hours}:${minutes}`;
}

/**
 * Get sunset or sunrise time in a human-readable format
 * @param {number} sun - sunset or sunrise time in ms
 * @param {number} timezone - timezone offset in s
 * @returns {string} formatted time
 */
function getSunTime(sun, timezone) {
    const {hours, minutes} = msToTime((sun+timezone)*1000);
    return `${getZero(hours)}:${getZero(minutes)}`;
}

/**
 * Get the current time in a timezone
 * @param {number} timezone - timezone offset in ms
 * @returns {string} formatted time
 */
function getCurrentTime(timezone) {
    const currentLocalTime = new Date(Date.now());
    const currentTimeInTimezone = new Date(Date.now() + (timezone) + (currentLocalTime.getTimezoneOffset() * 60 * 1000)).toLocaleTimeString('en-GB');

    const pattern = /^([0-9]+:[0-9]+)/;
    const time = currentTimeInTimezone.match(pattern)[0];

    return time;
}

export {
    getCountryName,
    getCurrentTime,
    getSunTime,
    getZero,
    formatTimezone,
    msToTime
}