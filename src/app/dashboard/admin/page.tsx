// src/app/dashboard/admin/page.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Users,
  UserCheck,
  Flag,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Eye,
  MoreHorizontal,
} from "lucide-react";

export default function AdminDashboard() {
  const stats = {
    totalUsers: 15420,
    pendingProfiles: 89,
    reportedProfiles: 12,
    newRegistrations: 156,
  };

  const pendingApprovals = [
    {
      id: 1,
      name: "Rahul Kumar",
      email: "rahul@example.com",
      registeredAt: "2 hours ago",
      status: "pending",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Sneha Patel",
      email: "sneha@example.com",
      registeredAt: "4 hours ago",
      status: "pending",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Amit Sharma",
      email: "amit@example.com",
      registeredAt: "6 hours ago",
      status: "pending",
      image: "/placeholder.svg?height=40&width=40",
    },
  ];

  const flaggedContent = [
    {
      id: 1,
      reporter: "User #1234",
      reported: "John Doe",
      reason: "Inappropriate photos",
      status: "pending",
      reportedAt: "1 hour ago",
    },
    {
      id: 2,
      reporter: "User #5678",
      reported: "Jane Smith",
      reason: "Fake profile",
      status: "under_review",
      reportedAt: "3 hours ago",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Admin Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 text-white">
        <h1 className="text-2xl font-serif font-bold mb-2">Admin Dashboard</h1>
        <p className="opacity-90">Manage users and monitor platform activity</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-white/80 backdrop-blur-sm border-blue-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Users</p>
                <p className="text-2xl font-bold text-gray-800">
                  {stats.totalUsers.toLocaleString()}
                </p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +12% this month
                </p>
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-orange-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Profiles</p>
                <p className="text-2xl font-bold text-gray-800">
                  {stats.pendingProfiles}
                </p>
                <p className="text-xs text-orange-600 flex items-center mt-1">
                  <Clock className="w-3 h-3 mr-1" />
                  Needs attention
                </p>
              </div>
              <UserCheck className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-red-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Reported Profiles</p>
                <p className="text-2xl font-bold text-gray-800">
                  {stats.reportedProfiles}
                </p>
                <p className="text-xs text-red-600 flex items-center mt-1">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  Urgent review
                </p>
              </div>
              <Flag className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-green-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">New Registrations</p>
                <p className="text-2xl font-bold text-gray-800">
                  {stats.newRegistrations}
                </p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Today
                </p>
              </div>
              <UserCheck className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pending Approvals */}
        <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
          <CardHeader>
            <CardTitle className="font-serif flex items-center justify-between">
              Pending Approvals
              <Badge className="bg-orange-100 text-orange-700">
                {pendingApprovals.length}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingApprovals.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center space-x-4 p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={user.image || "/placeholder.svg"} />
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">{user.name}</h4>
                    <p className="text-sm text-gray-600">{user.email}</p>
                    <p className="text-xs text-gray-500">{user.registeredAt}</p>
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-200 bg-transparent"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <CheckCircle className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="destructive">
                      <XCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-center">
              <Button
                variant="outline"
                className="border-pink-200 hover:bg-pink-50 bg-transparent"
              >
                View All Pending
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Flagged Content */}
        <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
          <CardHeader>
            <CardTitle className="font-serif flex items-center justify-between">
              Flagged Content
              <Badge className="bg-red-100 text-red-700">
                {flaggedContent.length}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {flaggedContent.map((report) => (
                <div
                  key={report.id}
                  className="p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {report.reported}
                      </h4>
                      <p className="text-sm text-gray-600">
                        Reported by {report.reporter}
                      </p>
                    </div>
                    <Badge
                      className={
                        report.status === "pending"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-blue-100 text-blue-700"
                      }
                    >
                      {report.status === "pending" ? "Pending" : "Under Review"}
                    </Badge>
                  </div>

                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Reason:</strong> {report.reason}
                  </p>

                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500">{report.reportedAt}</p>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        Review
                      </Button>
                      <Button size="sm" variant="ghost">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-center">
              <Button
                variant="outline"
                className="border-pink-200 hover:bg-pink-50 bg-transparent"
              >
                View All Reports
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
        <CardHeader>
          <CardTitle className="font-serif">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 h-16">
              <div className="text-center">
                <Users className="w-6 h-6 mx-auto mb-1" />
                <span className="text-sm">Search Users</span>
              </div>
            </Button>

            <Button className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 h-16">
              <div className="text-center">
                <UserCheck className="w-6 h-6 mx-auto mb-1" />
                <span className="text-sm">Bulk Approve</span>
              </div>
            </Button>

            <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 h-16">
              <div className="text-center">
                <Flag className="w-6 h-6 mx-auto mb-1" />
                <span className="text-sm">Generate Report</span>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
