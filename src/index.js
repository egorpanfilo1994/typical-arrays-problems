
        if (min > array[i]) min = array[i];
    }

    return min;
}

exports.max = function max(array) {
    if (!array || array.length === 0) {
        return 0
    };
    let max = array[0];
    for (let i = 0; i < array.length; i++) {

        if (max < array[i]) max = array[i];
    }

    return max;
}

exports.avg = function avg(array) {
    if (!array || array.length === 0) {
        return 0
    };
    return array.reduce((a, b) => (a + b)) / array.length;
}