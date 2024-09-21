import { describe, test, expect } from 'vitest'
import { gcd } from '@/src/internal/utils/math'

describe('gcd: Positive case', () => {
	test('Call with 4 and 8', () => {
		expect(gcd(2, 4)).toBe(2)
	})

	test('Call with 9 and 12', () => {
		expect(gcd(9, 12)).toBe(3)
	})

	test('Call with 12 and 16', () => {
		expect(gcd(12, 16)).toBe(4)
	})
})

describe('gcd: Destructive case', () => {
	test('Call with zero values', () => {
		expect(gcd(0, 0)).toBe(0)
	})

	test('Call with left zero operand', () => {
		expect(gcd(0, 1)).toBe(1)
	})

	test('Call with right zero operand', () => {
		expect(gcd(1, 0)).toBe(1)
	})
})

describe('gcd: Negative case', () => {
	test('Call with nil values', () => {
		// @ts-expect-error: for testing purposes
		expect(gcd(undefined, undefined)).toBe(Number.NaN)
	})
})
