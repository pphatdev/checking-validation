export type Phone = string
export type Email = string
export type Password = string
export type IsEmpty = string | ""
export type IsNumber = string | number

export class Validate {

    /**
     * Check Phone Validation pattern
     * @param {Phone} input
     * @returns {Boolean}
     */
    static phone = (input: Phone): boolean => /^(0|\+[1-9]{1,3}(\s))([0-9]){2,3}(\s)([0-9]){2,3}(\s)([0-9]){2,4}$/.test(input);

    /**
     * Check Email Validation pattern
     * @param {Email} input
     * @returns {Boolean}
     */
    static email = (input: Email): boolean => /^[a-z]+[?=a-z0-9.-]+@[a-z0-9.-]+\.[a-z]{2,5}$/i.test(input);

    /**
     * Check Password Validation pattern
     * @param {Password} input
     * @returns {Boolean}
     */
    static password = (input: Password): boolean => /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(input);

    /**
     * Check Empty Value Validation
     * @param {IsEmpty} input
     * @returns {Boolean}
     */
    static isEmpty = (input: IsEmpty): boolean => input.replaceAll(/^\s+/g, "") == null || input.replaceAll(/^\s+/g, "") == "" || input.replaceAll(/^\s+/g, "") == undefined;

    /**
     * Check Number Type
     * @param {IsNumber} input
     * @returns {Boolean}
     */
    static isNumber = (input: IsNumber): boolean => !isNaN(Number(input.toString()))
}

export default Validate