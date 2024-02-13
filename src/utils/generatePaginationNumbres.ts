

export const generatePagination = (
    currentPage: number, totalPages: number
) => {

    // si numero total de paginas es 7 o menos, mostrar sin "..."

    if (totalPages <= 7){
        return Array.from({
            length: totalPages
        }, (_, index) => index + 1) // [1, 2, 3, 4, 5, 6, 7]
    }

    if(currentPage <=3){
        return [1, 2, 3, 4, '...', totalPages-1, totalPages]; // [1, 2, 3, '...', 6, 7]
    }

    if(currentPage > totalPages - 2){
        return [1, 2, '...', totalPages-2, totalPages-1, totalPages]; // [1, 2, '...', 5, 6, 7]
    }

    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages]; // [1, '...', 3, 4, 5, '...', 7]

}