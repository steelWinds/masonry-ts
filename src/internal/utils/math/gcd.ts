export const gcd = (a: number, b: number) => {
	let k = 1,
		t

	if (a === 0) {
		return b
	}

	if (b === 0) {
		return a
	}

	while (a % 2 === 0 && b % 2 === 0) {
		a = a / 2
		b = b / 2
		k = k * 2
	}

	while (a % 2 === 0) {
		a = a / 2
	}

	while (b) {
		while (b % 2 === 0) {
			b = b / 2
		}

		if (a > b) {
			t = b
			b = a
			a = t
		}

		b = b - a
	}

	return k * a
}
