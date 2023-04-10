import { Elevator, Floor } from './elevator';

function init(elevators: Elevator[], floors: Floor[]) {
  const elevator = elevators[0];

  // pick up passengers in the way
  const waiting: boolean[] = [false, false, false, false, false];

  for (const floor of floors) {
    floor.on("up_button_pressed", () => {
      waiting[floor.floorNum()] = true;
    });
    floor.on("down_button_pressed", () => {
      waiting[floor.floorNum()] = true;
    });
  }

  elevator.on("stopped_at_floor", (n: number) => {
    waiting[n] = false;
  });

  elevator.on("idle", () => {
    let idx = 0;
    for (const w of waiting) {
      if (w) {
        elevator.goToFloor(idx);
        break;
      }
      idx++;
    }
  })

  elevator.on("passing_floor", (n: number) => {
    if (floors[n].buttonStates.up && elevator.destinationDirection() == "up") {
      elevator.goToFloor(n, true);
    }
    if (floors[n].buttonStates.down && elevator.destinationDirection() == "down") {
      elevator.goToFloor(n, true);
    }
  });

  elevator.on("floor_button_pressed", (n: number) => {
    elevator.goToFloor(n)
  });

}

const __submit__ = "";
