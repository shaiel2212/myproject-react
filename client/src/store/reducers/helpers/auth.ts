export function setTokenLS(token: string) {
    console.log(token)
    if (!token) return;
    localStorage.setItem("token", token)
}

export function clearTokenLS(token: string) {
    if (!token) return;
    localStorage.removeItem("token")
}

export function getTokenLS() {
    return localStorage.getItem("token")
}
