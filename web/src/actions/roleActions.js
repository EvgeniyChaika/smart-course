export const CREATE_USER = 'CREATE_USER';

export function roleActions(name, password) {
    return {
        type: CREATE_USER,
        name,
        password
    };
}
