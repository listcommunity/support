import React from "react";
import { Helmet } from "react-helmet";

const AppHelmet = ({ label, logo, favicon }) => {
  const metaSiteName = "List.community";
  const metaTitle = metaSiteName;
  const metaDesc = "List.community is an easy way to browse curated lists on GitHub.";
  const metaImage = "https://list.community/avatar.png";

  return (
    <Helmet titleTemplate="%s / List.community" defaultTitle="List.community">
      <meta name="description" content={metaDesc} />

      <meta property="og:url" content="https://list.community" />
      <meta property="og:site_name" content={metaSiteName} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={metaImage} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  );
};

export default AppHelmet;
