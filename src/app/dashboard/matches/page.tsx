"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Heart,
  Eye,
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase,
  Search,
  Star,
  SlidersHorizontal,
} from "lucide-react";

interface Match {
  id: number;
  name: string;
  age: number;
  city: string;
  profession: string;
  education: string;
  image: string;
  compatibility: number;
  isOnline: boolean;
  lastSeen: string;
  interests: string[];
  height: string;
  religion: string;
}

export default function MatchesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [ageFilter, setAgeFilter] = useState("all");
  const [cityFilter, setCityFilter] = useState("all");
  const [professionFilter, setProfessionFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const matches: Match[] = [
    {
      id: 1,
      name: "Priya Sharma",
      age: 26,
      city: "Mumbai",
      profession: "Software Engineer",
      education: "B.Tech Computer Science",
      image: "/placeholder.svg?height=200&width=200",
      compatibility: 92,
      isOnline: true,
      lastSeen: "Online now",
      interests: ["Reading", "Travel", "Cooking"],
      height: "5'4\"",
      religion: "Hindu",
    },
    {
      id: 2,
      name: "Anita Patel",
      age: 24,
      city: "Ahmedabad",
      profession: "Doctor",
      education: "MBBS",
      image: "/placeholder.svg?height=200&width=200",
      compatibility: 88,
      isOnline: false,
      lastSeen: "2 hours ago",
      interests: ["Music", "Dancing", "Yoga"],
      height: "5'2\"",
      religion: "Hindu",
    },
    {
      id: 3,
      name: "Kavya Reddy",
      age: 27,
      city: "Hyderabad",
      profession: "Teacher",
      education: "M.Ed",
      image: "/placeholder.svg?height=200&width=200",
      compatibility: 85,
      isOnline: true,
      lastSeen: "Online now",
      interests: ["Art", "Literature", "Photography"],
      height: "5'5\"",
      religion: "Hindu",
    },
    {
      id: 4,
      name: "Sneha Gupta",
      age: 25,
      city: "Delhi",
      profession: "Marketing Manager",
      education: "MBA",
      image: "/placeholder.svg?height=200&width=200",
      compatibility: 90,
      isOnline: false,
      lastSeen: "1 hour ago",
      interests: ["Fitness", "Movies", "Travel"],
      height: "5'3\"",
      religion: "Hindu",
    },
    {
      id: 5,
      name: "Riya Singh",
      age: 28,
      city: "Bangalore",
      profession: "Data Scientist",
      education: "M.Tech",
      image: "/placeholder.svg?height=200&width=200",
      compatibility: 87,
      isOnline: true,
      lastSeen: "Online now",
      interests: ["Technology", "Books", "Hiking"],
      height: "5'6\"",
      religion: "Hindu",
    },
    {
      id: 6,
      name: "Meera Joshi",
      age: 26,
      city: "Pune",
      profession: "Graphic Designer",
      education: "B.Des",
      image: "/placeholder.svg?height=200&width=200",
      compatibility: 83,
      isOnline: false,
      lastSeen: "30 minutes ago",
      interests: ["Design", "Art", "Music"],
      height: "5'4\"",
      religion: "Hindu",
    },
  ];

  const filteredMatches = matches.filter((match) => {
    const matchesSearch =
      match.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      match.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      match.profession.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesAge =
      ageFilter === "all" ||
      (ageFilter === "20-25" && match.age >= 20 && match.age <= 25) ||
      (ageFilter === "26-30" && match.age >= 26 && match.age <= 30) ||
      (ageFilter === "31-35" && match.age >= 31 && match.age <= 35);

    const matchesCity = cityFilter === "all" || match.city === cityFilter;
    const matchesProfession =
      professionFilter === "all" || match.profession === professionFilter;

    return matchesSearch && matchesAge && matchesCity && matchesProfession;
  });

  const handleSendInterest = (matchId: number, matchName: string) => {
    // Handle send interest logic
    console.log(`Sending interest to ${matchName} (ID: ${matchId})`);
  };

  const handleViewProfile = (matchId: number, matchName: string) => {
    // Handle view profile logic
    console.log(`Viewing profile of ${matchName} (ID: ${matchId})`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl p-6 text-white">
        <h1 className="text-3xl font-serif font-bold mb-2">Your Matches</h1>
        <p className="opacity-90">
          Discover your perfect life partner from {matches.length} compatible
          profiles
        </p>
      </div>

      {/* Search and Filters */}
      <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
        <CardContent className="p-6">
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search by name, city, or profession..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-pink-200 focus:border-pink-500 focus:ring-pink-500/20 bg-white/50"
              />
            </div>

            {/* Filter Toggle */}
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="border-pink-200 hover:bg-pink-50 bg-transparent"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
                {(ageFilter !== "all" ||
                  cityFilter !== "all" ||
                  professionFilter !== "all") && (
                  <Badge className="ml-2 bg-rose-100 text-rose-700">
                    Active
                  </Badge>
                )}
              </Button>

              <div className="text-sm text-gray-600">
                Showing {filteredMatches.length} of {matches.length} matches
              </div>
            </div>

            {/* Filters */}
            {showFilters && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-pink-100">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age Range
                  </label>
                  <Select value={ageFilter} onValueChange={setAgeFilter}>
                    <SelectTrigger className="border-pink-200 focus:border-pink-500">
                      <SelectValue placeholder="Select age range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Ages</SelectItem>
                      <SelectItem value="20-25">20-25 years</SelectItem>
                      <SelectItem value="26-30">26-30 years</SelectItem>
                      <SelectItem value="31-35">31-35 years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <Select value={cityFilter} onValueChange={setCityFilter}>
                    <SelectTrigger className="border-pink-200 focus:border-pink-500">
                      <SelectValue placeholder="Select city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Cities</SelectItem>
                      <SelectItem value="Mumbai">Mumbai</SelectItem>
                      <SelectItem value="Delhi">Delhi</SelectItem>
                      <SelectItem value="Bangalore">Bangalore</SelectItem>
                      <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                      <SelectItem value="Pune">Pune</SelectItem>
                      <SelectItem value="Ahmedabad">Ahmedabad</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Profession
                  </label>
                  <Select
                    value={professionFilter}
                    onValueChange={setProfessionFilter}
                  >
                    <SelectTrigger className="border-pink-200 focus:border-pink-500">
                      <SelectValue placeholder="Select profession" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Professions</SelectItem>
                      <SelectItem value="Software Engineer">
                        Software Engineer
                      </SelectItem>
                      <SelectItem value="Doctor">Doctor</SelectItem>
                      <SelectItem value="Teacher">Teacher</SelectItem>
                      <SelectItem value="Marketing Manager">
                        Marketing Manager
                      </SelectItem>
                      <SelectItem value="Data Scientist">
                        Data Scientist
                      </SelectItem>
                      <SelectItem value="Graphic Designer">
                        Graphic Designer
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Matches Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMatches.map((match) => (
          <Card
            key={match.id}
            className="bg-white/80 backdrop-blur-sm border-pink-100 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden"
          >
            <CardContent className="p-0">
              {/* Profile Image Section */}
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
                  <Avatar className="w-32 h-32">
                    <AvatarImage
                      src={match.image || "/placeholder.svg"}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-gradient-to-r from-rose-500 to-pink-600 text-white text-2xl">
                      {match.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Online Status */}
                <div className="absolute top-4 right-4">
                  {match.isOnline ? (
                    <Badge className="bg-green-100 text-green-700 border-green-200">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                      Online
                    </Badge>
                  ) : (
                    <Badge
                      variant="secondary"
                      className="bg-gray-100 text-gray-600"
                    >
                      {match.lastSeen}
                    </Badge>
                  )}
                </div>

                {/* Compatibility Badge */}
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold">
                    <Star className="w-3 h-3 mr-1" />
                    {match.compatibility}% Match
                  </Badge>
                </div>
              </div>

              {/* Profile Info */}
              <div className="p-6 space-y-4">
                {/* Name and Age */}
                <div className="text-center">
                  <h3 className="text-xl font-serif font-bold text-gray-800">
                    {match.name}
                  </h3>
                  <p className="text-gray-600 flex items-center justify-center mt-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    {match.age} years
                  </p>
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-rose-500" />
                    <span>{match.city}</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <Briefcase className="w-4 h-4 mr-2 text-rose-500" />
                    <span>{match.profession}</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <GraduationCap className="w-4 h-4 mr-2 text-rose-500" />
                    <span>{match.education}</span>
                  </div>
                </div>

                {/* Interests */}
                <div className="flex flex-wrap gap-1">
                  {match.interests.slice(0, 3).map((interest, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-xs bg-rose-50 text-rose-700 border-rose-200"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 pt-2">
                  <Button
                    variant="outline"
                    className="flex-1 border-pink-200 hover:bg-pink-50 bg-transparent"
                    onClick={() => handleViewProfile(match.id, match.name)}
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    View Profile
                  </Button>
                  <Button
                    className="flex-1 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700"
                    onClick={() => handleSendInterest(match.id, match.name)}
                  >
                    <Heart className="w-4 h-4 mr-1" />
                    Send Interest
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredMatches.length === 0 && (
        <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
          <CardContent className="p-12 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-rose-500" />
            </div>
            <h3 className="text-lg font-serif font-semibold text-gray-800 mb-2">
              No matches found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or filters
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setAgeFilter("all");
                setCityFilter("all");
                setProfessionFilter("all");
              }}
              className="border-pink-200 hover:bg-pink-50 bg-transparent"
            >
              Clear Filters
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Load More */}
      {filteredMatches.length > 0 && (
        <div className="text-center">
          <Button
            variant="outline"
            className="border-pink-200 hover:bg-pink-50 bg-transparent px-8"
          >
            Load More Matches
          </Button>
        </div>
      )}
    </div>
  );
}
