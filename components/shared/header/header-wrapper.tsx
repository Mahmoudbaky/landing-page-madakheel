"use client";

import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";

import NavBar from ".";

const HeaderWrapper = () => {
  // Gets the first segment of the current route
  const segment = useSelectedLayoutSegment();

  // Or if you need the full path segments as an array
  const segments = useSelectedLayoutSegments();

  // Convert segments array to a path-like string if needed
  const currentPath = segments.length > 0 ? `/${segments.join("/")}` : "/";

  return <NavBar pathName={segment} fullPath={segments} />;
};

export default HeaderWrapper;
