import { Outlet } from "react-router-dom";
import { Grid, GridItem, Container, Box } from "@chakra-ui/react";

import NavLinks from "../components/dashboard/Nav-Links";
import Header from "../components/dashboard/Header";
import AvatarDisplay from "../components/dashboard/AvatarDisplay";

export default function RootLayout() {
  return (
    <Box bg="gray.700">
      <Grid
        templateAreas={`"header header"
                        "nav main"
                        "footer footer"`}
        gridTemplateRows={"10vh 80vh 10vh"}
        gridTemplateColumns={{
          base: "20vw 1fr",
          sm: "20vw 1fr",
          lg: "15vw 1fr",
          xl: "11vw 1fr",
        }}
        gap={1}
        color="blackAlpha.700"
        fontWeight="bold"
        bg="gray.700"
        h="100vh"
      >
        {/* Header Component */}
        <GridItem
          bg="gray.800"
          color="gray.400"
          area={"header"}
          display="flex"
          alignItems="center"
        >
          <Header />
        </GridItem>

        {/* Navigation Bar */}
        <GridItem
          bg="gray.800"
          color="gray.400"
          area={"nav"}
          position="relative"
        >
          <AvatarDisplay />
          <NavLinks />
        </GridItem>

        {/* Main Content Body */}
        <GridItem
          bg="gray.800"
          color="gray.400"
          area={"main"}
          overflowY={["scroll", "hidden"]}
        >
          <Outlet />
        </GridItem>

        {/* Footer */}
        <GridItem bg="gray.800" color="gray.400" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </Box>
  );
}
