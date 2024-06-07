export type Phone = string
export type Email = string
export type Password = string
export type IsEmpty = string | null
export type IsNumber = string | number

export class Validate
{
    /**
     * Check Phone Validation pattern
     * @param { Phone } value
     * @returns { Boolean }
     */
    public static phone = (value: Phone): Boolean => /^(0|\+[1-9]{1,3}(\s))([0-9]){2,3}(\s)([0-9]){2,3}(\s)([0-9]){2,4}$/.test(value);

    /**
     * Check Email Validation pattern
     * @param { Email } value
     * @returns { Boolean }
     */
    public static email = (value: Email): Boolean => /^[a-z]+[?=a-z0-9.-]+@[a-z0-9.-]+\.[a-z]{2,5}$/i.test(value);

    /**
     * Check Password Validation pattern
     * @param { Password } value
     * @returns { Boolean }
     */
    public static password = (value: Password): Boolean => /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(value);

    /**
     * Check Empty Value Validation
     * @param { IsEmpty } value
     * @returns { Boolean }
     */
    public static isEmpty = (value: IsEmpty = ""): Boolean => (value === null || value.replaceAll(/^\s+/g, "") === null || value.replaceAll(/^\s+/g, "") === "" || value.replaceAll(/^\s+/g, "") === undefined || value.replaceAll(/^\s+/g, "") === "undefined" );

    /**
     * Check Number Type
     * @param { IsNumber } value
     * @returns { Boolean }
     */
    public static isNumber = (value: IsNumber): Boolean => !isNaN(Number(value.toString()))
}

export namespace validate
{
    Validate
}

export default Validate