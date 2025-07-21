// components/Dashboard/MatchCard.tsx

import {
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Eye,
  Heart,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface Match {
  id: number | string;
  name: string;
  age: number;
  city: string;
  profession: string;
  education: string;
  image?: string;
  compatibility: number;
}

interface MatchCardProps {
  match: Match;
}

export default function MatchCard({ match }: MatchCardProps) {
  return (
    <div className="flex items-center space-x-4 p-4 rounded-xl border border-pink-100 hover:bg-pink-50 transition-colors">
      <Avatar className="w-16 h-16">
        <AvatarImage src={match.image || "/placeholder.svg"} />
        <AvatarFallback className="bg-gradient-to-r from-rose-500 to-pink-600 text-white">
          {match.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>

      <div className="flex-1 space-y-1">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-gray-800">{match.name}</h4>
          <Badge className="bg-green-100 text-green-700">
            {match.compatibility}% Match
          </Badge>
        </div>

        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {match.age} years
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {match.city}
          </div>
        </div>

        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Briefcase className="w-4 h-4 mr-1" />
            {match.profession}
          </div>
          <div className="flex items-center">
            <GraduationCap className="w-4 h-4 mr-1" />
            {match.education}
          </div>
        </div>
      </div>

      <div className="flex space-x-2">
        <Button
          size="sm"
          variant="outline"
          className="border-pink-200 hover:bg-pink-50 bg-transparent"
        >
          <Eye className="w-4 h-4 mr-1" />
          View
        </Button>
        <Button
          size="sm"
          className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700"
        >
          <Heart className="w-4 h-4 mr-1" />
          Interest
        </Button>
      </div>
    </div>
  );
}
