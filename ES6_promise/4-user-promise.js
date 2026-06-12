/**
 * Returns a resolved user promise.
 *
 * @param {string} firstName
 * @param {string} lastName
 * @returns {Promise}
 */
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}
