import { describe, test, expect } from 'vitest'
import { MasonryImageUnit } from '@/src/internal/modules/image-unit'
import { faker } from '@faker-js/faker'

describe('MasonryImageUnit: Positive case', () => {
	const uniqueId = faker.string.nanoid(3)
	const path = faker.image.url()

	const width = 1920
	const height = 1080
	const targetRatio = 0.5625

	test('Create instance with unique id', () => {
		const masonryImageUnit = new MasonryImageUnit(uniqueId, path)

		expect(masonryImageUnit.id).toBe(uniqueId)
	})

	test('Create instance with size', () => {
		const masonryImageUnit = new MasonryImageUnit(uniqueId, path, width, height)

		expect(masonryImageUnit.ratio).toBe(targetRatio)
	})

	test('Create instance with zero size', () => {
		const masonryImageUnit = new MasonryImageUnit(uniqueId, path, 0, 0)

		expect(masonryImageUnit.ratio).toBe(0)
	})
})

// TODO: Write negative case

// describe('isNil: Negative case', () => {
// 	test('Call with not nil values', () => {
// 		expect(isNil(1)).toBeFalsy()
// 	})
// })
