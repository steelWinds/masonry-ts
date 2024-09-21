import type { IMasonryUnit, IMasonryUnitFabric, ImageUnit } from '@/src/internal/types'
import type { Size } from '@/src/internal/utils/image'
import { MasonryImageUnit } from '@/src/internal/modules/image-unit/MasonryImageUnit'
import { nanoid } from 'nanoid'
import { ofetch } from 'ofetch'
import { imageDimensionsFromStream } from 'image-dimensions'
import { isNil } from '@/src/internal/utils/conditions'

export class MasonryImageUnitFabric implements IMasonryUnitFabric {
	async createComputedUnit(image: ImageUnit): Promise<IMasonryUnit> {
		const id = `${image.src.split('/').pop()}-${nanoid()}`

		let sizes: Size | undefined

		if (isNil(image.height) || isNil(image.width)) {
			const { body } = await ofetch.raw(image.src)

			if (!body) throw new Error('Failed to fetch image body')

			const computedSize = imageDimensionsFromStream(body)

			if (!computedSize) throw new Error('Failed get computed size of image')
		}

		return new MasonryImageUnit(
			id,
			image.src,
			sizes?.width ?? image.width,
			sizes?.height?? image.height,
		)
	}
}
