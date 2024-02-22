"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

const NextChakraProvider = ({ children, theme }) => {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>
                {children}
            </ChakraProvider>
        </CacheProvider>
    )
}

export default NextChakraProvider;