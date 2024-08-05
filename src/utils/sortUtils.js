export const sortData = (data, column, order) => {
    return data.sort((a, b) => {
        if (typeof a[column] === 'string') {
            if (order === 'asc') {
                return a[column].localeCompare(b[column]);
            } else {
                return b[column].localeCompare(a[column]);
            }
        } else if (typeof a[column] === 'number') {
            if (order === 'asc') {
                return a[column] - b[column];
            } else {
                return b[column] - a[column];
            }
        } else if (a[column] instanceof Date) {
            if (order === 'asc') {
                return new Date(a[column]) - new Date(b[column]);
            } else {
                return new Date(b[column]) - new Date(a[column]);
            }
        } else {
            return 0;
        }
    });
};
