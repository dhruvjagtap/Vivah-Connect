import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  Icon: LucideIcon;
}

export default function StatsCard({ title, value, Icon }: StatsCardProps) {
  return (
    <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">{title}</p>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
          </div>
          <Icon className="w-8 h-8 text-rose-500" />
        </div>
      </CardContent>
    </Card>
  );
}
