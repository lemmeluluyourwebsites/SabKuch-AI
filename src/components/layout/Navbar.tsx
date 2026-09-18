import React, { useState, useEffect } from 'react';
import { BrandLogo } from '../common/BrandLogo';
import { PrimaryButton } from '../common/Button';
import { NAV_ITEMS } from '../../config/brand';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className="navbar-wrapper"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 'var(--z-nav)',
        transition: 'all var(--duration-normal) var(--ease-standard)',
        backgroundColor: isScrolled ? 'rgba(6, 7, 7, 0.88)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled
          ? '1px solid var(--color-border)'
          : '1px solid transparent',
        padding: isScrolled ? '0.85rem 0' : '1.35rem 0'
      }}
    >
      <div
        className="navbar-container flex-between"
        style={{
          width: '100%',
          maxWidth: '100%',
          paddingLeft: 'calc(var(--page-padding) * 0.5)',
          paddingRight: 'calc(var(--page-padding) * 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Brand Logo */}
        <a
          href="#"
          aria-label="SabKuch AI Home"
          style={{ display: 'inline-flex', alignItems: 'center' }}
        >
          <BrandLogo size="md" showWordmark={true} />
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-6)'
          }}
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link"
              style={{
                fontSize: 'var(--text-sm)',
                fontWeight: 500,
                color: 'var(--color-text-secondary)',
                transition: 'color var(--duration-fast) var(--ease-standard)',
                letterSpacing: 'var(--tracking-tight)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <PrimaryButton href="#contact" className="btn-sm" showArrow={true}>
            Start an Inquiry
          </PrimaryButton>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-toggle-btn"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
            style={{
              display: 'none',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)',
              padding: '0.5rem',
              color: 'var(--color-text)'
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-drawer"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'rgba(6, 7, 7, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--color-border)',
            padding: 'var(--space-6) calc(var(--page-padding) * 0.5)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-4)',
            boxShadow: 'var(--shadow-deep)'
          }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMobileMenu}
              style={{
                fontSize: 'var(--text-lg)',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                color: 'var(--color-text)',
                padding: 'var(--space-2) 0',
                borderBottom: '1px solid var(--color-border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{item.label}</span>
              <ArrowUpRight size={16} color="var(--color-primary)" />
            </a>
          ))}
          <div style={{ marginTop: 'var(--space-2)' }}>
            <PrimaryButton href="#contact" fullWidth onClick={closeMobileMenu}>
              Start an Inquiry
            </PrimaryButton>
          </div>
        </div>
      )}

      {/* Embedded CSS for responsive navbar toggle */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
};
