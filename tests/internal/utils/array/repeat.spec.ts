import { describe, test, expect } from 'vitest'
import { repeat } from '@/src/internal/utils/array'

describe('repeat: Positive case', () => {
	test('Repeat 1000 times', () => {
		const res = repeat(1000, 1)

		expect(res.reduce((acc, curr) => acc + curr)).toBe(1000)
	})
})

describe('repeat: Negative case', () => {
	test('Repeat 0 times', () => {
		const res = repeat(0, 1)

		expect(res.length).toBe(0)
	})

	test('Repeat with undefined', () => {
		// @ts-expect-error: for testing purposes
		const res = repeat(undefined, 1)

		expect(res.length).toBe(0)
	})
})
