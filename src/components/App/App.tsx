import { Suspense, lazy } from "react";
import { FormattedMessage } from "react-intl";
import { Routes, Route } from "react-router-dom";
import { FilterProvider } from "@/providers/FilterProvider";
import { AppHeader } from "../AppHeader";
import { Fallback } from "../Fallback";

const Vehicles = lazy(() => import("@/routes/Vehicles"));
const Details = lazy(() => import("@/routes/Details"));
const Create = lazy(() => import("@/routes/Create"));

export function App() {
  return (
    <>
      <AppHeader
        title={
          <FormattedMessage id="7a3a2a" defaultMessage="Vehicle Manager" />
        }
      />

      <FilterProvider>
        <main className="mx-auto max-w-7xl p-4">
          <Suspense fallback={<Fallback />}>
            <Routes>
              <Route path="/" element={<Vehicles />} />
              <Route path="/vehicles/:id" element={<Details />} />
              <Route path="/create" element={<Create />} />
            </Routes>
          </Suspense>
        </main>
      </FilterProvider>
    </>
  );
}
