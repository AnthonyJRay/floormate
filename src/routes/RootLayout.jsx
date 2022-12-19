import { Outlet } from "react-router-dom"
import { Grid, GridItem, Container } from '@chakra-ui/react'

import NavLinks from "../components/Nav-Links"
import Header from "../components/Header"
import AvatarDisplay from "../components/AvatarDisplay"


export default function RootLayout() {

  return (
    <Container bg="gray.700">
     <Grid
  templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
  gridTemplateRows={'75px 1fr 75px'}
  gridTemplateColumns={'20vw 1fr'}
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
  bg="gray.700"
>
  {/* Header Component */}
  <GridItem bg='gray.800' color="gray.400" area={'header'} display="flex" alignItems="center">
    <Header />
  </GridItem>

   {/* Navigation Bar */}
  <GridItem bg='gray.800' color="gray.400" area={'nav'} position="relative">
    <AvatarDisplay />
    <NavLinks />
  </GridItem>

   {/* Main Content Body */}
  <GridItem bg='gray.800' color="gray.400" area={'main'}>
    <Outlet />
  </GridItem>

   {/* Footer */}
  <GridItem bg='gray.800' color="gray.400" area={'footer'}>
    Footer
  </GridItem>
</Grid>
</Container>
  )
}