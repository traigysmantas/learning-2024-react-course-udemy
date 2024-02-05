## Notes

- Props are read-only, they are immutable! This is one of React's strict rules.
- If you need to mutate props, you actually need state
  - Mutating props would affect parent, creating side effects (not for fn.)

### State

- Updating component state triggers React to re-render the component
- State allows:
  - Update the component
  - Persist local vars betwen renders

### State vs Props

- State

  - Internal data, owned by component
  - Component "memory"
  - Can be updated by the component itself
  - Updating state causes component to re-render
  - Used to make components interactive

- Props:
  - External data, owned by parent component
  - Similar to fn params
  - Read-only
  - **Receiving new props causes component to re-render**. Usually when the parent's state has been updated.
  - Used by parent to configure child component ('settings')

### Thinking in React

1. Break desired UI into **components** and establish the **component tree**
2. Build static version in React (without states)
3. Think about state:

- When to use state
- Types of states: local vs global
- Where to place each piece of state

4. Establish data flow:

- One-way data flow
- Child-to-parent communication
- Accessing global state

### Local vs Global State

Local state:

- State needed only by one or few components
- State that is defined in a component and only that component and child components have access to it (by passing props)

Global state:

- State that many components might needed
- Shared state that is accessible to every component in the entire application
- Implement using Context API or Redux

### Deriving State

- State that is computeed from an existing piece of state or form props
- Need to keep them in sync (update together)
- Just regular varaibles, no useState
