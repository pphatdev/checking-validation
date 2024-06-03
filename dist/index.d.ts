declare namespace Validate {
    class Validate {
        static undefined: any;
        /**
         * Check Phone Validation pattern
         * @param {String} input
         * @returns {Boolean}
         */
        static phone: (input: string) => boolean;
        /**
         * Check Email Validation pattern
         * @param {String} input
         * @returns {Boolean}
         */
        static email: (input: string) => boolean;
        /**
         * Check Password Validation pattern
         * @param {String} input
         * @returns {Boolean}
         */
        static password: (input: string) => boolean;
        /**
         * Check Empty Value Validation
         * @param {String} input
         * @returns {Boolean}
         */
        static isEmpty: (input: string) => boolean;
        /**
         * Check Number Type
         * @param {String} input
         * @returns {Boolean}
         */
        static isNumber: (input: string | number) => boolean;
    }
}
export default Validate;
