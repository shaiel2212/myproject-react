import { store } from "../index"
import { TEAMSACTIONS } from "../actions"
import { getTeams } from "../services/teamsServices"

function getDispatch() {
    return store.dispatch
}

export async function getTeamsAction() {
    const dispatch = getDispatch()
    dispatch(getTeamsIsLoading(true))
    try {
        const teams = await getTeams()
        dispatch(getTeamsSuccess(teams.data))
        return teams.data
    } catch (err) {
        console.log(err)
    } finally {
        dispatch(getTeamsIsLoading(false))
    }
}

function getTeamsIsLoading(payload: boolean) {
    return { type: TEAMSACTIONS.GET_TEAMS.IS_LOADING, payload }
}

function getTeamsSuccess(payload: any) {
    console.log(payload)
    return { type: TEAMSACTIONS.GET_TEAMS.SUCCESS, payload }
}