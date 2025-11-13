import { useCallback } from "react";
import { toast as sonnerToast } from "sonner";

// Provides a simple toast helper that mirrors the ShadCN API expected elsewhere.
export const useToast = () => {
  const toast = useCallback((options = {}) => {
    if (typeof options === "string") {
      sonnerToast(options);
      return;
    }

    const { title, description, ...rest } = options;
    if (!title && !description) {
      return;
    }

    if (title && description) {
      sonnerToast(title, { description, ...rest });
      return;
    }

    sonnerToast(title ?? description, rest);
  }, []);

  return { toast };
};

export const toast = sonnerToast;
