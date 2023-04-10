// copied from https://gist.github.com/Medeah/e42c1efef39596109f72

export interface Elevator {
  /** Queue the elevator to go to specified floor number. If you specify true as second argument, the elevator will go to that floor directly, and then go to any other queued floors.*/
  goToFloor: (floor: number, directly?: boolean) => void;
  /** Clear the destination queue and stop the elevator if it is moving. Note that you normally don't need to stop elevators - it is intended for advanced solutions with in-transit rescheduling logic. Also, note that the elevator will probably not stop at a floor, so passengers will not get out.*/
  stop: () => void;
  /** Gets the floor number that the elevator currently is on.*/
  currentFloor: () => number;
  /** Gets or sets the going up indicator, which will affect passenger behaviour when stopping at floors.*/
  goingUpIndicator: (set?: boolean) => void;
  /** Gets or sets the going down indicator, which will affect passenger behaviour when stopping at floors.*/
  goingDownIndicator: (set?: boolean) => void;
  /** Gets the maximum number of passengers that can occupy the elevator at the same time.*/
  maxPassengerCount: () => number;
  /** Gets the load factor of the elevator. 0 means empty, 1 means full. Varies with passenger weights, which vary - not an exact measure.*/
  loadFactor: () => number;
  /** Gets the direction the elevator is currently going to move toward. Can be "up", "down" or "stopped".*/
  destinationDirection: () => string;
  /** The current destination queue, meaning the floor numbers the elevator is scheduled to go to. Can be modified and emptied if desired. Note that you need to call checkDestinationQueue() for the change to take effect immediately.*/
  destinationQueue: number[];
  /** Checks the destination queue for any new destinations to go to. Note that you only need to call this if you modify the destination queue explicitly.*/
  checkDestinationQueue: () => void;
  /** Gets the currently pressed floor numbers as an array.*/
  getPressedFloors: () => number[];
  /** Listen for events ("idle", "stopped_at_floor", "passing_floor", "floor_button_pressed")*/
  on: (events: string, callback: Function) => void;
  one: (events: string, callback: Function) => void;
}

export interface Floor {
  /** Gets the floor number of the floor object.*/
  floorNum: () => number;
  /** Listen for events ("up_button_pressed", "down_button_pressed")*/
  on: (events: string, func: Function) => void;
  /** State of the up and down button at a floor. "activated" or "" */
  buttonStates: {down: string; up: string};
}
