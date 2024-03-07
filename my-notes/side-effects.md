Side effects can be used in:

- Event Handlers (onClick, onChange, onSubmit and etc.) (Triggered by events)
- Effects (useEffect) (Triggered by Rendering)

### UseEffect cleanup function

- Fn that we can **return from an effect (optional)**
- Runs on two different occasions:

  - Before the effect is **executed again**
  - After a component has **unmounted**

- Necessary whenever the side effect **keeps happening after the component has been re-rendered or unmounted**

- Each effect should do **only one thing!** Use **one useEffect hook for each side effect**. This makes effects easier to clean up
