/**
 * Simulates a successful photo upload.
 *
 * @returns {Promise}
 */
export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}

/**
 * Simulates a successful user creation.
 *
 * @returns {Promise}
 */
export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}