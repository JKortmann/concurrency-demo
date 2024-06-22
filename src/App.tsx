import {Link} from 'react-router-dom';
import {Button, Center, Group, Stack, Title} from '@mantine/core';

function App() {
    return (
        <Center h={'100vh'} w={'100%'}>
            <Stack>
                <Title order={1}>CCPDP Demo: Web Workers</Title>
                <Group justify={'center'}>
                    <Link to={`/no-web-worker`}>
                        <Button>No Web Worker</Button>
                    </Link>
                    <Link to={`/web-worker`}>
                        <Button>Web Worker</Button>
                    </Link>
                </Group>
            </Stack>
        </Center>
    )
}

export default App
