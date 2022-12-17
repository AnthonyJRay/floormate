import { Outlet } from "react-router-dom"
import { Grid, GridItem } from '@chakra-ui/react'
import NavLinks from "../Nav-Links"

import Header from "../components/Header"


export default function RootLayout() {

  return (
     <Grid
  templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
  gridTemplateRows={'75px 1fr 75px'}
  gridTemplateColumns={'20vw 1fr'}
  h='100vh'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  {/* Header Component */}
  <GridItem pl='2' bg='purple.100' area={'header'}>
    <Header />
  </GridItem>

   {/* Navigation Bar */}
  <GridItem pl='2' bg='pink.100' area={'nav'}>
   <NavLinks />
  </GridItem>

   {/* Main Content Body */}
  <GridItem pl='2' bg='green.100' area={'main'}>
    <Outlet />
  </GridItem>

   {/* Footer */}
  <GridItem pl='2' bg='blue.100' area={'footer'}>
    Footer
  </GridItem>
</Grid>
  )
}