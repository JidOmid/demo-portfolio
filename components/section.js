import { motion, isValidMotionProp } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: prop => isValidMotionProp(prop) || prop === 'children'
})

const Section = ({ children, delay = 0 }) => (
  <ChakraBox
    initial={{ x: 10, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, delay }}
  >
    {children}
  </ChakraBox>
)

export default Section
