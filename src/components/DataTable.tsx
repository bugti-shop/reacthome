import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface WebsiteData {
  website: string;
  traffic: string;
  avgVisitDuration: string;
  pagesPerVisitor: string;
  ageGroups: string;
  gender: string;
  trafficSource: string;
  country: string;
}

interface DataTableProps {
  data: WebsiteData[];
}

const DataTable = ({ data }: DataTableProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Detailed Website Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold">Website</TableHead>
                <TableHead className="font-semibold">Traffic</TableHead>
                <TableHead className="font-semibold">Avg Duration</TableHead>
                <TableHead className="font-semibold">Pages/Visitor</TableHead>
                <TableHead className="font-semibold">Age Groups</TableHead>
                <TableHead className="font-semibold">Gender (M/F)</TableHead>
                <TableHead className="font-semibold">Traffic Source</TableHead>
                <TableHead className="font-semibold">Top Countries</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index} className="hover:bg-muted/30 transition-colors">
                  <TableCell className="font-medium">{row.website}</TableCell>
                  <TableCell>{row.traffic}</TableCell>
                  <TableCell>{row.avgVisitDuration}</TableCell>
                  <TableCell>{row.pagesPerVisitor}</TableCell>
                  <TableCell>{row.ageGroups}</TableCell>
                  <TableCell>{row.gender}</TableCell>
                  <TableCell className="text-sm">{row.trafficSource}</TableCell>
                  <TableCell className="text-sm">{row.country}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
