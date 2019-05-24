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
  console.log(state)
}

export function onSet(func) {
  if (state) {
    func(state)
    console.log('call')
  } else {
    listen = func
    console.log('listen')
  }
}