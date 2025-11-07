import { useState } from "react";
import { Check, Loader2, X } from "lucide-react";

type SubmitStatus = "idle" | "loading" | "success" | "error";

interface UseSubmitStatusProps {
  onSuccess: () => void;
  onError?: (message: string) => void;
  successTimeout?: number;
  errorTimeout?: number;
}

export function useSubmitStatus({
  onSuccess,
  onError,
  successTimeout = 1000,
  errorTimeout = 2000,
}: UseSubmitStatusProps) {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const handleSuccess = () => {
    setStatus("success");
    setTimeout(onSuccess, successTimeout);
  };

  const handleError = (message: string) => {
    setStatus("error");
    setServerError(message);
    onError?.(message);
    setTimeout(() => setStatus("idle"), errorTimeout);
  };

  const startLoading = () => {
    setStatus("loading");
    setServerError(null);
  };

  const getButtonContent = () => {
    switch (status) {
      case "loading":
        return <Loader2 className="h-4 w-4 animate-spin" />;
      case "success":
        return <Check className="h-4 w-4" />;
      case "error":
        return <X className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const getButtonStyles = () => {
    const baseStyles = "w-full transition-colors duration-200";
    switch (status) {
      case "success":
        return `${baseStyles} bg-green-600 hover:bg-green-700`;
      case "error":
        return `${baseStyles} bg-red-600 hover:bg-red-700`;
      default:
        return baseStyles;
    }
  };

  return {
    status,
    serverError,
    startLoading,
    handleSuccess,
    handleError,
    getButtonContent,
    getButtonStyles,
  };
}
