// ============================================================================
// LN Engineering — Navigation Data
// ============================================================================

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Machines",
    href: "/machines",
    children: [
      { label: "Mono Wire Saw Machines", href: "/machines/mono-wire-saw" },
      { label: "Multiwire Saw Machines", href: "/machines/multiwire-saw" },
      { label: "CNC Wire Profile Machines", href: "/machines/cnc-wire-profile" },
      { label: "Diamond Wire Rope", href: "/products/wire-rope", badge: "Consumable" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];
