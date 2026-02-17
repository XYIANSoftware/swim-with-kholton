"use client";

import { useState, useCallback } from "react";
import { Dialog } from "primereact/dialog";
import { TRUST_ITEMS } from "@/constants/copy";
import type { TrustItemId } from "@/constants/copy";

export function TrustStrip() {
  const [detailId, setDetailId] = useState<TrustItemId | null>(null);
  const openDetail = useCallback((id: TrustItemId) => setDetailId(id), []);
  const closeDetail = useCallback(() => setDetailId(null), []);

  const activeItem = detailId ? TRUST_ITEMS.find((t) => t.id === detailId) : null;

  return (
    <>
      <section
        className="py-4 px-3"
        style={{
          background: "var(--surface-section)",
          borderTop: "1px solid var(--surface-border)",
          borderBottom: "1px solid var(--surface-border)",
        }}
      >
        <div className="container flex flex-wrap justify-content-center gap-3 md:gap-4">
          {TRUST_ITEMS.map(({ id, icon, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => openDetail(id)}
              className="flex align-items-center gap-2 px-3 py-2 border-round border-none cursor-pointer surface-hover transition-colors transition-duration-150"
              style={{
                background: "transparent",
                color: "var(--text-color-secondary)",
              }}
              aria-label={`Learn more about ${label}`}
            >
              <i className={`pi ${icon} text-xl`} style={{ color: "var(--primary-color)" }} />
              <span className="font-medium text-sm md:text-base">{label}</span>
            </button>
          ))}
        </div>
      </section>

      <Dialog
        header={activeItem?.detail.title}
        visible={!!activeItem}
        onHide={closeDetail}
        style={{ width: "min(90vw, 28rem)" }}
        breakpoints={{ "960px": "90vw", "641px": "95vw" }}
        className="trust-detail-dialog"
        contentStyle={{ background: "var(--surface-card)", color: "var(--text-color)" }}
      >
        {activeItem && <p className="m-0 text-color-secondary">{activeItem.detail.body}</p>}
      </Dialog>
    </>
  );
}
