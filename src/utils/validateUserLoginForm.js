export const validateUserLoginForm = (values) => {
    const {username, password} = values;
    const errors = {};
    
    const usernameMinLength = 6;
    const usernameMaxLength = 15;
    const passwordMinLength = 8;

    if(!username) {
        errors.username ='Required'
    } else if(username.length < usernameMinLength) {
        errors.username = `Username must be at least ${usernameMinLength} characters`;
    } else if(username.length > usernameMaxLength) {
        errors.username = `Username must be ${usernameMaxLength} characters or less`;
    }
    
    if(!password) {
        errors.password ='Required'
    } else if(password.length < passwordMinLength) {
        errors.password = `Password must be at least ${passwordMinLength} characters`;
    } else if(!(/(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+)(?=.*[!@#$%^&*_-]+)/).test(password)) {
        errors.password = 'Password must contain at least 1 upper case and 1 lower case letter, a digit and a special symbol';
    }
    return errors;
}