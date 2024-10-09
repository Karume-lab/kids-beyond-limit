// components/ImageModal.tsx
import React from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";

interface ImageModalProps {
  imageSrc: string;
  altText: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageSrc, altText, isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay />
      <DialogContent className="p-4 max-w-3xl">
        <div className="relative w-full h-[80vh]">
          <Image
            src={imageSrc}
            alt={altText}
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
