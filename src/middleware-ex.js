const store = {
  dispath(action) {
    console.log('dispath', action);
  }
}

const logger1 = store => next => action => {
  console.log('log 1', action);
  return next(action);
};

const logger2 = store => next => action => {
  console.log('log 2', action);
  return next(action);
};

const applyMiddleware = middlewares =>
  middlewares.reverse().reduce((next, middleware) => {
    return middleware(store)(next);
  }, store.dispath);

export function foo() {
  //store.dispath({type: 'add', text: 'read'});
  applyMiddleware([logger1, logger2])(({type: 'add', text: 'read'}));
}
