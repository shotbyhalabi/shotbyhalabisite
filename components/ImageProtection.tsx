"use client";

import { useEffect } from "react";

export default function ImageProtection() {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      // Prevent right click on images
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault();
      }
    };

    const handleDragStart = (e: DragEvent) => {
      // Prevent dragging images
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  return null;
}
