import Svg from "./index";


export const UserCircleIcon = () => (
  <Svg><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" /><path d="M20 21a8 8 0 1 0-16 0" /></Svg>
);

export const UserIcon = () => (
  <Svg><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></Svg>
);

export const BriefcaseIcon = () => (
  <Svg><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><path d="M2 13h20" /></Svg>
);

export const ChevronsIcon = () => (
  <Svg><polyline points="8 7 3 12 8 17" /><polyline points="16 7 21 12 16 17" /></Svg>
);

export const ExternalIcon = () => (
  <Svg><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><path d="M15 3h6v6" /><path d="M10 14L21 3" /></Svg>
);

export const CapIcon = () => (
  <Svg><path d="M22 10L12 4 2 10l10 6 10-6Z" /><path d="M6 12v5c0 1.1 2.69 2 6 2s6-.9 6-2v-5" /></Svg>
);

export const TrophyIcon = () => (
  <Svg><path d="M8 21h8" /><path d="M12 17v4" /><path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" /><path d="M18 6h3a3 3 0 0 1-3 3" /><path d="M6 9A3 3 0 0 1 3 6h3" /></Svg>
);

export const ChatIcon = () => (
  <Svg><path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" /></Svg>
);

export const HamburgerIcon: React.FC<{ open: boolean }> = ({ open }) => (
  <Svg>
    {open ? (
      <>
        <path d="M18 6L6 18" />
        <path d="M6 6l12 12" />
      </>
    ) : (
      <>
        <path d="M3 6h18" />
        <path d="M3 12h18" />
        <path d="M3 18h18" />
      </>
    )}
  </Svg>
);

import React from "react";

export const SolidBriefcaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <Svg><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"></path></Svg>
);

