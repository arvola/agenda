'use strict';
const debug = require('debug')('agenda:useChannels');
const noCallback = require('../no-callback');

/**
 * Locks a named channel from processing more jobs.
 *
 * @name Agenda#useChannels
 * @function
 * @param {Boolean} use Name of the channel
 */
module.exports = async function(use) {
  // eslint-disable-next-line prefer-rest-params
  noCallback(arguments, 1);
  debug('Agenda.useChannels(%s)', use);
  this._useChannels = use;
};
