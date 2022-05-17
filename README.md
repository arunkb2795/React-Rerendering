## Parent and Child Rerendering

- When a parent component renders, React will recursively render all of its child components.
- New state same as old state after initial render? Both parent and child do not re-render.
- New state same as old state after re-renders? Parent re-renders one more time but child never re-renders.
