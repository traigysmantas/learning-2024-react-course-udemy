## Rules of hooks

- Only call hooks at the top level
  - Do NOT call hooks inside conditionals, loops, nested functions, or after an early return
  - This is necessary to ensure that hooks are always called in the same order (hooks rely on this)
- Only call hooks from React functions
  - Only call hooks inside a function component or a custom hook
