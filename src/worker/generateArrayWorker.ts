export const generateArrayWorker = () => {
    const generateArray = (size: number) => {
        const result = [];
        const numberSet = new Set();

        while (numberSet.size < size) {
            const randomNum = Math.floor(Math.random() * (size * 10));
            if (!numberSet.has(randomNum)) {
                numberSet.add(randomNum);
                result.push(randomNum);
            }
        }

        return result;
    }

    self.addEventListener('message', (event) => {
        const array = generateArray(event.data)
        postMessage(array)
    })
}