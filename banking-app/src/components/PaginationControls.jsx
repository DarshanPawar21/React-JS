function PaginationControls({ pagination, page, onPageChange }) {
    const totalPages = pagination?.totalPages || 1;
    const totalCount = pagination?.totalCount || 0;
    const currentPage = pagination?.page || page || 1;

    if (!pagination) return null;

    return (
        <div className="cbs-pagination">
            <span className="cbs-pagination__info">
                Page {currentPage} of {totalPages} | Total {totalCount}
            </span>
            <div className="cbs-pagination__actions">
                <button
                    type="button"
                    className="cbs-pagination__btn"
                    disabled={!pagination.hasPrevPage}
                    onClick={() => onPageChange(currentPage - 1)}
                >
                    Prev
                </button>
                <button
                    type="button"
                    className="cbs-pagination__btn"
                    disabled={!pagination.hasNextPage}
                    onClick={() => onPageChange(currentPage + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default PaginationControls;
