import {Elevator, Floor, Submit} from './elevator';
import {SimpleChannel} from '../node_modules/channel-ts/lib/channel';

function init(elevators: Elevator[], floors: Floor[]) {
  console.log('hello');
  const chan = new SimpleChannel<never>();

  const elevator = elevators[0]; // Let's use the first elevator

  // Whenever the elevator is idle (has no more queued destinations) ...
  elevator.on('idle', () => {
    // let's go to all the floors (or did we forget one?)
    elevator.goToFloor(0);
    elevator.goToFloor(1);
  });
}
