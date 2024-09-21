import type { IMasonryUnit } from 'src/internal/types'
import { gcd } from 'src/internal/utils/math'

export class MasonryImageUnit implements IMasonryUnit {
	private _id: string
	private _path: string
	private _width: number
	private _height: number

	constructor(id: string, path: string, width?: number, height?: number) {
		this._id = id
		this._path = path
		this._width = width ?? 0
		this._height = height ?? 0
	}

	private get _gcd() {
		return gcd(this._width, this._height)
	}

	private get _isUncalculatedSize() {
		return !this._height || !this._width
	}

	get id() {
		return this._id
	}

	get ratio() {
		return this._isUncalculatedSize ? 0 : (this._height / this._gcd) / (this._width / this._gcd)
	}

	get path(): string {
		return this._path
	}
}
