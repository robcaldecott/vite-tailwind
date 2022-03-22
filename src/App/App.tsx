import { Suspense, lazy } from "react";
import { FormattedMessage } from "react-intl";
import { Routes, Route } from "react-router-dom";
import { AppHeader, Fallback } from "@/components";
import { FilterProvider } from "@/providers";

const Vehicles = lazy(() => import("@/pages/Vehicles"));
const Details = lazy(() => import("@/pages/Details"));
const Create = lazy(() => import("@/pages/Create"));

function App() {
  return (
    <>
      <AppHeader
        title={
          <FormattedMessage id="appTitle" defaultMessage="Vehicle Manager" />
        }
      />

      <FilterProvider>
        <main className="max-w-7xl p-4 mx-auto">
          <Suspense fallback={<Fallback />}>
            <Routes>
              <Route path="/" element={<Vehicles />} />
              <Route path="/vehicles/:vehicleId" element={<Details />} />
              <Route path="/create" element={<Create />} />
            </Routes>
          </Suspense>
        </main>
      </FilterProvider>
    </>
  );
}

export { App };
