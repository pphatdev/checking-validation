import { defineFeature, loadFeature } from 'jest-cucumber';
import path from 'path';
import Validate from '../src/index';
import { expect } from '@jest/globals';
import { DefineScenarioFunctionWithAliases } from 'jest-cucumber/dist/src/feature-definition-creation';
const feature = loadFeature(path.join(__dirname, './testing.feature'));

defineFeature(feature, ( test: DefineScenarioFunctionWithAliases ) => {

    test('phone', ({ given }) => {
        given(/^"(.*)"$/, (value: string) => {
            const result = Validate.phone(value);
            expect(result).toBe(true);
        });
    });

    test('email', ({ given }) => {
        given(/^"(.*)"$/, (value: string) => {
            const result = Validate.email(value);
            expect(result).toBe(true);
        });
    });

    test('password', ({ given }) => {
        given(/^"(.*)"$/, (value) => {
            const result = Validate.password(value);
            expect(result).toBe(true);
        });
    });

    test('isEmpty', ({ given }) => {
        given(/^"(.*)"$/, (value: string) => {
            const result = Validate.isEmpty(value);
            expect(result).toBe(true);
        });
    });

    test('isNumber', ({ given }) => {
        given(/^"(.*)"$/, (value: string | number) => {
            const result = Validate.isNumber(value);
            expect(result).toBe(true);
        });
    });
});