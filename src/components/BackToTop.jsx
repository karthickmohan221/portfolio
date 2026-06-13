import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="
        fixed bottom-7 right-7 z-40
        w-[46px] h-[46px] rounded-full
        flex items-center justify-center
        border border-border-theme
        bg-card text-accent-theme
        shadow-lg
        transition-transform duration-200 ease-in-out
        hover:-translate-y-1
      "
    >
      <ArrowUp size={18} />
    </button>
  );
}
