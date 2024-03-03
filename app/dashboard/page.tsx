// para ir a la ruta /dashboard

import { Suspense } from "react"
import { fetchLatestInvoices, fetchRevenue } from "../lib/data"
import LatestInvoices from "../ui/dashboard/latest-invoices"
import RevenueChart from "../ui/dashboard/revenue-chart"
import { lusitana } from "../ui/fonts"
import { RevenueChartSkeleton } from "../ui/skeletons"

// **Conectamos la DB de revenue**
export default async function DashboardPage() {
 const latestInvoices = await fetchLatestInvoices()

  
  return (
    <main>
        <h1 className={`${lusitana.className} mb-4 textx-l md:text-2xl`}>
        Dashboard
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          <Suspense fallback={<RevenueChartSkeleton />}>
            {/* Lo que esta dentro de Suspense, lo vamos a esperar y mientras con un fallback cargamos otra cosa */}
            <RevenueChart />
          </Suspense>
          <LatestInvoices latestInvoices={latestInvoices} />
        </div>
    </main>
  )
}
