/**
 * Handles multiple promises using allSettled.
 *
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} fileName
 * @returns {Promise}
 */
import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);
}
