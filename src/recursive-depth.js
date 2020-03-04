module.exports = class DepthCalculator {
    calculateDepth = (arr) => {
        if (Array.isArray(arr)) {
            if (arr.length > 0) {
                const array = arr.map((item) => this.calculateDepth(item));
                return 1 + Math.max(...array);
            } else {
                return 1;
            }
        } else {
            return 0;   
        }
    }
};