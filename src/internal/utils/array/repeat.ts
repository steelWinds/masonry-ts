export const repeat = <T>(length: number, value: T): T[] => {
	return Array.from({ length }, () => value)
}
