'use strict';

// Sliding window of request timestamps (last 1 hour)
const requestTimestamps = [];
const ONE_HOUR_MS = 60 * 60 * 1000;
const LOG_INTERVAL_MS = 5 * 60 * 1000; // log every 5 minutes
const DAILY_TARGET = 30000;
const HOURLY_TARGET = Math.round(DAILY_TARGET / 24); // ~1250

function pruneOldTimestamps() {
  const cutoff = Date.now() - ONE_HOUR_MS;
  while (requestTimestamps.length > 0 && requestTimestamps[0] < cutoff) {
    requestTimestamps.shift();
  }
}

function logStats() {
  pruneOldTimestamps();
  const countLastHour = requestTimestamps.length;
  const projectedDaily = countLastHour * 24;
  const status = countLastHour <= HOURLY_TARGET ? 'OK' : 'WARNING';

  console.log(
    `[API Counter] Last hour: ${countLastHour} requests | ` +
    `Projected daily: ${projectedDaily} | ` +
    `Hourly target: ${HOURLY_TARGET} | ` +
    `Status: ${status}`
  );
}

// Start periodic logging
let logInterval = null;

module.exports = (config, { strapi }) => {
  // Start the interval when the middleware is first initialized
  if (!logInterval) {
    logInterval = setInterval(logStats, LOG_INTERVAL_MS);
    // Unref so the interval doesn't keep the process alive on shutdown
    if (logInterval.unref) logInterval.unref();
  }

  return async (ctx, next) => {
    // Only count /api/* requests (skip admin, uploads, etc.)
    if (ctx.path.startsWith('/api/')) {
      requestTimestamps.push(Date.now());
    }
    await next();
  };
};
