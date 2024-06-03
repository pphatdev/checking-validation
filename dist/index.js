// src/index.ts
var Validate = class {
  static {
    this.undefined = void 0;
  }
  static {
    /**
     * Check Phone Validation pattern
     * @param {String} input
     * @returns {Boolean}
     */
    this.phone = (input) => /^(0|\+[1-9]\s{1,3})([0-9]){2,2}(\s)([0-9]){2,3}(\s)([0-9]){2,4}$/.test(input);
  }
  static {
    /**
     * Check Email Validation pattern
     * @param {String} input
     * @returns {Boolean}
     */
    this.email = (input) => /^[a-z0-9.-]+@[a-z0-9.-]+\.[a-z]{2,5}$/i.test(input);
  }
  static {
    /**
     * Check Password Validation pattern
     * @param {String} input
     * @returns {Boolean}
     */
    this.password = (input) => /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(input);
  }
  static {
    /**
     * Check Empty Value Validation
     * @param {String} input
     * @returns {Boolean}
     */
    this.isEmpty = (input) => input.replaceAll(/^\s+/g, "") == null || input.replaceAll(/^\s+/g, "") == "" || input.replaceAll(/^\s+/g, "") == void 0;
  }
  static {
    /**
     * Check Number Type
     * @param {String} input
     * @returns {Boolean}
     */
    this.isNumber = (input) => typeof input === "number";
  }
};
var src_default = { Validate };
export {
  src_default as default
};
//# sourceMappingURL=index.js.map