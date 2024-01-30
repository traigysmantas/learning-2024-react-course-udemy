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
