import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import VideoLightbox from './components/common/VideoLightbox';
import LegalModal from './components/common/LegalModal';

export default function App() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [legalDocId, setLegalDocId] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-amber-300 selection:text-slate-900">
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-amber-400 text-slate-950 font-bold rounded-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-sky-400"
      >
        Skip to main content
      </a>

      {/* Sticky / Responsive Navigation */}
      <Navbar
        currentPath={location.pathname}
        onNavigate={(path) => navigate(path)}
      />

      {/* Render matching child route (HomePage or BlogPage) */}
      <Outlet context={{ onWatchDemo: () => setVideoModalOpen(true) }} />

      {/* Global Footer */}
      <Footer
        onOpenLegal={(docId) => setLegalDocId(docId)}
        onNavigate={(path) => navigate(path)}
      />

      {/* Video Lightbox Modal */}
      <VideoLightbox
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoTitle="WonderQuest: Official Gameplay Trailer"
      />

      {/* Legal & Compliance Modal */}
      <LegalModal
        docId={legalDocId}
        onClose={() => setLegalDocId(null)}
      />
    </div>
  );
}
