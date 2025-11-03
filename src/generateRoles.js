export function genRoles() {
    const roles = [];
    for (let i = 0; i < 3; i++) {
        roles.push(Math.floor(Math.random() * 64) + 1);
    }
    return roles;
}