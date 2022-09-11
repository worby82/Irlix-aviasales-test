const getSortedFunction = (value) => {
    switch (value) {
        case 'fast':
            return (prev, next) => {
                return (prev.segments[0].duration + prev.segments[1].duration) - (next.segments[0].duration + next.segments[1].duration);
            };
        case 'optimal':
            return (prev, next) => {
                return (prev.segments[0].duration + prev.segments[1].duration) - (next.segments[0].duration + next.segments[1].duration) & prev.price - next.price;
            };
        default:
            return (prev, next) => prev.price - next.price;
    }
}

export default getSortedFunction;