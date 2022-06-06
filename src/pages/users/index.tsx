import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue
} from '@chakra-ui/react';
import Link from 'next/link';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { useQuery } from 'react-query';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';

export default function UsersList() {
  const { data, isLoading, error } = useQuery('users', async () => {
    const response = await fetch('http://localhost:3000/api/users');
    const responseData = await response.json();

    return responseData;
  });

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box>
      <Header />
      <Flex w="100%" my={6} maxW={1480} mx="auto" px={6}>
        <Sidebar />
        <Box
          flex={1}
          borderRadius={8}
          bg="gray.800"
          p={8}
        >
          <Flex
            mb={8}
            justify="space-between"
            align="center"
          >
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize={20} />}
              >
                Criar novo usuário
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados dos usuários.</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={['4', '4', '6']} color="gray.300" w={8}>
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>Usuário</Th>
                    <Th>Data de cadastro</Th>
                    <Th w={[8]} p={0} />
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td px={['4', '4', '6']}>
                      <Checkbox colorScheme="pink" />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">Rodrigo Santos</Text>
                        <Text fontSize="sm" color="gray.300">
                          contato.rodrigosaantos@gmail.com
                        </Text>
                      </Box>
                    </Td>
                    {isWideVersion && <Td>04 de Abril, 2021</Td>}
                    <Td>
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                      >
                        {isWideVersion ? (
                          <>
                            <Text as="span" marginInlineEnd={2}>
                              <Icon as={RiPencilLine} fontSize={16} />
                            </Text>
                            Editar
                          </>
                        ) : (
                          <Icon as={RiPencilLine} fontSize={16} />
                        )}
                      </Button>
                    </Td>
                  </Tr>
                </Tbody>
                <Tbody>
                  <Tr>
                    <Td px={['4', '4', '6']}>
                      <Checkbox colorScheme="pink" />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">Rodrigo Santos</Text>
                        <Text fontSize="sm" color="gray.300">
                          contato.rodrigosaantos@gmail.com
                        </Text>
                      </Box>
                    </Td>
                    {isWideVersion && <Td>04 de Abril, 2021</Td>}
                    <Td>
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                      >
                        {isWideVersion ? (
                          <>
                            <Text as="span" marginInlineEnd={2}>
                              <Icon as={RiPencilLine} fontSize={16} />
                            </Text>
                            Editar
                          </>
                        ) : (
                          <Icon as={RiPencilLine} fontSize={16} />
                        )}
                      </Button>
                    </Td>
                  </Tr>
                </Tbody>
                <Tbody>
                  <Tr>
                    <Td px={['4', '4', '6']}>
                      <Checkbox colorScheme="pink" />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">Rodrigo Santos</Text>
                        <Text fontSize="sm" color="gray.300">
                          contato.rodrigosaantos@gmail.com
                        </Text>
                      </Box>
                    </Td>
                    {isWideVersion && <Td>04 de Abril, 2021</Td>}
                    <Td>
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                      >
                        {isWideVersion ? (
                          <>
                            <Text as="span" marginInlineEnd={2}>
                              <Icon as={RiPencilLine} fontSize={16} />
                            </Text>
                            Editar
                          </>
                        ) : (
                          <Icon as={RiPencilLine} fontSize={16} />
                        )}
                      </Button>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}