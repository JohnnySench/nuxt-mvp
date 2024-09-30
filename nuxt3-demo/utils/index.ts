export const lazyChunks = function*<T>(arr: Array<T>, n: number) {
    for (let i = 0; i < arr?.length; i += n) {
        yield arr.slice(i, i + n);
    }
};

export const chunks = <T>(arr: Array<T>, n: number): Array<Array<T>> => {
    const result = [];
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n));
    }
    return result;
};