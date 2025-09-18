'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const array = sourceString.split(';');

  array.forEach((row) => {
    const parts = row.split(':');

    if (parts.length === 2) {
      result[parts[0].trim()] = parts[1].trim();
    }
  });

  return result;
}

module.exports = convertToObject;
