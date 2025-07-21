"use client";
import styles from './Navbar.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        {/* Hamburger Menu Icon */}
        <button
          className={styles.iconButton + ' ' + styles.menuButton}
          aria-label="Menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
        <div className={styles.links + ' ' + (menuOpen ? styles.linksOpen : '')}>
          <Link href="/">Home</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/new">New</Link>
        </div>
      </div>
      <div className={styles.right}>
        {/* Wishlist Icon */}
        <button className={styles.iconButton} aria-label="Wishlist">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 4.6c-1.5-1.3-3.8-1.1-5.2.3l-.6.6-.6-.6c-1.4-1.4-3.7-1.6-5.2-.3-1.7 1.5-1.8 4.1-.2 5.7l6 6.1 6-6.1c1.6-1.6 1.5-4.2-.2-5.7z"/></svg>
        </button>
        {/* Cart Icon with label */}
        <button className={styles.cartButton} aria-label="Cart">
          <span className={styles.cartLabel}>Cart</span>
          <span className={styles.cartIconWrapper}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          </span>
        </button>
        {/* Profile Icon */}
        <button className={styles.iconButton} aria-label="Profile">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M16 16c0-2.2-3.6-3.4-4-3.4s-4 1.2-4 3.4V20h8v-4z"/></svg>
        </button>
      </div>
    </nav>
  );
}
