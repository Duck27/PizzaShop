import React from "react";
import ContentLoader from "react-content-loader";

const PizzaSkeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="139" cy="130" r="130" />
    <rect x="0" y="279" rx="16" ry="16" width="280" height="30" />
    <rect x="-1" y="345" rx="11" ry="11" width="280" height="88" />
    <rect x="1" y="451" rx="8" ry="8" width="95" height="30" />
    <rect x="126" y="445" rx="27" ry="27" width="152" height="45" />
  </ContentLoader>
);

export default PizzaSkeleton;
