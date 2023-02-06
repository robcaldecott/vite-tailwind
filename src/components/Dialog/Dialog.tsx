import { ComponentPropsWithoutRef, useEffect } from "react";

interface DialogProps extends ComponentPropsWithoutRef<"div"> {
  open: boolean;
  onClose?: () => void;
}

export function Dialog({ open, children, onClose, ...props }: DialogProps) {
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.key === "Escape" && onClose) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("keydown", listener);
    }

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [open, onClose]);

  return open ? (
    <div
      role="presentation"
      className="fixed left-0 right-0 top-0 bottom-0 z-20 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        role="dialog"
        className="m-8 max-w-screen-sm rounded-2xl bg-white shadow-2xl dark:bg-slate-800"
        onClick={(event) => {
          event.stopPropagation();
        }}
        {...props}
      >
        {children}
      </div>
    </div>
  ) : null;
}

export function DialogTitle({
  children,
  ...props
}: ComponentPropsWithoutRef<"h2">) {
  return (
    <h2
      className="p-4 font-sans text-xl font-medium text-slate-900 dark:text-white"
      {...props}
    >
      {children}
    </h2>
  );
}

export function DialogContent(props: ComponentPropsWithoutRef<"div">) {
  return <div className="px-4 pb-4" {...props} />;
}

export function DialogContentText(props: ComponentPropsWithoutRef<"p">) {
  return (
    <p
      className="font-sans text-base font-normal text-slate-500 dark:text-slate-300"
      {...props}
    />
  );
}

export function DialogActions(props: ComponentPropsWithoutRef<"div">) {
  return (
    <div className="flex items-center justify-end space-x-2 p-2" {...props} />
  );
}
