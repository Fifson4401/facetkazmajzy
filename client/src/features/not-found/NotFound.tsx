'use client';

import { FC } from 'react';
import { Box, Button, Center, Flex, Img, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import DoodleContainer from '@/components/ui/Doodle/DoodleContainer';
import { doodles } from './Doodles';

export const NotFound: FC = () => {
  return (
    <Box position="relative" h="100vh" w="100vw" overflow="hidden">
      <DoodleContainer doodles={doodles}>
        <Center h="full">
          <Flex direction="column" align="center" gap={5}>
            <Img src="/404.webp" alt="404" w="full" maxW="500px" />
            <Text
              as="h1"
              fontSize={{ base: '2xl', md: '4xl' }}
              fontWeight={700}
              textAlign="center"
            >
              Nie znaleziono strony
            </Text>
            <Text fontSize={{ base: 'md', md: 'xl' }} textAlign="center">
              Strona, której szukasz nie istnieje lub została przeniesiona.
            </Text>
            <Button as={NextLink} href="/" variant="primary">
              Wróć na stronę główną
            </Button>
          </Flex>
        </Center>
      </DoodleContainer>
    </Box>
  );
};
