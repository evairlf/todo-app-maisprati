export function mockJwt(username){
    const token = btoa(JSON.stringify({
        sub: username,
        iat: Date.now() / 1000,
        exp: (Date.now() / 1000) + 3600,
    }))

    return token;
}

export function decodification(token){
    try{
        const decoded = JSON.parse(atob(token));
        if(decoded.exp > Date.now() / 1000){
            return decoded;
        }
        console.log("Expired token");
        throw new Error("Expired token");
    } catch(error){
        console.error(error);
    }
}