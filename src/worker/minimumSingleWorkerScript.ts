export const minimumSingleWorkerScript = () => {
    const findMinimum = (arr: number[]) => {
        // that thing is ridiculously slow
        let min = arr[0];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[j] < min) {
                    min = arr[j];
                }
            }
        }
        return min;
    }

    self.addEventListener('message', (event) => {
        const minimum = findMinimum(event.data)
        postMessage(minimum)
    })
}