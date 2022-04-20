#  a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.
# For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).
# The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}
def pickPeaks(arr):
	# your code here
	pos = []
	peaks = []
	for i in range(1, len(arr) - 1):
		if arr[i] > arr[i - 1] and arr[i] > arr[i + 1]:
			pos.append(i)
			peaks.append(arr[i])
	return {'pos': pos, 'peaks': peaks}