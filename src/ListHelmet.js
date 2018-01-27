import React from "react";
import { Helmet } from "react-helmet";
import urlJoin from "url-join";
import isAbsoluteUrl from "is-absolute-url";

const ListHelmet = ({ label, logo, favicon }) => {
  const metaTitle = `${label} / List.community`;
  const metaDesc = "List.community is an easy way to browse curated lists on GitHub.";
  let metaImage = "https://list.community/avatar.png";

  if (logo && isAbsoluteUrl(logo)) {
    metaImage = `${logo}?size=460`;
  } else if (logo) {
    metaImage = urlJoin("https://list.community", logo);
  }

  return (
    <Helmet>
      <title>{label}</title>
      <link rel="icon" type="image/png" href={`${favicon || logo || "/favicon.png"}?size=32`} />

      <meta property="og:url" content="https://list.community" />
      <meta property="og:site_name" content="List.community" />
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

export default ListHelmet;
