export interface IMasonryUnit {
	id: string
	ratio: number
}

export interface IMasonryUnitFabric {
	createComputedUnit(...args: unknown[]): Promise<IMasonryUnit>
}

export interface IMasonryMatrix {
	id: string
	matrix: IMasonryUnit[][]
	rowRatioMap: number[]
	rowAmount: number
	columnAmount: number

	merge(merged: IMasonryMatrix): void
}

export interface MasonryMatrixFabric {
	create(...args: unknown[]): IMasonryMatrix
}
