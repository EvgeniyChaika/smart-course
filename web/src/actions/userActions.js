export default function userActions(user) {
    return {
        type: 'CREATE_USER',
        user: {
            login: user.name,
            password: user.password
        }
    };
}
