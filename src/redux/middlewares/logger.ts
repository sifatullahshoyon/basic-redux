const logger = (state) => (next) => (action) => {
  //   console.log(state.getState());
  //   console.log(action);
  //   return next(action);

  console.group(action.type);
  console.info("Prv state", state.getState());
  const result = next(action);
  console.info("next state", state.getState());
  console.groupEnd();
  return result;
};

export default logger;
