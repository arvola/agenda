'use strict';

/**
 * Sets a channel name for this job to prevent concurrent processing in one channel
 * @name Job#channel
 * @function
 * @param {String} channel Channel name for this job
 * @returns {exports} instance of Job
 */
module.exports = function(channel) {
  this.attrs.channel = channel;
  return this;
};
