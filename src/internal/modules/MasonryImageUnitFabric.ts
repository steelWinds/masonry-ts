import type { IMasonryUnit, IMasonryUnitFabric, ImageUnit } from 'src/internal/types'
import type { Size } from 'src/internal/utils/image'
import { MasonryUnitImage } from 'src/internal/modules/MasonryImageUnit'
import uniqid from 'uniqid'
import { getImageSizes } from 'src/internal/utils/image'
import { isNil } from 'src/internal/utils/conditions'

export class MasonryMatrixImageFabric implements IMasonryUnitFabric {
	async createComputedUnit(image: ImageUnit): Promise<IMasonryUnit> {
		try {
			const id = uniqid(image.src.split('/').pop())

			let sizes: Size | undefined

			if (isNil(image.height) || isNil(image.width)) {
				sizes = await getImageSizes(image.src)
			}

			return new MasonryUnitImage(
				id,
				image.src,
				sizes?.width ?? image.width,
				sizes?.height?? image.height,
			)
		} catch {
			throw new Error('Failed computed image unit')
		}
	}
}
