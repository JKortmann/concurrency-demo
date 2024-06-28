import {useEffect, useState} from 'react';
import {getWorker} from '../worker/getWorker.ts';
import {generateArrayWorker} from '../worker/generateArrayWorker.ts';
import {Button, Center, Stack, Text, Title} from '@mantine/core';

export const MinimumForkJoinWorker = () => {
    const [minimumWorker, setMinimumWorker] = useState<null | Worker>(null)
    const [arrayWorker, setArrayWorker] = useState<null | Worker>(null)
    const [isCalculating, setIsCalculating] = useState(false);
    const [elapsedTime, setElapsedTime] = useState<number>(0);
    const [numberArray, setNumberArray] = useState<number[]>([]);

    useEffect(() => {
        const minWorker: Worker = new Worker(new URL('../worker/minimumForkJoinWorker.ts', import.meta.url))
        const arrWorker: Worker = getWorker(generateArrayWorker);

        minWorker.onmessage = (event) => {
            setIsCalculating(false);
            setElapsedTime((prevState) => performance.now() - prevState)
            console.log(event.data)
        };

        arrWorker.onmessage = (event) => {
            console.log(event.data)
            setNumberArray(event.data)
        }

        setMinimumWorker(minWorker)
        setArrayWorker(arrWorker)

        return () => {
            minWorker.terminate();
            arrWorker.terminate();
        };
    }, [])

    const startGenerateArray = () => {
        arrayWorker?.postMessage(100_000);
    }

    const startCalculation = () => {
        setElapsedTime(performance.now())
        minimumWorker?.postMessage(numberArray)

        setIsCalculating(true);
    }

    return (
        <Center h={'100vh'} w={'100%'}>
            <Stack>
                <Title order={4}>Minimum of Array with Fork/Join</Title>
                <Button onClick={startGenerateArray}>Generate Array</Button>
                <Button onClick={startCalculation}>Find Minimum</Button>
                <Text>Is calculating: {isCalculating ? '✅' : '❌'}</Text>
                <Text>Elapsed time (ms): { isCalculating ? '' : elapsedTime}</Text>
            </Stack>
        </Center>
    )
}