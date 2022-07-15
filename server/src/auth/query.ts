export const getUserQuery = `SELECT * FROM vacationSite.users`
export function getTeamByIDQuery(team: string) {
    const query = `SELECT team_id FROM UITeams.teams WHERE team_name = "${team}"`
    return query
}

export function getAppointmentsByTeamIDQuery(id: number) {
    const query = `SELECT * FROM UITeams.appointments WHERE team_id = "${id}"`
    return query
}