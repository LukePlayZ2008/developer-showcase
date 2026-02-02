import { useNavigate } from "react-router-dom";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Mail, 
  Settings, 
  LogOut,
  Eye,
  MessageSquare,
  Code,
  TrendingUp
} from "lucide-react";

const AdminDashboard = () => {
  const { logout } = useAdminAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin");
  };

  const stats = [
    { label: "Total Visitors", value: "1,234", icon: Users, trend: "+12%" },
    { label: "Page Views", value: "5,678", icon: Eye, trend: "+8%" },
    { label: "Messages", value: "23", icon: MessageSquare, trend: "+3" },
    { label: "Projects", value: "6", icon: Code, trend: "Active" },
  ];

  const quickActions = [
    { label: "View Portfolio", icon: FileText, href: "/" },
    { label: "Contact Messages", icon: Mail, href: "#messages" },
    { label: "Site Settings", icon: Settings, href: "#settings" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <LayoutDashboard className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg">Admin Dashboard</span>
          </div>
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Welcome back, Luke!</h1>
          <p className="text-muted-foreground mt-1">
            Here's what's happening with your portfolio today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold mt-1">{stat.value}</p>
                    <p className="text-xs text-primary flex items-center gap-1 mt-1">
                      <TrendingUp className="w-3 h-3" />
                      {stat.trend}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions & Recent Activity */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
              <CardDescription>Common tasks and shortcuts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {quickActions.map((action) => (
                <Button
                  key={action.label}
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => {
                    if (action.href.startsWith("/")) {
                      window.open(action.href, "_blank");
                    }
                  }}
                >
                  <action.icon className="w-4 h-4 mr-2" />
                  {action.label}
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* Recent Messages */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg">Recent Messages</CardTitle>
              <CardDescription>Latest contact form submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Placeholder messages */}
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="font-medium truncate">Example User {i}</p>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                          {i} day{i > 1 ? "s" : ""} ago
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        This is a sample message preview...
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Connect to database to see real messages
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Info Card */}
        <Card className="mt-6 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Settings className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Static Dashboard Mode</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  This dashboard is running with hardcoded credentials. For full functionality 
                  including real-time analytics, message management, and content editing, 
                  consider connecting to a database.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;
