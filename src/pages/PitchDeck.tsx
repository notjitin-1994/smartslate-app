import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { slides } from '@/data/slides';
import '../styles/PitchDeck.css';

export default function PitchDeck() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goToNextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  }, [currentSlide]);

  const goToPreviousSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }, [currentSlide]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        goToNextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
        e.preventDefault();
        goToPreviousSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(slides.length - 1);
      } else if (e.key === 'Escape') {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        }
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [goToNextSlide, goToPreviousSlide, goToSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const slide = slides[currentSlide];

  return (
    <div className="pitch-deck">
      {/* Header */}
      {!isFullscreen && (
        <header className="pitch-header">
          <div className="pitch-header-left">
            <button onClick={() => navigate('/')} className="home-btn">
              ← Home
            </button>
            <h1>SMARTSLATE PITCH DECK</h1>
          </div>
          <div className="pitch-header-right">
            <span>Slide {currentSlide + 1} of {slides.length}</span>
          </div>
        </header>
      )}

      {/* Main Slide Area */}
      <main className="pitch-main">
        {/* Previous Button */}
        <button
          onClick={goToPreviousSlide}
          disabled={currentSlide === 0}
          className="nav-btn prev-btn"
          aria-label="Previous slide"
        >
          ‹
        </button>

        {/* Slide Content */}
        <div className="slide-container" style={{ background: slide.backgroundGradient }}>
          <SlideRenderer slide={slide} slideNumber={currentSlide + 1} />
        </div>

        {/* Next Button */}
        <button
          onClick={goToNextSlide}
          disabled={currentSlide === slides.length - 1}
          className="nav-btn next-btn"
          aria-label="Next slide"
        >
          ›
        </button>
      </main>

      {/* Bottom Navigation */}
      <nav className="pitch-navigation">
        <div className="slide-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
              title={`Slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="controls">
          <button onClick={() => navigate('/')} className="control-btn" title="Go to Home">
            🏠
          </button>
          <button onClick={toggleFullscreen} className="control-btn" title={isFullscreen ? 'Exit Fullscreen (F)' : 'Fullscreen (F)'}>
            {isFullscreen ? '⊡' : '⛶'}
          </button>
        </div>
      </nav>
    </div>
  );
}

interface SlideRendererProps {
  slide: typeof slides[0];
  slideNumber: number;
}

function SlideRenderer({ slide, slideNumber }: SlideRendererProps) {
  if (slide.type === 'title') {
    return (
      <div className="slide-content slide-title">
        <h1 className="slide-headline">{slide.headline}</h1>
        {slide.subheadline && <p className="slide-subheadline">{slide.subheadline}</p>}
      </div>
    );
  }

  if (slide.type === 'stats') {
    return (
      <div className="slide-content slide-stats">
        <h2 className="slide-headline">{slide.headline}</h2>
        {slide.subheadline && <p className="slide-subheadline">{slide.subheadline}</p>}
        
        <div className="stats-grid">
          {slide.stats?.map((stat, index) => (
            <div key={index} className="stat-card">
              {stat.icon && <div className="stat-icon">{stat.icon}</div>}
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {slide.bullets && (
          <div className="bullets">
            {slide.bullets.map((bullet, index) => (
              <p key={index} className="bullet">{bullet}</p>
            ))}
          </div>
        )}

        {slide.closing && <p className="slide-closing">{slide.closing}</p>}
        <div className="slide-number">{slideNumber}</div>
      </div>
    );
  }

  return (
    <div className="slide-content slide-standard">
      <h2 className="slide-headline">{slide.headline}</h2>
      {slide.subheadline && <p className="slide-subheadline">{slide.subheadline}</p>}
      
      {slide.body && (
        <div className="slide-body">
          {slide.body.map((line, index) => (
            <p key={index} className={line === '' ? 'spacer' : line.startsWith('THE ') ? 'section-header' : ''}>{line}</p>
          ))}
        </div>
      )}

      {slide.bullets && (
        <div className="bullets">
          {slide.bullets.map((bullet, index) => (
            <p key={index} className={bullet === '' ? 'spacer' : bullet.startsWith('FOR ') ? 'section-label' : 'bullet'}>{bullet}</p>
          ))}
        </div>
      )}

      {slide.emphasis && (
        <div className="emphasis-box">
          <p>{slide.emphasis}</p>
        </div>
      )}

      {slide.closing && <p className="slide-closing">{slide.closing}</p>}
      <div className="slide-number">{slideNumber}</div>
    </div>
  );
}