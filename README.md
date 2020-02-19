# setRandomInterval

setRandomInterval is an adaptation of
[JavaScript's native `setInterval()`function](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval),
allowing for both a minimum and maximum delay to be passed in, which is then used to invoke the
callback at random intervals within the given range.

## Purpose

There may be times where you'd like repetitive function calls to be executed on a more
naturally-occurring timeline, as opposed to executing at fixed intervals. This is often the case
when trying to emulate the real world in game development.

## Installation

```sh
npm i set-random-interval
```

## Usage

```javascript
import setRandomInterval from 'set-random-interval';

// Pass in the callback, minimum delay (milliseconds), and maximum delay (milliseconds).
const interval = setRandomInterval(() => console.log('Hello World!'), 1000, 5000);

// Clear the interval if/when you'd like.
interval.clear();
```
