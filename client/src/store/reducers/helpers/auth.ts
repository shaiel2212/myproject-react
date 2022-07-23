export function setTokenLS(token: string):void {

    if (!token) return;
    localStorage.setItem("token", token)
}

export function clearTokenLS(token: string):void  {
    if (!token) return;
    localStorage.removeItem("token")
}

export function getTokenLS():string | null {
    return localStorage.getItem("token")
}
