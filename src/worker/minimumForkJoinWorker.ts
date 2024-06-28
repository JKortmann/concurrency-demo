self.addEventListener('message', (event) => {
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

    if (event.data.length > 1000) {
        const half = Math.ceil(event.data.length / 2);

        const firstHalf = event.data.slice(0, half);
        const secondHalf = event.data.slice(half);

        const ownResult = findMinimum(secondHalf)
        const subworker = new Worker('./minimumForkJoinWorker.ts')
        subworker.onmessage = (event) => {
            postMessage(Math.min(event.data, ownResult))
            subworker.terminate()
        }
        subworker.postMessage(firstHalf)
    } else {
        const minimum = findMinimum(event.data)
        postMessage(minimum)
    }
})