export const calculateVisiblePages = (pageNumbers: number[], countVisiblePages: number, totalPages: number, activePage:number) => {
	const totalVisiblePages = countVisiblePages; 
	const half = Math.floor(totalVisiblePages / 2);
	if (totalPages <= totalVisiblePages) {
		return pageNumbers;
	}
	if (activePage <= half) {
		return pageNumbers.slice(0, totalVisiblePages);
	}
	if (activePage >= totalPages - half) {
		return pageNumbers.slice(totalPages - totalVisiblePages);
	}
	return pageNumbers.slice(activePage - half - 1, activePage + half);
};