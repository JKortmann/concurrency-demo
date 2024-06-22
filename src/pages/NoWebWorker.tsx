import {Button, Center, Stack, Switch, Title} from '@mantine/core';

export const NoWebWorker = () => {

    const heavyComputation = () => {
        const n = 70000
        let i = 0;

        while (++i < n * n) {
            // do your thing
        }

        console.log('done')
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