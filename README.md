# Bejeweled Grid

A simple implementation of a grid from the game Bejeweled.

## Design Considerations

The following design considerations were made during implementation:

- Encapsulation of rendering logic and style via the `Grid` [Web Component](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- Modular code without the overhead of build toolchains by using [ECMAScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Custom Events](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent) for communicating between components
- A single ["bitboard"](https://www.chessprogramming.org/Bitboards) per color for simple grid logic
  - (Javascript does not have a 64bit integer, or this would have been preferred)
- ExpressJS for serving static files with cache-control
  - [(This was a requirement due to ES Modules and CORS)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#other_differences_between_modules_and_standard_scripts)
- Scalable rendering of gems via SVGs

## Getting Started

```
git clone git@github.com:michaeljoelphillips/bejeweled.git
cd bejeweled
make start
```

The server runs on port `8080`, you may access it from your browser at [http://localhost:8080](http://localhost:8080).

Note, `yarn` and `node` must be installed on the host system.

## Caveats

- Random probability is exploited in this implementation, it is unlikely but possible for a grid to be rendered with no initial solutions
- Tests for the core grid generation logic could be added to enforce certain domain invariants, such as a grid with no starting linear groups
