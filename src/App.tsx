import {Link} from 'react-router-dom';
import {Button, Center, Divider, Group, Stack, Text, Title} from '@mantine/core';

function App() {
    return (
        <Center h={'100vh'} w={'100%'}>
            <Stack>
                <Group>
                    <Title order={1}>CCPDP Demo: Web Workers</Title>
                </Group>
                <Divider />
                <Title order={5}>Basic Showcase</Title>
                <Group>
                    <Link to={`/no-web-worker`}>
                        <Button>No Web Worker</Button>
                    </Link>
                    <Text>or</Text>
                    <Link to={`/web-worker`}>
                        <Button>Web Worker</Button>
                    </Link>
                </Group>
                <Divider />
                <Title order={5}>Finding the Minimum of an Array</Title>
                <Group>
                    <Link to={`/minimum-single-worker`}>
                        <Button>Minimum With Single Worker</Button>
                    </Link>
                    <Text>or</Text>
                    <Link to={`/minimum-fork-join-worker`}>
                        <Button>Minimum With Fork/Join</Button>
                    </Link>
                </Group>
            </Stack>
        </Center>
    )
}

export default App
