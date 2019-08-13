import React from 'react'
import {BorderBox, Box, Flex, Heading, Link, StyledOcticon, Text} from '@primer/components'
import ButtonOutline from '../components/ButtonOutline'
import ButtonPromo from '../components/ButtonPromo'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import FramerIcon from '../components/FramerIcon'
import CodeSandboxIcon from '../components/CodeSandboxIcon'
import {ReactComponent as CSSImage} from '../svg/css.svg'
import {ReactComponent as ComponentsImage} from '../svg/components.svg'
import {ReactComponent as PresentationsImage} from '../svg/presentations.svg'
import {ReactComponent as OcticonsImage} from '../svg/octicons.svg'
import {ReactComponent as GuidelinesImage} from '../svg/guidelines.svg'
import {ReactComponent as FigmaImage} from '../svg/figma.svg'

const gutter = 6

export default function Index(props) {
  return (
    <Layout {...props}>
      <Box bg="white" color="black" px={4} py={12}>
        <Box className="container-xl" px={2}>
          <Heading fontSize={6} textAlign="center" lineHeight={1}>
            Framer Next.js
          </Heading>
          <Text as="p" textAlign="center" mb={8}>
            A technical showcase of the Framer API Examples implemented with Next.js. Each picture links to a
            CodeSandbox.
          </Text>
          <Flex flexWrap="wrap" mr={[0, 0, -gutter]}>
            <Promo
              title="Frame"
              image={CSSImage}
              codesandboxid={'62km0298rk'}
              href="https://codesandbox.io/s/github/nataliemarleny/framernext-examples/tree/master/API-Examples-Frame"
              api="https://www.framer.com/api/examples/#frame"
            >
              The basic container for layout, styling, animation and events.
            </Promo>
            <Promo
              title="Stack"
              image={ComponentsImage}
              codesandboxid={'o9y86o898q'}
              href="https://codesandbox.io/s/github/nataliemarleny/framernext-examples/tree/master/API-Examples-Stack"
              api="https://www.framer.com/api/examples/#stack"
            >
              Stacks help you easily create flexible and automatically distributed layouts with Frames.
            </Promo>
            <Promo
              title="Animation"
              image={OcticonsImage}
              codesandboxid={'ykppk6k3wv'}
              href="https://codesandbox.io/s/github/nataliemarleny/framernext-examples/tree/master/API-Examples-Animate"
              api="https://www.framer.com/api/examples/#animate"
            >
              A set of properties and helpers for high-performance, declarative animations.
            </Promo>
            <Promo
              title="Animate/Loop"
              image={PresentationsImage}
              codesandboxid={'wqz8n1wk05'}
              href="https://codesandbox.io/s/github/nataliemarleny/framernext-examples/tree/master/API-Examples-Loop"
              api="https://www.framer.com/api/examples/#loop"
            >
              Here, we’re setting the loop property to Infinity, and the ease to linear, for a perfectly looping
              animation.
            </Promo>
            <Promo
              title="Animate/Cycle"
              image={GuidelinesImage}
              codesandboxid={'xl7nmv46wq'}
              href="https://codesandbox.io/s/github/nataliemarleny/framernext-examples/tree/master/API-Examples-Cycle"
              api="https://www.framer.com/api/examples/#cycle"
            >
              You can cycle through animations with the useCycle method from Framer.
            </Promo>
            <Promo
              title="Animate/Color"
              image={FigmaImage}
              codesandboxid={'vv8ll0pmk7'}
              href="https://codesandbox.io/s/github/nataliemarleny/framernext-examples/tree/master/API-Examples-Color"
              api="https://www.framer.com/api/examples/#color"
            >
              Color strings can also be animated by using the background property.
            </Promo>
            <Promo
              title="Animate/Arrays"
              image={CSSImage}
              codesandboxid={'o4j24j2zmq'}
              href="https://codesandbox.io/s/github/nataliemarleny/framernext-examples/tree/master/API-Examples-Arrays"
              api="https://www.framer.com/api/examples/#arrays"
            >
              Next to single values, you can also animate arrays of values within the animate property.
            </Promo>
            <Promo
              title="Gestures"
              image={ComponentsImage}
              codesandboxid={'jlq97yryk9'}
              href="https://codesandbox.io/s/github/nataliemarleny/framernext-examples/tree/master/API-Examples-Gestures"
              api="https://www.framer.com/api/examples/#gestures"
            >
              Start by animating a Frame when tapping on it. Then create two constants, a default rotate value of 0 and
              a setState method.
            </Promo>
            <Promo
              title="On Hover"
              image={OcticonsImage}
              codesandboxid={'8zoqqj2x2j'}
              href="https://codesandbox.io/s/github/nataliemarleny/framernext-examples/tree/master/API-Examples-Hover"
              api="https://www.framer.com/api/examples/#on-hover"
            >
              Scale down a Frame when hovering it. Use the whileHover property, and pass along a property as its value.
            </Promo>
            <Promo
              title="Dragging/Constraints"
              image={PresentationsImage}
              codesandboxid={'53mv19r5r4'}
              href="https://codesandbox.io/s/github/nataliemarleny/framernext-examples/tree/master/API-Examples-Constraints"
              api="https://www.framer.com/api/examples/#constraints"
            >
              You can easily make any Frame draggable with the drag property.
            </Promo>
            <Promo
              title="Scrolling"
              image={GuidelinesImage}
              codesandboxid={'zqk53xj9k3'}
              href="https://codesandbox.io/s/github/nataliemarleny/framernext-examples/tree/master/API-Examples-Scrolling"
              api="https://www.framer.com/api/examples/#scrolling"
            >
              For scrolling, you can wrap Frames in a Scroll component, to make them automatically scrollable.
            </Promo>
            <Promo
              title="Paging"
              image={FigmaImage}
              codesandboxid={'88j3049zr9'}
              href="https://codesandbox.io/s/github/nataliemarleny/framernext-examples/tree/master/API-Examples-Paging"
              api="https://www.framer.com/api/examples/#paging"
            >
              For paging, you can wrap Frames in a Page component to make them swipeable.
            </Promo>
            <Promo
              title="Transforms"
              image={PresentationsImage}
              codesandboxid={'l0061n7v7'}
              href="https://codesandbox.io/s/github/nataliemarleny/framernext-examples/tree/master/API-Examples-Transforms"
              api="https://www.framer.com/api/examples/#transforms"
            >
              Here, we’re using two custom Hooks in Framer to transform values from one range to another.
            </Promo>
            <Promo
              title="Variants"
              image={GuidelinesImage}
              codesandboxid={'98vm5qo84'}
              href="https://codesandbox.io/s/github/nataliemarleny/framernext-examples/tree/master/API-Examples-Variants"
              api="https://www.framer.com/api/examples/#variants"
            >
              Variants are collections of visual properties, like states, that you can animate or cycle between.
            </Promo>
          </Flex>
        </Box>
      </Box>
      <Footer />
    </Layout>
  )
}

const A = props => <Link {...props} />
A.defaultProps = {
  color: 'inherit',
  underline: false
}

const Promo = ({title, codesandboxid, href, api, image: Image = 'div', children, ...rest}) => (
  <Box pr={[0, 0, gutter]} mb={[6, 6, 8]} width={[1, 1, 1 / 2, 1 / 3]} {...rest}>
    <A href={href} display="block" mb={1}>
      <BorderBox as={Image} bg="black" border={0} borderRadius={2} width="100%" height={null} minHeight={220} />
    </A>
    <Heading fontSize={4}>
      <A href={href}>{title}</A>
    </Heading>
    <Text as="p" my={0} mb={6}>
      {children}
    </Text>
    <ButtonOutline mb={3} href={api}>
      <StyledOcticon icon={FramerIcon} size={20} verticalAlign="text-bottom" mr={2} />
      {title} API Docs
    </ButtonOutline>
    <ButtonPromo mb={3} href={`https://codesandbox.io/s/${codesandboxid}`}>
      <StyledOcticon icon={CodeSandboxIcon} size={20} verticalAlign="text-bottom" mr={2} />
      Original CodeSandbox
    </ButtonPromo>
  </Box>
)
