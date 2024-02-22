import NextChakraProvider from "../components/NextChakraProvider";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
})

const Layout = ({ children }) => {
    return (
        <html lang="ja"> 
            <body className={inter.className}>
                <NextChakraProvider>
                    {children}
                </NextChakraProvider>
            </body>
        </html>
    )
}

export default Layout;