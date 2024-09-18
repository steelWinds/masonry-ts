import type { Size } from './types'
import { ofetch } from 'ofetch'
import { imageDimensionsFromStream } from 'image-dimensions'

export const getImageSizes = async (path: string): Promise<Size> => {
	try {
		const { body } = await ofetch.raw(path)

		if (!body) {
			throw new Error('Invalid image data')
		}

		return imageDimensionsFromStream(body) as unknown as Size
	} catch {
		throw new Error('Could not get image')
	}
}
