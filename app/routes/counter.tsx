import React, {useReducer, useRef} from "react"
import {Outlet} from "@remix-run/react";
import {Button} from "~/components/Button";

interface CounterAction {
  type: "INCREMENT" | "DECREMENT",
}

interface State {
  count: number;
}

function counterReducer(state: State, action: CounterAction) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      }
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      }
  }
}

export default function Page() {
  const primary = useRef<HTMLButtonElement>(null)
  const secondary = useRef<HTMLButtonElement>(null)
  const [state, reducer] = useReducer(counterReducer, {
    count: 0,
  })

  const {count} = state

  const handleClick = (action: CounterAction) => {
    switch (action.type) {
      case "INCREMENT":
        console.log(primary?.current?.innerText)
        break
      case "DECREMENT":
        secondary?.current?.focus()
        break
    }
    reducer({type: action.type})
  }
  return (
    <div>
      <h1>This is the Counter route</h1>
      <p>Count: {count}</p>
      <Button ref={primary} onClick={() => handleClick({type: "INCREMENT"})}>
        Increment
      </Button>
      <Button ref={secondary} variant="secondary" onClick={() => handleClick({type: "DECREMENT"})}>
        Decrement
      </Button>
      <Outlet />
    </div>
  )
}