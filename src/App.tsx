import React from "react"
import {
  ChakraProvider,
  Box,
  Button,
  VStack,
  Grid,
  theme,
} from "@chakra-ui/react"
import browser from "webextension-polyfill";

const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={2}>
          <Button
            colorScheme="yellow"
            variant="solid"
            onClick={() => browser.runtime.sendMessage({action: "setTimer"})}
          >
            騎兵迴旋
          </Button>
          <Button
            colorScheme="red"
            variant="solid"
            onClick={() => browser.runtime.sendMessage({action: "resetTimer"})}
          >
            敗者食塵
          </Button>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)

export default App