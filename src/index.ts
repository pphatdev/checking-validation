export class Validate {
    static undefined = undefined;

    /**
     * Check Phone Validation pattern
     * @param {String} input
     * @returns {Boolean}
     */
    static phone = (input: string): boolean => /^(0|\+[1-9]\s{1,3})([0-9]){2,2}(\s)([0-9]){2,3}(\s)([0-9]){2,4}$/.test(input);

    /**
     * Check Email Validation pattern
     * @param {String} input
     * @returns {Boolean}
     */
    static email = (input: string): boolean => /^[a-z0-9.-]+@[a-z0-9.-]+\.[a-z]{2,5}$/i.test(input);

    /**
     * Check Password Validation pattern
     * @param {String} input
     * @returns {Boolean}
     */
    static password = (input: string): boolean => /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(input);

    /**
     * Check Empty Value Validation
     * @param {String} input
     * @returns {Boolean}
     */
    static isEmpty = (input: string): boolean => input.replaceAll(/^\s+/g, "") == null || input.replaceAll(/^\s+/g, "") == "" || input.replaceAll(/^\s+/g, "") == undefined;

    /**
     * Check Number Type
     * @param {String} input
     * @returns {Boolean}
     */
    static isNumber = (input: string | number): boolean => typeof Number(input) === "number";
}

export default  Validate