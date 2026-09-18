import { useEffect } from 'react';

/**
 * Hook für bessere Keyboard-Navigation und Accessibility
 * Zeigt Focus-Indikator nur bei Keyboard-Interaktion
 */
export function useKeyboardNavigation() {
  useEffect(() => {
    let isUsingKeyboard = false;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Tab, Shift+Tab, Enter, Space = Keyboard-Navigation
      if (event.key === 'Tab' || event.key === 'Enter' || event.key === ' ') {
        isUsingKeyboard = true;
        document.documentElement.classList.add('keyboard-nav');
      }
    };

    const handleMouseDown = () => {
      isUsingKeyboard = false;
      document.documentElement.classList.remove('keyboard-nav');
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);
}
