import { Box, Button, Flex, Link } from '@chakra-ui/core';
import NextLink from 'next/link';
import * as React from 'react';
import { useMeQuery } from '../generated/graphql';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery();

  return (
    <Flex p='4' bg='tomato'>
      <Box ml='auto'>
        {fetching ? (
          <div>user not logged in</div>
        ) : !data?.me ? (
          <>
            <NextLink href='/login'>
              <Link mr='4'>login</Link>
            </NextLink>
            <NextLink href='/register'>
              <Link mr='4'>register</Link>
            </NextLink>
          </>
        ) : (
          <Flex>
            <Box mr='2'>{data.me.username}</Box>
            <Button variant='link'>logout</Button>
          </Flex>
        )}
      </Box>
    </Flex>
  );
};

export default NavBar;
