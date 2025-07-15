// src/app/dashabord/page.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  Edit,
  Eye,
  Heart,
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase,
  Star,
  CheckCircle,
  Users,
} from "lucide-react";

export default function UserDashboard() {
  const profileCompletion = 85;

  const matches = [
    {
      id: 1,
      name: "Priya Sharma",
      age: 26,
      city: "Mumbai",
      profession: "Software Engineer",
      education: "B.Tech",
      image: "/placeholder.svg?height=100&width=100",
      compatibility: 92,
    },
    {
      id: 2,
      name: "Anita Patel",
      age: 24,
      city: "Ahmedabad",
      profession: "Doctor",
      education: "MBBS",
      image: "/placeholder.svg?height=100&width=100",
      compatibility: 88,
    },
    {
      id: 3,
      name: "Kavya Reddy",
      age: 27,
      city: "Hyderabad",
      profession: "Teacher",
      education: "M.Ed",
      image: "/placeholder.svg?height=100&width=100",
      compatibility: 85,
    },
  ];

  const interests = {
    received: 12,
    sent: 8,
    accepted: 3,
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl p-6 text-white">
        <h1 className="text-2xl font-serif font-bold mb-2">
          Welcome back, John!
        </h1>
        <p className="opacity-90">Find your perfect match today</p>
      </div>

      {/* Profile Status & Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Profile Views</p>
                <p className="text-2xl font-bold text-gray-800">247</p>
              </div>
              <Eye className="w-8 h-8 text-rose-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Interests Received</p>
                <p className="text-2xl font-bold text-gray-800">
                  {interests.received}
                </p>
              </div>
              <Heart className="w-8 h-8 text-rose-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Matches Found</p>
                <p className="text-2xl font-bold text-gray-800">156</p>
              </div>
              <Users className="w-8 h-8 text-rose-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Profile Score</p>
                <p className="text-2xl font-bold text-gray-800">9.2/10</p>
              </div>
              <Star className="w-8 h-8 text-rose-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Section */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
            <CardHeader>
              <CardTitle className="font-serif flex items-center justify-between">
                My Profile
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-700"
                >
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Verified
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src="/placeholder.svg?height=64&width=64" />
                  <AvatarFallback className="bg-gradient-to-r from-rose-500 to-pink-600 text-white text-lg">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-gray-800">John Doe</h3>
                  <p className="text-sm text-gray-600">28 years • Mumbai</p>
                  <p className="text-sm text-gray-600">Software Engineer</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Profile Completion</span>
                  <span className="font-medium text-gray-800">
                    {profileCompletion}%
                  </span>
                </div>
                <Progress value={profileCompletion} className="h-2" />
              </div>

              <Button className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </CardContent>
          </Card>

          {/* Interest Summary */}
          <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
            <CardHeader>
              <CardTitle className="font-serif">Interest Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Received</span>
                <Badge className="bg-rose-100 text-rose-700">
                  {interests.received}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Sent</span>
                <Badge className="bg-blue-100 text-blue-700">
                  {interests.sent}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Accepted</span>
                <Badge className="bg-green-100 text-green-700">
                  {interests.accepted}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Matches Section */}
        <div className="lg:col-span-2">
          <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
            <CardHeader>
              <CardTitle className="font-serif">Recent Matches</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {matches.map((match) => (
                  <div
                    key={match.id}
                    className="flex items-center space-x-4 p-4 rounded-xl border border-pink-100 hover:bg-pink-50 transition-colors"
                  >
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
                        <h4 className="font-semibold text-gray-800">
                          {match.name}
                        </h4>
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
                ))}
              </div>

              <div className="mt-6 text-center">
                <Button
                  variant="outline"
                  className="border-pink-200 hover:bg-pink-50 bg-transparent"
                >
                  View All Matches
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
