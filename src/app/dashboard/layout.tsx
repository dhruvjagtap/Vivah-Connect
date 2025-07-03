"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Bell,
  Heart,
  User,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
  Home,
  UserCheck,
  Flag,
  Search,
  BarChart3,
  Shield,
} from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // Toggle for demo purposes
  const pathname = usePathname();

  const userNavItems = [
    { name: "My Profile", href: "/dashboard", icon: User },
    { name: "Matches", href: "/dashboard/matches", icon: Heart },
    { name: "Interests", href: "/dashboard/interests", icon: Users },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  const adminNavItems = [
    { name: "Overview", href: "/dashboard/admin", icon: Home },
    {
      name: "Pending Approvals",
      href: "/dashboard/admin/approvals",
      icon: UserCheck,
    },
    { name: "Flagged Content", href: "/dashboard/admin/reports", icon: Flag },
    { name: "Search Users", href: "/dashboard/admin/search", icon: Search },
    { name: "Analytics", href: "/dashboard/admin/analytics", icon: BarChart3 },
  ];

  const navItems = isAdmin ? adminNavItems : userNavItems;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white/80 backdrop-blur-sm border-r border-pink-100 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-6 border-b border-pink-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-rose-500 to-pink-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-serif font-bold text-gray-800">
                Vivah Connect
              </h1>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* User/Admin Toggle (Demo) */}
          <div className="p-4 border-b border-pink-100">
            <div className="flex items-center space-x-2">
              <Button
                variant={!isAdmin ? "default" : "outline"}
                size="sm"
                onClick={() => setIsAdmin(false)}
                className="flex-1"
              >
                User
              </Button>
              <Button
                variant={isAdmin ? "default" : "outline"}
                size="sm"
                onClick={() => setIsAdmin(true)}
                className="flex-1"
              >
                <Shield className="w-4 h-4 mr-1" />
                Admin
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg"
                      : "text-gray-700 hover:bg-pink-50 hover:text-rose-600"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-pink-100">
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-700 hover:text-red-600 hover:bg-red-50"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:ml-64">
        {/* Top bar */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-pink-100 px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <div>
                <h2 className="text-xl font-serif font-semibold text-gray-800">
                  {isAdmin ? "Admin Dashboard" : "Dashboard"}
                </h2>
                <p className="text-sm text-gray-600">Welcome back!</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 bg-rose-500 text-xs">
                  3
                </Badge>
              </Button>

              {/* Profile */}
              <div className="flex items-center space-x-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback className="bg-gradient-to-r from-rose-500 to-pink-600 text-white">
                    {isAdmin ? "AD" : "JD"}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-gray-800">
                    {isAdmin ? "Admin User" : "John Doe"}
                  </p>
                  <p className="text-xs text-gray-600">
                    {isAdmin ? "Administrator" : "Premium Member"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
