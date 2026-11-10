export class StudentDefaulterException extends Error {
    constructor() {
        super('Student has pending payments.');
        this.name = 'StudentDefaulterException';
    }
}