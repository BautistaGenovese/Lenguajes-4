import { useEffect, useId, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Espacio que deja la barra arriba y abajo
const RAIL_INSET = 24;

export default function ScrollArea({ children, className = '' }) {
  const viewport = useRef(null);
  const dragOffset = useRef(null);
  const id = useId();
  const { pathname } = useLocation();
  const [bar, setBar] = useState({ height: 0, top: 0, progress: 0, visible: false });

  // Vuelve arriba al cambiar de pagina
  useEffect(() => {
    viewport.current.scrollTop = 0;
  }, [pathname]);

  useEffect(() => {
    const element = viewport.current;
    // Calcula el tamaño y la posicion de la barra
    function measure() {
      const height = element.clientHeight;
      const maxScroll = element.scrollHeight - height;
      const railHeight = Math.max(0, height - RAIL_INSET * 2);
      const thumbHeight = Math.min(railHeight, Math.max(32, railHeight * height / element.scrollHeight));
      const progress = maxScroll > 0 ? element.scrollTop / maxScroll : 0;
      setBar({ height: thumbHeight, top: progress * (railHeight - thumbHeight), progress, visible: maxScroll > 1 && railHeight > 0 });
    }
    // Actualiza la barra cuando cambia el contenido o la ventana
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    observer.observe(element.firstElementChild);
    element.addEventListener('scroll', measure, { passive: true });
    measure();
    return () => {
      observer.disconnect();
      element.removeEventListener('scroll', measure);
    };
  }, []);

  // Mueve el contenido segun la posicion del mouse
  function moveTo(pointerY, rail) {
    const element = viewport.current;
    const travel = rail.clientHeight - bar.height;
    if (travel <= 0) return;
    const offset = pointerY - rail.getBoundingClientRect().top - dragOffset.current;
    const progress = Math.max(0, Math.min(1, offset / travel));
    element.scrollTop = progress * (element.scrollHeight - element.clientHeight);
  }

  // Permite arrastrar la barra con el mouse
  function startDrag(event) {
    if (event.button !== 0) return;
    event.preventDefault();
    const rail = event.currentTarget;
    rail.focus();
    dragOffset.current = event.target.dataset.thumb
      ? event.clientY - rail.getBoundingClientRect().top - bar.top
      : bar.height / 2;
    rail.setPointerCapture(event.pointerId);
    moveTo(event.clientY, rail);
  }

  // Permite usar la barra con las flechas del teclado
  function handleKey(event) {
    const element = viewport.current;
    const positions = {
      ArrowDown: element.scrollTop + 40,
      ArrowUp: element.scrollTop - 40,
      PageDown: element.scrollTop + element.clientHeight,
      PageUp: element.scrollTop - element.clientHeight,
      Home: 0,
      End: element.scrollHeight,
    };
    if (event.key in positions) {
      event.preventDefault();
      element.scrollTop = positions[event.key];
    }
  }

  return (
    <div className={`page-scroll ${className}`} style={{ '--scrollbar-inset': `${RAIL_INSET}px` }}>
      <div id={id} ref={viewport} className="page-scroll-viewport" tabIndex={0} role="region" aria-label="Contenido de la página">
        {children}
      </div>
      {bar.visible && (
        <div
          className="page-scroll-rail"
          role="scrollbar"
          tabIndex={0}
          aria-label="Desplazar contenido"
          aria-controls={id}
          aria-orientation="vertical"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(bar.progress * 100)}
          onKeyDown={handleKey}
          onPointerDown={startDrag}
          onPointerMove={event => {
            if (dragOffset.current !== null) moveTo(event.clientY, event.currentTarget);
          }}
          onLostPointerCapture={() => { dragOffset.current = null; }}
        >
          <div data-thumb="true" className="page-scroll-thumb" style={{ height: bar.height, top: bar.top }} />
        </div>
      )}
    </div>
  );
}
