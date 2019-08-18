// credit: https://primer.style
// Authored by: Github's Design Systems Team 2019
// Avaliable for use under the MIT Licence

import React from "react";
import Head from "next/head";
import { Box, Heading } from "@primer/components";
import "@primer/css/layout/index.scss";

// FIXME: this works around known issues with Heading's default prop {m: 0}
Object.assign(Heading.defaultProps, {
  m: null,
  mt: 0,
  mb: 0
});

export default function Layout(props) {
  const { children, pageContext = {}, ...rest } = props;

  return (
    <>
      <Box bg="black" color="blue.2" {...rest}>
        {children}
      </Box>
    </>
  );
}
