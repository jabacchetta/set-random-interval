# setRandomInterval

setRandomInterval is an adaptation of [JavaScript's native `setInterval()` function](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval), allowing for a min/max range to be passed through as the delay, which is then used to invoke the callback at random intervals within the given range.

## Purpose

There may be times where you'd like repetitive function calls to be exectued on a more naturally-occuring timeline.

This is often the case in game development. In the real world, for example, snow doesn't fall at static intervals. Therefore, an animation emulating a snow storm would probably look more convincing when implemented with dynamic, random intervals.

## Installation

```sh
npm i set-random-interval --save
```

## Usage

```javascript
import setRandomInterval from 'set-random-interval';

const callback = () => console.log('callback executed');

// pass in callback, minimum delay (milliseconds), maximum delay (milliseconds)
const interval = setRandomInterval(callback, 1000, 5000);

// clear the interval if/when you'd like (in this case, we clear after 10 seconds)
setTimeout(interval.clear, 10000);
```
