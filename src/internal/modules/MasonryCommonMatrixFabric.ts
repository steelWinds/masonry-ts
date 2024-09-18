import type { MasonryMatrixFabric, IMasonryUnit, IMasonryMatrix } from 'src/internal/types'
import { repeat } from 'src/internal/utils/array'
import { MasonryMatrix } from './MasonryCommonMatrix'
import uniqid from 'uniqid'

const DEFAULT_ROW_AMOUNT = 3

export class MasonryCommonMatrixFabric implements MasonryMatrixFabric {
	create(units: IMasonryUnit[], rowAmount: number = DEFAULT_ROW_AMOUNT, initialRowRatioMap?: number[]): IMasonryMatrix {
		const id = uniqid('matrix')

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

		return new MasonryMatrix(id, rows, rowRatioMap)
	}
}
