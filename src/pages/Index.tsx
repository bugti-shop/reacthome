// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Welcome to Your Blank App</h1>
        <p className="text-xl text-muted-foreground">Start building your amazing project here!</p>
      </div>
import { Users, Clock, MousePointer, Globe } from "lucide-react";
import StatsCard from "@/components/StatsCard";
import DataTable, { WebsiteData } from "@/components/DataTable";
import Leaderboard from "@/components/Leaderboard";
import TrafficChart from "@/components/TrafficChart";
import GenderPieChart from "@/components/GenderPieChart";
import ConversionFunnel from "@/components/ConversionFunnel";
const Index = () => {
  const websiteData: WebsiteData[] = [
    {
      website: "Graana.com",
      traffic: "96k",
      avgVisitDuration: "00:01:39",
      pagesPerVisitor: "2.07",
      ageGroups: "25-44",
      gender: "68/32",
      trafficSource: "Search: 67%, Direct: 26%",
      country: "PK: 60%, US: 12%",
    },
    {
      website: "Lamudi.pk",
      traffic: "164k",
      avgVisitDuration: "00:00:47",
      pagesPerVisitor: "1.96",
      ageGroups: "25-44",
      gender: "78/21",
      trafficSource: "Search: 68%, Direct: 25%",
      country: "PK: 58%, UK: 7%",
    },
    {
      website: "Zameen.com",
      traffic: "3M",
      avgVisitDuration: "00:04:08",
      pagesPerVisitor: "6",
      ageGroups: "25-64",
      gender: "74/25",
      trafficSource: "Search: 60%, Direct: 36%",
      country: "PK: 75%, UAE: 4%",
    },
    {
      website: "Zillow.com",
      traffic: "338M",
      avgVisitDuration: "00:06:00",
      pagesPerVisitor: "15.36",
      ageGroups: "25-54",
      gender: "47/52",
      trafficSource: "Search: 37%, Direct: 56%, Paid: 3.67%",
      country: "US: 96%, CA: 1%",
    },
    {
      website: "Realtor.com",
      traffic: "130M",
      avgVisitDuration: "00:05:01",
      pagesPerVisitor: "5.41",
      ageGroups: "35-64",
      gender: "43/56",
      trafficSource: "Search: 48%, Direct: 44%, Paid: 3.61%",
      country: "US: 96%, CA: 0.7%",
    },
    {
      website: "Apartments.com",
      traffic: "41M",
      avgVisitDuration: "00:05:22",
      pagesPerVisitor: "8.38",
      ageGroups: "25-54",
      gender: "45/54",
      trafficSource: "Search: 44%, Direct: 38%, Paid: 13%",
      country: "US: 92%, CA: 3%",
    },
    {
      website: "Airbnb.com",
      traffic: "101M",
      avgVisitDuration: "00:06:45",
      pagesPerVisitor: "15.59",
      ageGroups: "25-50",
      gender: "43/56",
      trafficSource: "Search: 18%, Direct: 66%, Paid: 11%",
      country: "US: 74%, PH: 1%",
    },
    {
      website: "Bayut.com",
      traffic: "4.5M",
      avgVisitDuration: "00:05:40",
      pagesPerVisitor: "8.18",
      ageGroups: "25-64",
      gender: "61/38",
      trafficSource: "Search: 42%, Direct: 42%, Paid: 12%",
      country: "UAE: 72%, IN: 4%",
    },
  ];

  const leaderboardData = [
    { rank: 1, website: "Zillow.com", traffic: "338M", score: 100 },
    { rank: 2, website: "Realtor.com", traffic: "130M", score: 85 },
    { rank: 3, website: "Airbnb.com", traffic: "101M", score: 78 },
    { rank: 4, website: "Apartments.com", traffic: "41M", score: 65 },
    { rank: 5, website: "Bayut.com", traffic: "4.5M", score: 52 },
  ];

  const trafficChartData = [
    { name: "Graana", traffic: 96, duration: 1.65 },
    { name: "Lamudi", traffic: 164, duration: 0.78 },
    { name: "Zameen", traffic: 3000, duration: 4.13 },
    { name: "Zillow", traffic: 338000, duration: 6.0 },
    { name: "Realtor", traffic: 130000, duration: 5.02 },
  ];

  const genderData = [
    { name: "Male", value: 60 },
    { name: "Female", value: 40 },
  ];

  const funnelStages = [
    { label: "Total Visitors", value: 613000000, percentage: 100 },
    { label: "Engaged Users", value: 306500000, percentage: 50 },
    { label: "Page Views", value: 153250000, percentage: 25 },
    { label: "Active Sessions", value: 76625000, percentage: 12.5 },
    { label: "Conversions", value: 30650000, percentage: 5 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Real Estate Analytics Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">
            Comprehensive analysis of major property platforms
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Traffic"
            value="613M+"
            change="+12.5%"
            icon={Users}
            trend="up"
          />
          <StatsCard
            title="Avg Visit Duration"
            value="4:32"
            change="+8.2%"
            icon={Clock}
            trend="up"
          />
          <StatsCard
            title="Pages/Visitor"
            value="7.87"
            change="+5.3%"
            icon={MousePointer}
            trend="up"
          />
          <StatsCard
            title="Countries"
            value="15+"
            change="Global Reach"
            icon={Globe}
            trend="up"
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <TrafficChart data={trafficChartData} />
          <GenderPieChart data={genderData} />
        </div>

        {/* Leaderboard and Funnel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Leaderboard data={leaderboardData} title="Top Performing Websites" />
          <ConversionFunnel stages={funnelStages} />
        </div>

        {/* Data Table */}
        <DataTable data={websiteData} />
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          <p>© 2025 Real Estate Analytics. All data is aggregated and anonymized.</p>
        </div>
      </footer>
    </div>
  );
};
