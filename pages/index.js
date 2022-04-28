import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Section from '../components/section'

const Page = () => {
  return (
    <Container maxW="container.md">
      <Box
        borderRadius="lg"
        borderWidth={1}
        borderStyle="solid"
        borderColor={useColorModeValue('black', '#303134')}
        bg={useColorModeValue('#f0e7db', '#303134')}
        p={3}
        mb={6}
        align="center"
        cursor="default"
      >
        I am an aspiring front-end developer!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Majid Omid
          </Heading>
          <p>Gamer / Developer / Bicycle Riding Enthusiast</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          mr={{ md: 3 }}
          align="center"
        >
          <Image
            display="inline-block"
            borderRadius="full"
            borderColor={useColorModeValue('purple', 'blue')}
            borderStyle="dotted"
            borderWidth={2}
            src="/images/treeposecrop.jpg"
            maxWidth="150px"
          />
        </Box>
      </Box>

      <Section delay={0.2}>
        <Heading as="h2" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
          I just pulled up in a yankee bebody shlankeyy beboddy burr I just
          pulled up in a yankee bebody shlankeyy beboddy burrI just pulled up in
          a yankee bebody shlankeyy beboddy burrI just pulled up in a yankee
          bebody shlankeyy beboddy burr
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
