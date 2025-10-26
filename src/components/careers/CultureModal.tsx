import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

interface CultureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CultureModal({ isOpen, onClose }: CultureModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Our Culture</DialogTitle>
      <DialogContent>
        <Typography paragraph>
          At Smartslate, we foster a culture of innovation, collaboration, and continuous learning.
        </Typography>
        <Typography>
          We believe in empowering our team members to do their best work while maintaining work-life balance.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
