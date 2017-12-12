import React from 'react';
import { withPrefix } from 'gatsby-link';
import { BlockLink, Button, Flex, Image, Text } from 'rebass';

import stdlib from '../assets/stdlib-logo.svg';

function Masthead() {
  return (
    <Flex direction="column" align="center" py={7}>
      <Text mb={5} f={5} center color="gray9">
        Simply beautiful open source icons
      </Text>

      <Flex width={[1, 'auto']} direction={['column', 'row']}>
        <Button
          is="a"
          href="https://github.com/feathericons/feather#feather"
          mx={[0, 2]}
          my={[2, 0]}
          px={5}
          py={4}
          f={2}
        >
          Get Started
        </Button>

        <Button
          is="a"
          href={withPrefix('/feather.zip')}
          download
          mx={[0, 2]}
          my={[2, 0]}
          px={5}
          py={4}
          f={2}
          color="gray9"
          bg="gray1"
        >
          Download
        </Button>
      </Flex>

      <BlockLink href="https://stdlib.com/" target="_blank" mt={6}>
        <Text center color="gray8">
          Sponsored by
        </Text>
        <Image src={stdlib} width={112} mt={1} />
      </BlockLink>
    </Flex>
  );
}

export default Masthead;
