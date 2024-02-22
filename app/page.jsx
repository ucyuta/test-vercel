"use client";

import { Flex, Heading, Input, Button, useColorMode,
         useColorModeValue, Box, Stack, Image, FormControl,
         FormLabel, 
         FormHelperText,
         FormErrorMessage} from "@chakra-ui/react";
import { redirect } from "next/navigation";
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { useState } from "react";

const NavLink = ({ children }) => {
    const navBackGround = useColorModeValue("gray.200", "gray.700");

    return (
        <Box as="a" px={2} py={1} rounded="md" _hover={{textDecoration: "none", bg: navBackGround}} href="#">{children}</Box>
    )
}

const Page = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    const formBackGround = useColorModeValue("gray.100", "gray.700");
    const naxboxBackGround = useColorModeValue("gray.100", "gray.900");
    const onSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch("/api/submit", {method: "POST", body: JSON.stringify({email, password})});
        console.log(await response.text());
    };
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (p) => setPassword(p.target.value);

    return (
        <>
        <Box bg={naxboxBackGround} px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
            <Box>
                <Image src="yutasaba.png" boxSize="70px" borderRadius="full" />
            </Box>

            <Flex alignItems="center">
                <Stack direction="row" spacing={7}>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </Stack>
            </Flex>
        </Flex>
        </Box>
        <Flex height="100vh" alignItems="center" justifyContent="center">
            <Flex direction="column" background={formBackGround} padding={12} rounded={6}>
                <Heading mb={6}>Log in</Heading>
                <form onSubmit={onSubmit}>
                <FormControl isInvalid={email === "" || password === ""}>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" value={email} onChange={handleEmailChange} mb={email === "" ? 0 : 3} variant="filled" />
                    {email !== "" ? "" : (
                        <FormErrorMessage mb={3}>Email is required.</FormErrorMessage>
                    )}
                    <FormLabel>Password</FormLabel>
                    <Input type="password" value={password} onChange={handlePasswordChange} mb={password === "" ? 0 : 6} variant="filled" />
                    {password !== "" ? "" : (
                        <FormErrorMessage mb={6}>Password is required.</FormErrorMessage>
                    )}
                    <Button type="submit">Submit</Button>
                </FormControl>
                </form>
            </Flex>
        </Flex>
        </>
    )
}

export default Page;