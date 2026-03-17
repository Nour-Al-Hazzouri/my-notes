- **Data Flow in ReactJS**:
    
    - React follows a **one-way data flow** (top to bottom through the component hierarchy).
    - Ensures changes are transmitted systematically through the components.
- **Props and State in React**:
    
    - **Props**:
        - Data passed from parent components to child components.
        - Immutable: Child components cannot mutate props, only read them and re-render.
        - Analogous to "money" controlled by an employer, passed to you (the component) as props.
    - **State**:
        - Data internal to a component that it owns and can mutate.
        - Enables interactivity in React apps by maintaining data controlled by the component itself.
- **Difference Between Props and State**:
    
    - Props: Controlled by parent; belongs to the parent component.
    - State: Controlled internally; belongs to the component itself.
- **Key Takeaways**:
    
    - React uses props (stateless) and state (stateful) data for component interactivity.
    - Data flow from parent to child ensures consistency and predictable updates.

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 2/6- Data flow in React|6- Data flow in React]] | **Next**: [[Education/Career Paths/Web Development/1- Old/5- React - Meta/5.1- React Basics/Module 2/8- Hooks|8- Hooks]]
