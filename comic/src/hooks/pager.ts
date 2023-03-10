export const usePager = (resultCount, currentPage, limit = 10) => {
	const offset = (currentPage - 1) * limit;
	const end = Math.min(offset + limit, resultCount);
	const pageDisplay = `${offset + 1} - ${end} out of ${resultCount}`;

	return [offset, end, pageDisplay];
};
