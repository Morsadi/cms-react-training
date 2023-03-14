export const usePager = (resultCount: number, currentPage: number, limit: number = 15) => {
	const offset = (currentPage - 1) * limit;
	const end = Math.min(offset + limit, resultCount);
	const pageDisplay = resultCount && `${offset + 1}-${end} out of ${resultCount}`;
	return [offset, end, pageDisplay] as const;
};
