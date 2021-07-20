class User {
    constructor() {
        this._username;
        this._email;
        this._displayName;
    }

    get username() {
        return this._username;
    }

    get displayName() {
        return this._displayName;
    }
}