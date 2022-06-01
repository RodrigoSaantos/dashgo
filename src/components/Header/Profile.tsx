import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr={4} textAlign="right">
        <Text>Rodrigo Santos</Text>
        <Text color="gray.300" fontSize="small">
          contato.rodrigosaantos@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Rodrigo Santos"
        src="https://github.com/rodrigosaantos.png"
      />
    </Flex>
  );
}