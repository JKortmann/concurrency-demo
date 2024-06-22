export const simpleWorkerScript = () => {
    self.addEventListener('message', () => {
        performIntensiveTask()
        postMessage('done')
    });

    function performIntensiveTask() {
        const n = 70000
        let i = 0;

        while (++i < n * n) {
            // do your thing
        }
    }
};