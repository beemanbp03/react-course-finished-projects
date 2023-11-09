# 12-redux-adv-project

## What I learned
- redux & side effects (useEffect())
- redux & async code
- reducers must be pure, side-effect free, synchronous functions
- side effects and async code can be executed either inside components (using useEffect()) or inside action creators
- data transformation should happen inside reducers. AVOID data transformation inside action creators and components
    - the reason for this being redux toolkit has functions that copies arrays and objects for you.
    - it makes it easier to not accidently mutate your state objects
- introduction to Redux Dev Tools browser extension

