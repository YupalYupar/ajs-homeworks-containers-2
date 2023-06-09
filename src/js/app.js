export default class ErrorRepository {
    constructor() {
        this.repError = new Map([[500, 'server error'], [502, 'gateway error']]);
    }

    translate(code) {
        if (this.repError.has(code)) {
            return this.repError.get(code)
        }
        return 'unknown error';
    }
}