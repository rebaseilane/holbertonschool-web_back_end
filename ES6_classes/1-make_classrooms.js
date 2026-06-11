import ClassRoom from './0-classroom.js';

/**
 * initializeRooms - creates 3 ClassRoom objects
 * Return: array of ClassRoom instances
 */
export default function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}