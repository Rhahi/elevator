import {Elevator, Floor} from './elevator';

function init(elevators: Elevator[], floors: Floor[]) {
  console.log('hello');

  const elevator = elevators[0]; // Let's use the first elevator

  // Whenever the elevator is idle (has no more queued destinations) ...
  elevator.on('idle', () => {
    // let's go to all the floors (or did we forget one?)
    elevator.goToFloor(0);
    elevator.goToFloor(1);
  });
}

const __submit__ = '';
