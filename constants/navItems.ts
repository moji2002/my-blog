export type NavItem = {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
};

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/link5",
  },
  {
    label: "Categories",
    children: [
      {
        label: "Lifestyle",
        subLabel: "",
        href: "/link3",
      },
      {
        label: "Health",
        subLabel: "",
        href: "/link4",
      },
      {
        label: "Family",
        subLabel: "",
        href: "/link4",
      },
      {
        label: "Management",
        subLabel: "",
        href: "/link4",
      },
      {
        label: "Travel",
        subLabel: "",
        href: "/link4",
      },
      {
        label: "Work",
        subLabel: "",
        href: "/link4",
      },
    ],
  },
  {
    label: "Blog",
    children: [
      {
        label: "Video Post",
        subLabel: "",
        href: "/link3",
      },
      {
        label: "Audio Post",
        subLabel: "",
        href: "/link4",
      },
      {
        label: "Gallery Post",
        subLabel: "",
        href: "/link4",
      },
      {
        label: "Standard Post",
        subLabel: "",
        href: "/link4",
      },
    ],
  },
  {
    label: "Styles",
    href: "/link5",
  },
  {
    label: "About",
    href: "/link6",
  },
  {
    label: "Contact",
    href: "/link6",
  },
];
