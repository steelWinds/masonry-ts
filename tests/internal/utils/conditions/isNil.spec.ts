import { describe, test, expect } from 'vitest'
import { isNil } from '@/src/internal/utils/conditions'

describe('isNil: Positive case', () => {
	test('Call with nil values', () => {
		expect(isNil(null) && isNil(undefined)).toBeTruthy()
	})
})

describe('isNil: Negative case', () => {
	test('Call with not nil values', () => {
		expect(isNil(1)).toBeFalsy()
	})
})
