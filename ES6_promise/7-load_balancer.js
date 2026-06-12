/**
 * Returns the first resolved promise.
 *
 * @param {Promise} chinaDownload
 * @param {Promise} USDownload
 * @returns {Promise}
 */
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
