import React from "react";
import { Helmet } from "react-helmet";

export default function Header() {
  return (
    <Helmet>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Blogg</title>
      <link rel="stylesheet" href="/assets/fontawesome/css/all.min.css" />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
        rel="stylesheet"
      />
      <link href="/assets/css/bootstrap.min.css" rel="stylesheet" />
      <link href="/assets/css/templatemo-xtra-blog.css" rel="stylesheet" />
      <script src="/assets/js/templatemo-script.js" />
      <script src="/assets/js/jquery.min.js" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Mukta:wght@800&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
}
