import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

interface FunnelStage {
  label: string;
  value: number;
  percentage: number;
}

interface ConversionFunnelProps {
  stages: FunnelStage[];
}

const ConversionFunnel = ({ stages }: ConversionFunnelProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Journey Funnel</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {stages.map((stage, index) => (
            <div key={index} className="relative">
              <div
                className="relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-accent transition-all hover:shadow-lg"
                style={{
                  width: `${100 - index * 15}%`,
                  margin: "0 auto",
                }}
              >
                <div className="p-4 text-center">
                  <p className="text-sm font-semibold text-primary-foreground mb-1">
                    {stage.label}
                  </p>
                  <p className="text-2xl font-bold text-primary-foreground">
                    {stage.value.toLocaleString()}
                  </p>
                  <p className="text-xs text-primary-foreground/80 mt-1">
                    {stage.percentage}% of total
                  </p>
                </div>
              </div>
              {index < stages.length - 1 && (
                <div className="flex justify-center my-2">
                  <ChevronDown className="h-6 w-6 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ConversionFunnel;
