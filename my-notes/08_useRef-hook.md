## UseRef

- Box (object) with a **mutable** .current property that is **persisted across renders** ("normal" variables are always reset)

- 2 big use cases:

  - Creating a variable that statys teh same between renders (previous state, setTimeout id, etc.)
  - Selecting and storing DOM elements

- Refs are for **data that is NOT rendered**: usually only appear in event handlers or effects, not in JSX (otherwise use state)

- Do **NOT** read write or read .current in render logic (like state)

```
const myRef = useRef(23)

myRef.current = 1000; // We can write to and read from the ref using .current
```

### State vs Refs

Both -> Persists across renders
Only Sate -> Updating causes re-render | Immutable | async updates

Need to Store data -> Will data change at some Point -> NO -> Regular const variable
-> YES -> Should it re-render component -> NO -> Ref (useRef) (preserving previous state or storing the id of SetTimeout)
-> YES -> State (useState)
