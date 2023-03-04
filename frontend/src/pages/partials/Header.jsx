import React from "react";
import { Helmet } from "react-helmet";

export default function Header() {
  return (
    <Helmet>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Blogg</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Mukta:wght@800&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
}
