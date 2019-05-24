let state = null;
let listen = () => {};

export class NavState {
  constructor() {
    this.name = null
    this.color = 'blue-500'
  }
}

export function setState(newState) {
  state = newState
  listen(state)
}

export function onSet(func) {
  if (state) {
    func(state)
  } else {
    listen = func
  }
}