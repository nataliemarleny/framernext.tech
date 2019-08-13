import React from 'react'
import {Box, BorderBox, Heading, StyledOcticon, Text} from '@primer/components'
import {Heart, MarkGithub, Octoface, Star} from '@primer/octicons-react'
import ButtonFillDark from './ButtonFillDark'
import CodeSandboxIcon from './CodeSandboxIcon'
import FramerIcon from './FramerIcon'
import IndexGrid from './IndexGrid'
import LinkDark from './LinkDark'
import MediumIcon from './MediumIcon'
import NextjsIcon from './NextjsIcon'
import TwitterIcon from './TwitterIcon'
import ZEITIcon from './ZEITIcon'

export default function OpenSource() {
  return (
    <Box bg="blue.2" pt={12}>
      <IndexGrid alignItems="start">
        <IndexGrid.Item mb={3}>
          <Heading color="black" mb={3} fontSize={7} fontWeight="bold">
            Colophon
          </Heading>
          <LinkDark pt={1} fontSize={2} mb={3} display="block" href="https://www.framer.com/loupe/">
            <StyledOcticon icon={Heart} size={20} verticalAlign="top" mr={2} />
            Created as part of Framer Loupe 2019
          </LinkDark>
          <LinkDark pt={1} fontSize={2} mb={3} display="block" href="https://www.framer.com/api">
            <StyledOcticon icon={FramerIcon} size={20} verticalAlign="top" mr={2} />
            Examples built using the Framer X API
          </LinkDark>
          <LinkDark fontSize={2} mb={3} display="block" href="https://nextjs.org">
            <StyledOcticon icon={NextjsIcon} size={20} verticalAlign="top" mr={2} />
            Next.js leveraged for scale
          </LinkDark>
          <LinkDark fontSize={2} mb={3} display="block" href="https://codesandbox.io">
            <StyledOcticon icon={CodeSandboxIcon} size={20} verticalAlign="top" mr={2} />
            CodeSandbox.io for hosting environments
          </LinkDark>
          <LinkDark fontSize={2} mb={3} display="block" href="https://github.com">
            <StyledOcticon icon={Octoface} size={20} verticalAlign="text-top" mr={2} /> GitHub repository code imports
          </LinkDark>
          <LinkDark fontSize={2} mb={3} display="block" href="https://zeit.co">
            <StyledOcticon icon={ZEITIcon} size={20} verticalAlign="top" mr={2} />
          ZEIT Now for deploying framernext.tech
          </LinkDark>
          <ButtonFillDark mt={5} mb={3} mr={2} href="https://github.com/nataliemarleny/framernext.tech">
            <StyledOcticon icon={MarkGithub} size={20} verticalAlign="text-bottom" mr={2} />
            View the framernext.tech repository
          </ButtonFillDark>
        </IndexGrid.Item>
        <IndexGrid.Item>
          <Heading color="black" mb={3} fontSize={7} fontWeight="bold">
            ¡Hola!
          </Heading>
          <LinkDark pt={1} fontSize={2} mb={3} display="block" href="https://nataliemarleny.com">
            <StyledOcticon icon={Star} size={20} verticalAlign="top" mr={2} />
            Site and examples by Natalie Marleny
          </LinkDark>
          <LinkDark pt={1} fontSize={2} mb={3} display="block" href="https://twitter.com/nataliemarleny">
            <StyledOcticon icon={TwitterIcon} size={20} verticalAlign="top" mr={2} />
            twitter/@nataliemarleny
          </LinkDark>
          <LinkDark fontSize={2} mb={3} display="block" href="https://github.com/nataliemarleny">
            <StyledOcticon icon={MarkGithub} size={20} verticalAlign="text-top" mr={2} />
            github/nataliemarleny
          </LinkDark>
          <LinkDark fontSize={2} mb={3} display="block" href="codesandbox.io/u/nataliemarleny">
            <StyledOcticon icon={CodeSandboxIcon} size={20} verticalAlign="top" mr={2} />
            codesandbox/nataliemarleny
          </LinkDark>
          <LinkDark fontSize={2} mb={3} display="block" href="https://medium.com/@nataliemarleny">
            <StyledOcticon icon={MediumIcon} size={20} verticalAlign="top" mr={2} />
            medium/@nataliemarleny
          </LinkDark>
        </IndexGrid.Item>
      </IndexGrid>
      <Box color="black" px={5} mx="auto" className="container-xl">
        <BorderBox mt={12} py={5} borderRadius={0} border={0} borderTop={2} borderStyle="solid" borderColor="black">
          <Text pr={1} as="span">
            This site is a fork of
          </Text>
          <LinkDark fontWeight="bold" href="https://primer.style/">
            primer.style
          </LinkDark>
          <Text pr={1} as="span">
            , created and maintained by GitHub&#8217;s
          </Text>
          <LinkDark fontWeight="bold" href="https://primer.style/team">
            Design Systems team
          </LinkDark>
          <Text>.</Text>
          <Text as="p" pr={1}>
            The Primer design system is available for use under the MIT license.{' '}
            <Text as="p">&copy; GitHub {new Date().getFullYear()}</Text>
          </Text>
        </BorderBox>
      </Box>
    </Box>
  )
}
