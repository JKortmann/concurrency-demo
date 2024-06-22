import {Button, Center, Stack, Switch, Title} from '@mantine/core';
import {useEffect, useState} from 'react';
import {simpleWorkerScript} from '../worker/simpleWorkerScript.ts';
import {getWorker} from '../worker/getWorker.ts';

export const WebWorker = () => {
    const [worker, setWorker] = useState<null | Worker>(null)

    useEffect(() => {
        const worker: Worker = getWorker(simpleWorkerScript)

        worker.onmessage = function (event) {
            console.log('Received result from worker:', event.data);
        };

        setWorker(worker)

        return () => {
            worker.terminate();
        };
    }, [])

    const heavyComputation = () => {
        if (worker) {
            worker.postMessage('signal');
        }
    }

    return (
        <Center h={'100vh'} w={'100%'}>
            <Stack>
                <Title order={4}>No Web Worker</Title>
                <Button onClick={heavyComputation}>Do heavy computation</Button>
                <Switch size="xl" onLabel="ON" offLabel="OFF" label={'Try and switch me!'} />
            </Stack>
        </Center>
    );
}