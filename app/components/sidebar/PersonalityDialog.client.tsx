import { useStore } from '@nanostores/react';
import { useState } from 'react';
import { Dialog, DialogButton, DialogDescription, DialogRoot, DialogTitle } from '~/components/ui/Dialog';
import { IconButton } from '~/components/ui/IconButton';
import { personalityStore, setPersonality } from '~/lib/stores/personality';

interface PersonalityDialogProps {
  open: boolean;
  onOpenChange: (value: boolean) => void;
}

export function PersonalityDialog({ open, onOpenChange }: PersonalityDialogProps) {
  const personality = useStore(personalityStore);
  const [value, setValue] = useState(personality);

  return (
    <DialogRoot open={open}>
      <Dialog onBackdrop={() => onOpenChange(false)} onClose={() => onOpenChange(false)}>
        <DialogTitle>Assistant Personality</DialogTitle>
        <DialogDescription asChild>
          <textarea
            className="w-full h-40 p-2 border border-bolt-elements-borderColor bg-bolt-elements-background-depth-1 text-bolt-elements-textPrimary"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter system prompt to customize the assistant"
          />
        </DialogDescription>
        <div className="px-5 pb-4 bg-bolt-elements-background-depth-2 flex gap-2 justify-end">
          <DialogButton type="secondary" onClick={() => onOpenChange(false)}>
            Cancel
          </DialogButton>
          <DialogButton
            type="primary"
            onClick={() => {
              setPersonality(value);
              onOpenChange(false);
            }}
          >
            Save
          </DialogButton>
        </div>
      </Dialog>
    </DialogRoot>
  );
}
