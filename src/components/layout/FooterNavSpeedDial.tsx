"use client";

import { useRouter } from "next/navigation";
import { SpeedDial } from "primereact/speeddial";
import type { MenuItem } from "primereact/menuitem";
import { NAV_LINKS, BOOK_LESSON_HREF } from "@/constants/nav";

const ICONS: Record<string, string> = {
  Home: "pi pi-home",
  About: "pi pi-user",
  Packages: "pi pi-briefcase",
  Schedule: "pi pi-calendar",
  FAQ: "pi pi-question-circle",
  "Book Lesson": "pi pi-calendar-plus",
};

export function FooterNavSpeedDial() {
  const router = useRouter();

  const items: MenuItem[] = [
    ...NAV_LINKS.map(({ href, label }) => ({
      label,
      icon: ICONS[label] ?? "pi pi-link",
      command: () => router.push(href),
    })),
    {
      label: "Book Lesson",
      icon: ICONS["Book Lesson"],
      command: () => router.push(BOOK_LESSON_HREF),
    },
  ];

  return (
    <div className="footer-speeddial">
      <SpeedDial
        model={items}
        direction="up"
        transitionDelay={80}
        showIcon="pi pi-bars"
        hideIcon="pi pi-times"
        buttonClassName="p-button-outlined p-button-sm"
      />
    </div>
  );
}
