(function iife() {
  /* eslint no-param-reassign: 0 */
  if (console && console.log) {
    const _log = console.log;

    console.log = function log(...args) {
      Object.keys(args).forEach((key) => {
        if (typeof args[key].toJS === 'function') {
          args[key] = args[key].toJS();
        }
      });

      _log.apply(console, args);
    };
  }
}());
