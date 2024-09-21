import type { IMasonryUnit, IMasonryMatrix } from '@/src/internal/types'

export class MasonryCommonMatrix implements IMasonryMatrix {
	private _id: string
	private _matrix: IMasonryUnit[][]
	private _rowRatioMap: number[]

	constructor(id: string, matrix: IMasonryUnit[][], _rowRatioMap: number[]) {
		this._id = id
		this._matrix = matrix
		this._rowRatioMap = _rowRatioMap
	}

	get id() {
		return this._id
	}

	get matrix() {
		return this._matrix
	}

	get rowRatioMap() {
		return this._rowRatioMap
	}

	get rowAmount() {
		return this._matrix.length
	}

	get columnAmount() {
		return this._matrix.reduce((acc, row) => acc += row.length, 0)
	}

	merge(merged: IMasonryMatrix) {
		if (this.rowAmount !== merged.rowAmount) throw new Error('Cannot merge, rowAmount must be equal to source matrix')

		this._matrix = this.matrix.map((row, id) => [...row, ...merged.matrix[id]])
	}
}
