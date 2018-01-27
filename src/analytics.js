import GoogleAnalytics from "ganalytics";

import { isSnapshot } from "./snapshots";

const production = process.env.NODE_ENV === "production";

if (production && !isSnapshot) {
  new GoogleAnalytics("UA-112031729-1");
}
