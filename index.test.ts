import { describe, expect, test, beforeAll } from "bun:test";
import { add, sub } from './index';
import * as assert from 'assert';

beforeAll(() => {
    console.log("beforeAll");
})

describe('index', () => {
    describe('add', () => {
        test('should add two numbers', () => {
            assert.strictEqual(add(3, 2), 5);
        });

        test('should return the correct result when adding negative numbers', () => {
            assert.strictEqual(add(-3, -2), -5);
        });
    });

    describe('subtract', () => {
        test('should subtract two numbers', () => {
            assert.strictEqual(sub(3, 2), 1);
        });

        test('should return the correct result when subtracting negative numbers', () => {
            assert.strictEqual(sub(-3, -2), -1);
        });
    });
});