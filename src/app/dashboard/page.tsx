// src/app/dashabord/page.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { Edit, Eye, Heart, Star, CheckCircle, Users } from "lucide-react";
import { auth, db } from "@/lib/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import StatsCard from "@/components/Dashboard/StatsCard";
import MatchCard from "@/components/Dashboard/MatchCard";
import { toast } from "sonner";

interface UserData {
  fullName?: string;
  age?: number | string;
  currentCity?: string;
  jobTitle?: string;
}

export default function UserDashboard() {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState<UserData | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (userData) {
      toast("Complete your profile to get better matches!");
    }
  }, [userData]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    if (!userId) return;

    const fetchProfile = async () => {
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserData(docSnap.data());
      }
    };

    fetchProfile();
  }, [userId]);

  const calculateCompletion = () => {
    if (!userData) return 0;
    const totalFields = 15; // number of important fields
    const filledFields = Object.entries(userData).filter(
      ([, val]) => val !== "" && val !== null && val !== undefined
    ).length;
    return Math.floor((filledFields / totalFields) * 100);
  };

  const profileCompletion = calculateCompletion();

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

  if (!userData) {
    return (
      <p className="text-center mt-10 text-gray-500">Loading your profile...</p>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl p-6 text-white">
        <h1 className="text-2xl font-serif font-bold mb-2">
          Welcome back, {userData?.fullName || "User"}!
        </h1>
        <p className="opacity-90">Find your perfect match today</p>
      </div>

      {/* Profile Status & Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Profile Views" value={247} Icon={Eye} />
        <StatsCard
          title="Interests Received"
          value={interests.received}
          Icon={Heart}
        />
        <StatsCard title="Matches Found" value={156} Icon={Users} />
        <StatsCard title="Profile Score" value="9.2/10" Icon={Star} />
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
                    {userData?.fullName
                      ?.split(" ")
                      ?.map((n: string) => n[0])
                      ?.join("")
                      ?.toUpperCase() || "NA"}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {userData?.fullName || "Name not set"}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {userData?.age || "Age not set"} years •{" "}
                    {userData?.currentCity || "City not set"}
                  </p>
                  <p className="text-sm text-gray-600">
                    {userData?.jobTitle || "Profession not set"}
                  </p>
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
                  <MatchCard key={match.id} match={match} />
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
