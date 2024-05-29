import { Box, Container, VStack, Text, Image, Flex, Link, Heading, SimpleGrid } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaHome, FaMusic, FaBook } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="brand.800" color="white" p={4}>
        <Flex justify="space-between" align="center" maxW="container.lg" mx="auto">
          <Heading size="md">MusicStream</Heading>
          <Flex>
            <Link as={RouterLink} to="/" p={2} display="flex" alignItems="center">
              <FaHome />
              <Text ml={2}>Home</Text>
            </Link>
            <Link as={RouterLink} to="/browse" p={2} display="flex" alignItems="center">
              <FaMusic />
              <Text ml={2}>Browse</Text>
            </Link>
            <Link as={RouterLink} to="/library" p={2} display="flex" alignItems="center">
              <FaBook />
              <Text ml={2}>Library</Text>
            </Link>
          </Flex>
        </Flex>
      </Box>

      {/* Main Section */}
      <Container maxW="container.lg" py={10}>
        <Heading mb={6}>Featured Playlists</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Playlist 1" />
            <Box p={6}>
              <Heading size="md">Playlist 1</Heading>
              <Text mt={4}>Description of Playlist 1</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Playlist 2" />
            <Box p={6}>
              <Heading size="md">Playlist 2</Heading>
              <Text mt={4}>Description of Playlist 2</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Playlist 3" />
            <Box p={6}>
              <Heading size="md">Playlist 3</Heading>
              <Text mt={4}>Description of Playlist 3</Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="brand.900" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.lg" mx="auto">
          <Text>&copy; {new Date().getFullYear()} MusicStream</Text>
          <Flex>
            <Link as={RouterLink} to="/about" p={2}>
              About
            </Link>
            <Link as={RouterLink} to="/contact" p={2}>
              Contact
            </Link>
            <Link as={RouterLink} to="/terms" p={2}>
              Terms of Service
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;