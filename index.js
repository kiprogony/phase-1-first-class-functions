
function receivesAFunction (callback) {
  callback();
}

function returnsANamedFunction () {
  return function namedFn() {
    console.log("this is a mamed function");
  };
}

function returnsAnAnonymousFunction () {
  return () => console.log("this is an anonymous function");
}