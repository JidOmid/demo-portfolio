import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
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
          align="center"
        >
          <Image
            display="inline-block"
            borderRadius="full"
            borderColor={useColorModeValue('purple', 'blue')}
            borderStyle="dotted"
            borderWidth={2}
            src="/images/treeposecrop.jpg"
            maxWidth="100px"
          />
        </Box>
      </Box>
    </Container>
  )
}

export default Page
