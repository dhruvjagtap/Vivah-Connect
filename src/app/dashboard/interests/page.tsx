"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Heart,
  HeartHandshake,
  X,
  Check,
  Clock,
  MapPin,
  Calendar,
  Send,
  Inbox,
} from "lucide-react";

interface Interest {
  id: number;
  name: string;
  age: number;
  city: string;
  profession: string;
  image: string;
  status: "pending" | "accepted" | "declined";
  sentAt: string;
  respondedAt?: string;
}

export default function InterestsPage() {
  const [activeTab, setActiveTab] = useState("received");

  // Sample data for received interests
  const receivedInterests: Interest[] = [
    {
      id: 1,
      name: "Arjun Mehta",
      age: 29,
      city: "Mumbai",
      profession: "Software Engineer",
      image: "/placeholder.svg?height=100&width=100",
      status: "pending",
      sentAt: "2 hours ago",
    },
    {
      id: 2,
      name: "Rohit Sharma",
      age: 27,
      city: "Delhi",
      profession: "Marketing Manager",
      image: "/placeholder.svg?height=100&width=100",
      status: "pending",
      sentAt: "5 hours ago",
    },
    {
      id: 3,
      name: "Vikram Singh",
      age: 31,
      city: "Bangalore",
      profession: "Data Scientist",
      image: "/placeholder.svg?height=100&width=100",
      status: "accepted",
      sentAt: "1 day ago",
      respondedAt: "1 day ago",
    },
    {
      id: 4,
      name: "Karan Patel",
      age: 26,
      city: "Ahmedabad",
      profession: "Doctor",
      image: "/placeholder.svg?height=100&width=100",
      status: "declined",
      sentAt: "2 days ago",
      respondedAt: "2 days ago",
    },
  ];

  // Sample data for sent interests
  const sentInterests: Interest[] = [
    {
      id: 5,
      name: "Priya Sharma",
      age: 26,
      city: "Mumbai",
      profession: "Teacher",
      image: "/placeholder.svg?height=100&width=100",
      status: "pending",
      sentAt: "1 hour ago",
    },
    {
      id: 6,
      name: "Anita Reddy",
      age: 24,
      city: "Hyderabad",
      profession: "Graphic Designer",
      image: "/placeholder.svg?height=100&width=100",
      status: "accepted",
      sentAt: "3 days ago",
      respondedAt: "2 days ago",
    },
    {
      id: 7,
      name: "Kavya Gupta",
      age: 28,
      city: "Pune",
      profession: "HR Manager",
      image: "/placeholder.svg?height=100&width=100",
      status: "pending",
      sentAt: "1 day ago",
    },
    {
      id: 8,
      name: "Sneha Joshi",
      age: 25,
      city: "Chennai",
      profession: "Software Developer",
      image: "/placeholder.svg?height=100&width=100",
      status: "declined",
      sentAt: "4 days ago",
      respondedAt: "3 days ago",
    },
  ];

  const handleAcceptInterest = (interestId: number, name: string) => {
    console.log(`Accepting interest from ${name} (ID: ${interestId})`);
    // Handle accept logic here
  };

  const handleDeclineInterest = (interestId: number, name: string) => {
    console.log(`Declining interest from ${name} (ID: ${interestId})`);
    // Handle decline logic here
  };

  const handleCancelInterest = (interestId: number, name: string) => {
    console.log(`Canceling interest to ${name} (ID: ${interestId})`);
    // Handle cancel logic here
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge className="bg-orange-100 text-orange-700 border-orange-200">
            <Clock className="w-3 h-3 mr-1" />
            Pending
          </Badge>
        );
      case "accepted":
        return (
          <Badge className="bg-green-100 text-green-700 border-green-200">
            <Check className="w-3 h-3 mr-1" />
            Accepted
          </Badge>
        );
      case "declined":
        return (
          <Badge className="bg-red-100 text-red-700 border-red-200">
            <X className="w-3 h-3 mr-1" />
            Declined
          </Badge>
        );
      default:
        return null;
    }
  };

  const pendingReceived = receivedInterests.filter(
    (interest) => interest.status === "pending"
  ).length;
  const pendingSent = sentInterests.filter(
    (interest) => interest.status === "pending"
  ).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl p-6 text-white">
        <h1 className="text-3xl font-serif font-bold mb-2">Interests</h1>
        <p className="opacity-90">
          Manage your connections and discover mutual interests
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Received</p>
                <p className="text-2xl font-bold text-gray-800">
                  {receivedInterests.length}
                </p>
              </div>
              <Inbox className="w-8 h-8 text-rose-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Sent</p>
                <p className="text-2xl font-bold text-gray-800">
                  {sentInterests.length}
                </p>
              </div>
              <Send className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Received</p>
                <p className="text-2xl font-bold text-gray-800">
                  {pendingReceived}
                </p>
              </div>
              <Clock className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Mutual Interests</p>
                <p className="text-2xl font-bold text-gray-800">3</p>
              </div>
              <HeartHandshake className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <CardHeader className="pb-4">
            <TabsList className="grid w-full grid-cols-2 bg-rose-50 border border-rose-100">
              <TabsTrigger
                value="received"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-500 data-[state=active]:to-pink-600 data-[state=active]:text-white"
              >
                <Inbox className="w-4 h-4 mr-2" />
                Interests Received
                {pendingReceived > 0 && (
                  <Badge className="ml-2 bg-orange-500 text-white text-xs px-1.5 py-0.5">
                    {pendingReceived}
                  </Badge>
                )}
              </TabsTrigger>
              <TabsTrigger
                value="sent"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-500 data-[state=active]:to-pink-600 data-[state=active]:text-white"
              >
                <Send className="w-4 h-4 mr-2" />
                Interests Sent
                {pendingSent > 0 && (
                  <Badge className="ml-2 bg-orange-500 text-white text-xs px-1.5 py-0.5">
                    {pendingSent}
                  </Badge>
                )}
              </TabsTrigger>
            </TabsList>
          </CardHeader>

          <CardContent>
            {/* Received Interests Tab */}
            <TabsContent value="received" className="space-y-4 mt-0">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-serif font-semibold text-gray-800">
                  People interested in you
                </h3>
                <p className="text-sm text-gray-600">
                  {receivedInterests.length} total interests
                </p>
              </div>

              {receivedInterests.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Inbox className="w-8 h-8 text-rose-500" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-gray-800 mb-2">
                    No interests received yet
                  </h3>
                  <p className="text-gray-600">
                    Complete your profile to attract more matches!
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {receivedInterests.map((interest) => (
                    <div
                      key={interest.id}
                      className="flex items-center space-x-4 p-4 rounded-xl border border-pink-100 hover:bg-pink-50/50 transition-colors"
                    >
                      <Avatar className="w-16 h-16">
                        <AvatarImage
                          src={interest.image || "/placeholder.svg"}
                        />
                        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                          {interest.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-gray-800">
                            {interest.name}
                          </h4>
                          {getStatusBadge(interest.status)}
                        </div>

                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {interest.age} years
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {interest.city}
                          </div>
                        </div>

                        <p className="text-sm text-gray-600">
                          {interest.profession}
                        </p>
                        <p className="text-xs text-gray-500">
                          Sent interest {interest.sentAt}
                        </p>
                      </div>

                      <div className="flex space-x-2">
                        {interest.status === "pending" ? (
                          <>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-red-200 hover:bg-red-50 text-red-600 bg-transparent"
                              onClick={() =>
                                handleDeclineInterest(
                                  interest.id,
                                  interest.name
                                )
                              }
                            >
                              <X className="w-4 h-4 mr-1" />
                              Decline
                            </Button>
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                              onClick={() =>
                                handleAcceptInterest(interest.id, interest.name)
                              }
                            >
                              <Check className="w-4 h-4 mr-1" />
                              Accept
                            </Button>
                          </>
                        ) : (
                          <div className="text-xs text-gray-500">
                            {interest.status === "accepted"
                              ? "Accepted"
                              : "Declined"}{" "}
                            {interest.respondedAt}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>

            {/* Sent Interests Tab */}
            <TabsContent value="sent" className="space-y-4 mt-0">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-serif font-semibold text-gray-800">
                  Interests you've sent
                </h3>
                <p className="text-sm text-gray-600">
                  {sentInterests.length} total interests
                </p>
              </div>

              {sentInterests.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-rose-500" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-gray-800 mb-2">
                    No interests sent yet
                  </h3>
                  <p className="text-gray-600">
                    Start exploring matches and send your first interest!
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {sentInterests.map((interest) => (
                    <div
                      key={interest.id}
                      className="flex items-center space-x-4 p-4 rounded-xl border border-pink-100 hover:bg-pink-50/50 transition-colors"
                    >
                      <Avatar className="w-16 h-16">
                        <AvatarImage
                          src={interest.image || "/placeholder.svg"}
                        />
                        <AvatarFallback className="bg-gradient-to-r from-rose-500 to-pink-600 text-white">
                          {interest.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-gray-800">
                            {interest.name}
                          </h4>
                          {getStatusBadge(interest.status)}
                        </div>

                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {interest.age} years
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {interest.city}
                          </div>
                        </div>

                        <p className="text-sm text-gray-600">
                          {interest.profession}
                        </p>
                        <p className="text-xs text-gray-500">
                          Sent {interest.sentAt}
                        </p>
                        {interest.respondedAt && (
                          <p className="text-xs text-gray-500">
                            {interest.status === "accepted"
                              ? "Accepted"
                              : "Declined"}{" "}
                            {interest.respondedAt}
                          </p>
                        )}
                      </div>

                      <div className="flex space-x-2">
                        {interest.status === "pending" ? (
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-orange-200 hover:bg-orange-50 text-orange-600 bg-transparent"
                            onClick={() =>
                              handleCancelInterest(interest.id, interest.name)
                            }
                          >
                            <X className="w-4 h-4 mr-1" />
                            Cancel
                          </Button>
                        ) : interest.status === "accepted" ? (
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700"
                          >
                            <Heart className="w-4 h-4 mr-1" />
                            Message
                          </Button>
                        ) : (
                          <div className="text-xs text-gray-500">
                            Interest declined
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
          </CardContent>
        </Tabs>
      </Card>
    </div>
  );
}
