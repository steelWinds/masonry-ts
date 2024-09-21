import type { MasonryMatrixFabric, IMasonryUnit, IMasonryMatrix } from '@/src/internal/types'
import { repeat } from '@/src/internal/utils/array'
import { MasonryCommonMatrix } from '@/src/internal/modules/common-matrix/MasonryCommonMatrix'
import { DEFAULT_ROW_AMOUNT } from '@/src/internal/modules/common-matrix/constants'
import { nanoid } from 'nanoid'

export class MasonryCommonMatrixFabric implements MasonryMatrixFabric {
	create(units: IMasonryUnit[], rowAmount: number = DEFAULT_ROW_AMOUNT, initialRowRatioMap?: number[]): IMasonryMatrix {
		const id = `matrix-${nanoid()}`

		const rowRatioMap = initialRowRatioMap ?? repeat(rowAmount, 0)
		const rows: IMasonryUnit[][] = repeat(rowAmount, [])

		for (const unit of units) {
			let shortest = 0

			for (let i = 0; i < rowAmount; i++) {
				if (rowRatioMap[i] < rowRatioMap[shortest]) shortest = i
			}

			rowRatioMap[shortest] += unit.ratio
			rows[shortest].push(unit)
		}

		return new MasonryCommonMatrix(id, rows, rowRatioMap)
	}
}
