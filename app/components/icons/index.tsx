
import React from "react"

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width={20}
    height={20}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    {...props}
  />
);

export default Svg;