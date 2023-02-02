import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

interface BreadcrumbsProps {
  registrationNumber?: string;
}

export const Breadcrumbs = ({ registrationNumber }: BreadcrumbsProps) => (
  <nav className="mb-4 font-sans text-base font-normal">
    <ol className="flex space-x-2">
      <li>
        <Link
          to="/"
          className="text-sky-600 underline hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-500"
        >
          <FormattedMessage id="home" defaultMessage="Home" />
        </Link>
      </li>
      {registrationNumber && (
        <>
          <li className="text-slate-500 dark:text-slate-100" aria-hidden="true">
            /
          </li>
          <li className="text-slate-500 dark:text-slate-100">
            {registrationNumber}
          </li>
        </>
      )}
    </ol>
  </nav>
);
