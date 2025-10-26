import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
  jobDescription: string;
  responsibilities: string[];
  requirements: string[];
  jobType: string;
  location: string;
  equity: string;
}

export default function JobApplicationModal({
  isOpen,
  onClose,
  jobTitle
}: JobApplicationModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Apply for {jobTitle}</DialogTitle>
      <DialogContent>
        <Typography>
          Thank you for your interest! Please send your application to careers@smartslate.io
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
