"use client";

import "./TrustStrip.scss";
import { useState, useCallback } from "react";
import { Dialog } from "primereact/dialog";
import { TRUST_ITEMS } from "@/constants/copy";
import type { TrustItemId } from "@/constants/copy";

export function TrustStrip() {
  const [detailId, setDetailId] = useState<TrustItemId | null>(null);
  const openDetail = useCallback((id: TrustItemId) => setDetailId(id), []);
  const closeDetail = useCallback(() => setDetailId(null), []);

  const activeItem = detailId ? TRUST_ITEMS.find((t) => t.id === detailId) : null;

  const renderItem = ({ id, icon, label }: (typeof TRUST_ITEMS)[number], index: number) => (
    <button
      key={`${id}-${index}`}
      type="button"
      onClick={() => openDetail(id)}
      className="trust-ticker-item flex align-items-center gap-2 border-round border-none cursor-pointer surface-hover transition-colors transition-duration-150"
      style={{
        background: "transparent",
        color: "var(--text-color-secondary)",
      }}
      aria-label={`Learn more about ${label}`}
    >
      <i className={`pi ${icon} text-2xl`} style={{ color: "var(--primary-color)" }} />
      <span className="font-medium text-sm md:text-base">{label}</span>
    </button>
  );

  return (
    <>
      <section className="trust-ticker">
        <div className="trust-ticker-track">
          {TRUST_ITEMS.map((item, i) => renderItem(item, i))}
          {TRUST_ITEMS.map((item, i) => renderItem(item, TRUST_ITEMS.length + i))}
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
