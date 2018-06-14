import { random } from 'lodash';

export const setRandomInterval = (callback, lower, upper) => {
  let activeTimeout;

  const timeout = () => {
    activeTimeout = setTimeout(
      () => {
        callback();
        timeout();
      },
      random(lower, upper),
    );
  };

  timeout();

  return { clear: () => clearTimeout(activeTimeout) };
};

export default setRandomInterval;
