import { random } from './utils';

type SetRandomInterval = (
  intervalFunction: () => void,
  minDelay: number,
  maxDelay: number,
) => { clear: () => void };

/**
 * Repeatedly calls a function with a random time delay between each call.
 *
 * @param intervalFunction - A function to be executed at random times between `minDelay` and
 * `maxDelay`. The function is not passed any arguments, and no return value is expected.
 * @param minDelay - The minimum amount of time, in milliseconds (thousandths of a second), the
 * timer should delay in between executions of `intervalFunction`.
 * @param maxDelay - The maximum amount of time, in milliseconds (thousandths of a second), the
 * timer should delay in between executions of `intervalFunction`.
 */
const setRandomInterval: SetRandomInterval = (intervalFunction, minDelay = 0, maxDelay = 0) => {
  let timeout: ReturnType<typeof setTimeout>;

  const runInterval = (): void => {
    timeout = globalThis.setTimeout(() => {
      intervalFunction();
      runInterval();
    }, random(minDelay, maxDelay));
  };

  runInterval();

  return {
    clear(): void {
      clearTimeout(timeout);
    },
  };
};

export default setRandomInterval;
