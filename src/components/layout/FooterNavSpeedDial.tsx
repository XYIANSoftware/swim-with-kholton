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

function actionTemplate(item: MenuItem, options: { onClick: (e: React.MouseEvent) => void; className: string; iconClassName: string }) {
  const iconClass = item.icon ? `${options.iconClassName} ${typeof item.icon === "string" ? item.icon : ""}` : options.iconClassName;
  return (
    <a
      href="#"
      role="menuitem"
      className={`${options.className} p-speeddial-action-with-label`}
      onClick={(e) => {
        e.preventDefault();
        item.command?.({ originalEvent: e, item });
      }}
      aria-label={item.label}
    >
      <span className={iconClass} />
      {item.label && <span className="p-speeddial-action-label">{item.label}</span>}
    </a>
  );
}

export function FooterNavSpeedDial() {
  const router = useRouter();

  const items: MenuItem[] = [
    ...NAV_LINKS.map(({ href, label }) => ({
      label,
      icon: ICONS[label] ?? "pi pi-link",
      command: () => router.push(href),
      template: actionTemplate,
    })),
    {
      label: "Book Lesson",
      icon: ICONS["Book Lesson"],
      command: () => router.push(BOOK_LESSON_HREF),
      template: actionTemplate,
    },
  ];

  return (
    <div className="footer-speeddial">
      <SpeedDial
        model={items}
        direction="up"
        transitionDelay={80}
        showIcon="pi pi-question-circle"
        hideIcon="pi pi-times"
        buttonClassName="p-button-text p-button-sm"
      />
    </div>
  );
}
