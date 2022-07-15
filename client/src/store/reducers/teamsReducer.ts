import { TEAMSACTIONS } from "../actions"

const initialState = {
    teams: [],
    isLoading: false
}

export const teamsReducer = (state: any = initialState, action: { type: string, payload?: any }) => {
    switch (action.type) {
        case TEAMSACTIONS.GET_TEAMS.IS_LOADING: {
            return { ...state, isLoading: action.payload }
        }
        case TEAMSACTIONS.GET_TEAMS.SUCCESS: {
            console.log(action.payload)
            return { ...state, teams: action.payload }
        }
        default:
            return state
    }
}