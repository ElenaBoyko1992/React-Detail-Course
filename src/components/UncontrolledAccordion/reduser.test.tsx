import {reduser, StateType, TOGGLE_COLLAPSED} from "./reduser";

test('collapsed should be true', () => {
    //data
    const state: StateType = {
        collapsed: false
    }

    //action
    const newState = reduser(state, {type: TOGGLE_COLLAPSED})

    //expectation
    expect(newState.collapsed).toBe(true)

})

test('collapsed should be false', () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    //action
    const newState = reduser(state, {type: TOGGLE_COLLAPSED})

    //expectation
    expect(newState.collapsed).toBe(false)

})

test('reduser should throw error because action type is incorrect', () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    //action
    expect(() => {
        reduser(state, {type: "FAKETYPE"})
    }).toThrowError();

})