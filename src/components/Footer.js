import React from 'react';
import { Flex } from 'rebass';

import logOutboundLink from '../utils/log-outbound-link';
import Link from './Link';

function Footer() {
  return (
    <Flex is="footer" direction="column" align="center" py={7}>
      <Link
        href="https://twitter.com/colebemis"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => logOutboundLink('made by @colebemis')}
      >
        Made by @colebemis
      </Link>
    </Flex>
  );
}

export default Footer;
