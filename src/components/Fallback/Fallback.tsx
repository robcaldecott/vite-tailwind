import { Logo } from "../Logo";

export function Fallback() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <Logo />
    </div>
  );
}
