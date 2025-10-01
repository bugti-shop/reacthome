import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface TrafficChartProps {
  data: Array<{
    name: string;
    traffic: number;
    duration: number;
  }>;
}

const TrafficChart = ({ data }: TrafficChartProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Traffic & Engagement Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="name" 
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis tick={{ fill: "hsl(var(--muted-foreground))" }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)"
              }} 
            />
            <Legend />
            <Bar dataKey="traffic" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
            <Bar dataKey="duration" fill="hsl(var(--accent))" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default TrafficChart;
