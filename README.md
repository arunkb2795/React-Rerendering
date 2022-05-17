## useState and Rerendering

* The setter function from a useState hook will cause the component to re-render.
* The exception is when you update a State Hook to the same value as the current state.
* Same value after the initial render? The component will not re-render.
* Same value after re-renders? React will render that specific component one more time and then
bails out from any subsequent renders.