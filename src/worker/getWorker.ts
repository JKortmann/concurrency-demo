export const getWorker = (workerFunction: () => void) => {
    const workerCode = workerFunction.toString();
    const workerBlob = new Blob([`(${workerCode})()`]);
    return new Worker(URL.createObjectURL(workerBlob));
}