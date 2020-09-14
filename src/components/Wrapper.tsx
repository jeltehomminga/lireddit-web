import * as React from 'react';
import { Box } from '@chakra-ui/core';

interface WrapperProps {
  variant?: 'small' | 'regular';
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = 'regular'
}) => {
  return (
    <Box mt={8} mx='auto' maxW={variant === 'regular' ? 800 : 400} w='100%'>
      {children}
    </Box>
  );
};
