import { useState } from 'react';

export function useModalManager() {
  const [modalStates, setModalStates] = useState({
    demo: false,
    waitlist: false,
    consultation: false,
    caseStudy: false,
  });

  const actions = {
    openDemoModal: () => setModalStates(prev => ({ ...prev, demo: true })),
    closeDemoModal: () => setModalStates(prev => ({ ...prev, demo: false })),
    openWaitlistModal: () => setModalStates(prev => ({ ...prev, waitlist: true })),
    closeWaitlistModal: () => setModalStates(prev => ({ ...prev, waitlist: false })),
    openConsultationModal: () => setModalStates(prev => ({ ...prev, consultation: true })),
    closeConsultationModal: () => setModalStates(prev => ({ ...prev, consultation: false })),
    openCaseStudyModal: () => setModalStates(prev => ({ ...prev, caseStudy: true })),
    closeCaseStudyModal: () => setModalStates(prev => ({ ...prev, caseStudy: false })),
  };

  return { modalStates, actions };
}
