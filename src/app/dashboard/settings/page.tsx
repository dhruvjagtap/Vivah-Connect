"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import {
  User,
  Lock,
  Heart,
  Bell,
  Save,
  Eye,
  EyeOff,
  MapPin,
} from "lucide-react";

export default function SettingsPage() {
  // Account Settings State
  const [accountSettings, setAccountSettings] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Profile Preferences State
  const [profilePreferences, setProfilePreferences] = useState({
    gender: "male",
    lookingFor: "female",
    ageRange: [24, 30],
    location: "mumbai",
  });

  // Notification Settings State
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    inAppAlerts: true,
  });

  // Password visibility state
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleAccountSave = () => {
    console.log("Saving account settings:", accountSettings);
    // Handle account settings save
  };

  const handleProfileSave = () => {
    console.log("Saving profile preferences:", profilePreferences);
    // Handle profile preferences save
  };

  const handleNotificationSave = () => {
    console.log("Saving notification settings:", notificationSettings);
    // Handle notification settings save
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl p-6 text-white">
        <h1 className="text-3xl font-serif font-bold mb-2">Settings</h1>
        <p className="opacity-90">
          Manage your account, preferences, and notifications
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Account Settings */}
        <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
          <CardHeader>
            <CardTitle className="font-serif flex items-center">
              <User className="w-5 h-5 mr-2 text-rose-500" />
              Account Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <Label
                htmlFor="fullName"
                className="text-sm font-medium text-gray-700"
              >
                Full Name
              </Label>
              <Input
                id="fullName"
                value={accountSettings.fullName}
                onChange={(e) =>
                  setAccountSettings({
                    ...accountSettings,
                    fullName: e.target.value,
                  })
                }
                className="border-pink-200 focus:border-pink-500 focus:ring-pink-500/20 bg-white/50"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email Address
              </Label>
              <Input
                id="email"
                value={accountSettings.email}
                disabled
                className="border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed"
                placeholder="Email cannot be changed"
              />
              <p className="text-xs text-gray-500">
                Email address cannot be modified for security reasons
              </p>
            </div>

            <Separator className="bg-pink-100" />

            {/* Change Password Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Lock className="w-4 h-4 text-rose-500" />
                <h3 className="font-medium text-gray-800">Change Password</h3>
              </div>

              {/* Current Password */}
              <div className="space-y-2">
                <Label
                  htmlFor="currentPassword"
                  className="text-sm font-medium text-gray-700"
                >
                  Current Password
                </Label>
                <div className="relative">
                  <Input
                    id="currentPassword"
                    type={showCurrentPassword ? "text" : "password"}
                    value={accountSettings.currentPassword}
                    onChange={(e) =>
                      setAccountSettings({
                        ...accountSettings,
                        currentPassword: e.target.value,
                      })
                    }
                    className="border-pink-200 focus:border-pink-500 focus:ring-pink-500/20 bg-white/50 pr-10"
                    placeholder="Enter current password"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  >
                    {showCurrentPassword ? (
                      <EyeOff className="w-4 h-4 text-gray-400" />
                    ) : (
                      <Eye className="w-4 h-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>

              {/* New Password */}
              <div className="space-y-2">
                <Label
                  htmlFor="newPassword"
                  className="text-sm font-medium text-gray-700"
                >
                  New Password
                </Label>
                <div className="relative">
                  <Input
                    id="newPassword"
                    type={showNewPassword ? "text" : "password"}
                    value={accountSettings.newPassword}
                    onChange={(e) =>
                      setAccountSettings({
                        ...accountSettings,
                        newPassword: e.target.value,
                      })
                    }
                    className="border-pink-200 focus:border-pink-500 focus:ring-pink-500/20 bg-white/50 pr-10"
                    placeholder="Enter new password"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? (
                      <EyeOff className="w-4 h-4 text-gray-400" />
                    ) : (
                      <Eye className="w-4 h-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label
                  htmlFor="confirmPassword"
                  className="text-sm font-medium text-gray-700"
                >
                  Confirm New Password
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={accountSettings.confirmPassword}
                    onChange={(e) =>
                      setAccountSettings({
                        ...accountSettings,
                        confirmPassword: e.target.value,
                      })
                    }
                    className="border-pink-200 focus:border-pink-500 focus:ring-pink-500/20 bg-white/50 pr-10"
                    placeholder="Confirm new password"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-4 h-4 text-gray-400" />
                    ) : (
                      <Eye className="w-4 h-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>
            </div>

            <Button
              onClick={handleAccountSave}
              className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Account Settings
            </Button>
          </CardContent>
        </Card>

        {/* Profile Preferences */}
        <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
          <CardHeader>
            <CardTitle className="font-serif flex items-center">
              <Heart className="w-5 h-5 mr-2 text-rose-500" />
              Profile Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Gender */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                Gender
              </Label>
              <Select
                value={profilePreferences.gender}
                onValueChange={(value) =>
                  setProfilePreferences({
                    ...profilePreferences,
                    gender: value,
                  })
                }
              >
                <SelectTrigger className="border-pink-200 focus:border-pink-500 bg-white/50">
                  <SelectValue placeholder="Select your gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Looking For */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                Looking For
              </Label>
              <Select
                value={profilePreferences.lookingFor}
                onValueChange={(value) =>
                  setProfilePreferences({
                    ...profilePreferences,
                    lookingFor: value,
                  })
                }
              >
                <SelectTrigger className="border-pink-200 focus:border-pink-500 bg-white/50">
                  <SelectValue placeholder="Select preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="both">Both</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Age Range */}
            <div className="space-y-4">
              <Label className="text-sm font-medium text-gray-700">
                Age Range
              </Label>
              <div className="px-2">
                <Slider
                  value={profilePreferences.ageRange}
                  onValueChange={(value) =>
                    setProfilePreferences({
                      ...profilePreferences,
                      ageRange: value,
                    })
                  }
                  max={50}
                  min={18}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>{profilePreferences.ageRange[0]} years</span>
                  <span>{profilePreferences.ageRange[1]} years</span>
                </div>
              </div>
            </div>

            {/* Location Preference */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700 flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                Location Preference
              </Label>
              <Select
                value={profilePreferences.location}
                onValueChange={(value) =>
                  setProfilePreferences({
                    ...profilePreferences,
                    location: value,
                  })
                }
              >
                <SelectTrigger className="border-pink-200 focus:border-pink-500 bg-white/50">
                  <SelectValue placeholder="Select preferred location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                  <SelectItem value="hyderabad">Hyderabad</SelectItem>
                  <SelectItem value="pune">Pune</SelectItem>
                  <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
                  <SelectItem value="chennai">Chennai</SelectItem>
                  <SelectItem value="kolkata">Kolkata</SelectItem>
                  <SelectItem value="anywhere">Anywhere in India</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={handleProfileSave}
              className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Profile Preferences
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Notification Settings - Full Width */}
      <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
        <CardHeader>
          <CardTitle className="font-serif flex items-center">
            <Bell className="w-5 h-5 mr-2 text-rose-500" />
            Notification Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email Notifications */}
            <div className="flex items-center justify-between p-4 rounded-xl border border-pink-100 bg-pink-50/30">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-800">
                  Email Notifications
                </h3>
                <p className="text-sm text-gray-600">
                  Receive notifications via email about matches and messages
                </p>
              </div>
              <Switch
                checked={notificationSettings.emailNotifications}
                onCheckedChange={(checked) =>
                  setNotificationSettings({
                    ...notificationSettings,
                    emailNotifications: checked,
                  })
                }
              />
            </div>

            {/* In-App Alerts */}
            <div className="flex items-center justify-between p-4 rounded-xl border border-pink-100 bg-pink-50/30">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-800">In-App Alerts</h3>
                <p className="text-sm text-gray-600">
                  Show push notifications within the application
                </p>
              </div>
              <Switch
                checked={notificationSettings.inAppAlerts}
                onCheckedChange={(checked) =>
                  setNotificationSettings({
                    ...notificationSettings,
                    inAppAlerts: checked,
                  })
                }
              />
            </div>
          </div>

          <Button
            onClick={handleNotificationSave}
            className="w-full md:w-auto bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Notification Settings
          </Button>
        </CardContent>
      </Card>

      {/* Additional Settings Info */}
      <Card className="bg-gradient-to-r from-rose-50 to-pink-50 border-pink-200">
        <CardContent className="p-6">
          <div className="text-center space-y-2">
            <h3 className="font-serif font-semibold text-gray-800">
              Need Help?
            </h3>
            <p className="text-sm text-gray-600">
              If you need assistance with your settings or have questions about
              your account, please contact our support team.
            </p>
            <Button
              variant="outline"
              className="border-pink-200 hover:bg-pink-50 bg-transparent mt-4"
            >
              Contact Support
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
