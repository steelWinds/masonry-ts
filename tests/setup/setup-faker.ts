import { FAKER_SEED } from '@/tests/constants/core'
import { faker } from '@faker-js/faker'

if (!globalThis.fakerIsSeeded) {
	faker.seed(FAKER_SEED)

	globalThis.fakerIsSeeded = true
}
