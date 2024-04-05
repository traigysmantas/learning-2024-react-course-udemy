## Performance optimization tools

1. Prevent wasted renders

- memo
- useMemo
- useCallback
- Passing elements as children or regular prop

2. Improve app speed/responsiveness

- useMemo
- useCallback
- useTransition

3. Reduce bundle size

- Using fewer 3rd party packages
- Code splitting and lazy loading

### Wasted renders

When does a components instance re-render ?

- State changes
- Context changes
- Parent re-renders -> creates the false impression that changing props re-renders a component. This is NOT true.

**Wasted render**: a render that didn't produce any change in the DOM.

Only a problem when they happen **too frequently** or when the **component is very slow**
