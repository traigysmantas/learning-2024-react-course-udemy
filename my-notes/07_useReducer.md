## UseReducer

- An alternative way of setting state, ideal for complex state and related piecies of state
- Stores related pieces of state in a state object
- useReducer needs **reducer**: function containing **all logic to update state. Decouples state logic from component**
- **reducer**: pure function (**no side effects**) that takes current state and action, **and returns the next state**
- **action**: object that describes **how to update state**
- **dispatch**: function to trigger state updates, by **sending actions** from **event handlers** to the **reducer**

```
const [state, dispatch] = useReducer(reducer, initialState);

const reducer = (state, action) => {
    switch (action.type) {
        case 'dec':
            return state - 1;
        case 'inc':
            return state + 1;
        case 'setCount':
            return action.payload
        default:
            throw new Error('Unknown')
    }
}
```

### When to use UseReducer

- If we need multiple states, which frequently are updated together.
- If we need 3 or 4 pieces of related state, including objects.
- Too many event handlers make components large and confusing.
