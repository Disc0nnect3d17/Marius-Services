"use client";

export default function MobileMenuToggle() {
  return (
    <button
      id="menu-toggle"
      className="menu-toggle"
      aria-label="Toggle navigation menu"
      aria-expanded="false"
    >
      <i className="fas fa-bars"></i>
    </button>
  );
}
