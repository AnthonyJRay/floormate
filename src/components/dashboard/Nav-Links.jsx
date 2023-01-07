import React from "react";
import { Link } from "react-router-dom";
import Login from "../logIn/Login";

// UI Imports
import {
  List,
  ListItem,
  ListIcon,
  Hide,
  Text,
  Box,
  Container,
} from "@chakra-ui/react";

// Icon Imports
import { BiLineChartDown } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";
import { BiFace } from "react-icons/bi";
import { BiStoreAlt } from "react-icons/bi";
import { FaFileInvoiceDollar } from "react-icons/fa";

export default function Navlinks() {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <List
        spacing={[10, 12]}
        w={["100%", "100%", "90%", "65"]}
        mt={4}
        m={[null, null, 4]}
      >
        {/* Dashboard NavLink */}
        <ListItem textAlign={["center", "center", "left"]}>
          <Link to={`/`}>
            <Box
              display={["null", "null", "flex"]}
              alignItems={["center", "start"]}
            >
              <ListIcon
                as={BiStoreAlt}
                color="black.900"
                fontSize={["2rem", null, "2rem"]}
              />
              <Hide below="md">
                <Text>Dashboard</Text>
              </Hide>
            </Box>
          </Link>
        </ListItem>

        {/* Estimates NavLink */}
        <ListItem textAlign={["center", "center", "left"]}>
          <Link to={`estimates`}>
            <Box display={["null", "null", "flex"]} alignItems="center">
              <ListIcon
                as={BiEdit}
                color="black.900"
                fontSize={["2rem", null, "2rem"]}
              />
              <Hide below="md">Estimates</Hide>
            </Box>
          </Link>
        </ListItem>

        {/* Invoices NavLink */}
        <ListItem textAlign={["center", "center", "left"]}>
          <Link to={`invoices`}>
            <Box display={["null", "null", "flex"]} alignItems="center">
              <ListIcon
                as={FaFileInvoiceDollar}
                color="black.900"
                fontSize={["2rem", null, "2rem"]}
              />
              <Hide below="md">Invoices</Hide>
            </Box>
          </Link>
        </ListItem>

        {/* Clients NavLink */}
        <ListItem textAlign={["center", "center", "left"]}>
          <Link to={`clients`}>
            <Box display={["null", "null", "flex"]} alignItems="center">
              <ListIcon
                as={BiFace}
                color="black.900"
                fontSize={["2rem", null, "2rem"]}
              />
              <Hide below="md">Clients</Hide>
            </Box>
          </Link>
        </ListItem>

        {/* Expenses NavLink */}
        <ListItem textAlign={["center", "center", "left"]}>
          <Link to={`expenses`}>
            <Box display={["null", "null", "flex"]} alignItems="center">
              <ListIcon
                as={BiLineChartDown}
                color="black.900"
                fontSize={["2rem", null, "2rem"]}
              />
              <Hide below="md">Expenses</Hide>
            </Box>
          </Link>
        </ListItem>
      </List>
      <Login />
    </Box>
  );
}
