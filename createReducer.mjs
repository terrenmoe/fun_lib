const { hasOwnProperty } = Object.prototype;

export default function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}
