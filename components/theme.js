"use server";

import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";

export const theme = async () => extendTheme({
    fonts: {
        heading: "var(--font-inter)",
        body: "var(--font-inter)"
    }
}, chakraTheme)