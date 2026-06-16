import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  MapPin,
  Calendar as CalendarIcon,
  Users,
  Plane,
  Star,
  Shield,
  Zap,
  CreditCard,
  Clock,
  Globe,
  Download,
  Crown,
  Check,
  CheckCircle,
  Smartphone,
  Menu,
  X,
  Heart,
  BookOpen,
  Bell,
  User,
  Settings,
  LogOut,
  HelpCircle,
  MessageCircle,
  Camera,
  Fingerprint,
  HeartPulse,
  Droplet,
  Gauge,
  Building2,
  Languages,
  Anchor,
  ShieldCheck,
  RefreshCcw,
  CircleCheckBig,
  Activity,
  BarChart3,
  Target,
} from "lucide-react";
import Hotel4013Logo from "@/components/Hotel4013Logo";
import { format } from "date-fns";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { usePayment } from "@/hooks/usePayment";
import { useStore } from "@/store/useStore";
import { supabase } from "@/integrations/supabase/client";
import PaymentForm from "@/components/PaymentForm";
import { useDailyDeals } from "@/hooks/useDailyDeals";
import ScrollToTop from "@/components/ScrollToTop";
import PremiumUpsellDialog, {
  type PremiumTier,
} from "@/components/PremiumUpsellDialog";

// Add interface for subscription tiers with flexible pricing
interface SubscriptionTier {
  id: string;
  name: string;
  price: number;
  displayPrice: string;
  billing?: "monthly" | "annual";
  originalPrice?: number;
  displayOriginalPrice?: string;
  savings?: number;
  displaySavings?: string;
  duration?: string;
  popular?: boolean;
  badge?: string;
  features: string[];
  currency?: string;
  platform?: string;
  region?: string;
}

export default function HomePage(): React.JSX.Element {
  const navigate = useNavigate();
  const searchlocation = useLocation();
  const { user, isAuthenticated, setUser } = useStore();
  const { createSubscriptionPayment, isCreatingPayment } = usePayment();
  const [searchType, setSearchType] = useState<"hotels" | "flights">("hotels");
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState<string>("2");
  const [location, setLocation] = useState<string>("");
  const [showPremiumModal, setShowPremiumModal] = useState<boolean>(false);
  const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false);
  const [showPricingModal, setShowPricingModal] = useState<boolean>(false);
  const [selectedTier, setSelectedTier] = useState<any>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [notificationCount, setNotificationCount] = useState<number>(3);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [showBookingSuccessModal, setShowBookingSuccessModal] = useState(false);
  const [bookingStatus, setBookingStatus] = useState<
    "success" | "cancelled" | null
  >(null);
  const [bookingType, setBookingType] = useState<string | null>(null);

  // for reading/cleaning query params
  // const [searchParams, setSearchParams] = useSearchParams();
  // Fetch daily deals from database
  const { data: dailyDeals, isLoading: isLoadingDeals } = useDailyDeals();

  // Flight search states
  const [fromLocation, setFromLocation] = useState<string>("");
  const [toLocation, setToLocation] = useState<string>("");
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [passengers, setPassengers] = useState<string>("1");
  const [userSubscription, setUserSubscription] = useState<any>(null);
  const [isSubscriptionActive, setIsSubscriptionActive] =
    useState<boolean>(false);

  // const { createSubscriptionPayment} = usePayment();
  // Premium tiers with enhanced pricing
  const premiumTiers: PremiumTier[] = [
    {
      id: "basic",
      name: "Basic",
      price: 0,
      displayPrice: "Free",
      features: [
        "Basic hotel search",
        "Standard flight search",
        "Email support",
        "Mobile app access",
      ],
    },
    {
      id: "premium-monthly",
      name: "Premium Monthly",
      price: 29.99,
      displayPrice: "$29.99",
      billing: "monthly",
      originalPrice: 89.97,
      displayOriginalPrice: "$89.97",
      savings: 59.98,
      displaySavings: "$59.98",
      popular: true,
      features: [
        "AI-powered recommendations",
        "Priority customer support",
        "Advanced filtering options",
        "Facial recognition security",
        "Price alerts & notifications",
        "Exclusive deals access",
        "No booking fees",
      ],
    },
    {
      id: "premium-elite",
      name: "Elite",
      price: 99.99,
      billing: "annual",
      displayPrice: "$99.99",
      features: [
        "Everything in Premium",
        "Personal travel concierge",
        "VIP airport lounge access",
        "Free cancellation guarantee",
        "Premium hotel upgrades",
        "24/7 dedicated support",
        "Travel insurance included",
      ],
    },
    {
      id: "premium-annual",
      name: "Premium Annual",
      price: 299.99,
      displayPrice: "$299.99",
      billing: "annual",
      originalPrice: 359.88,
      displayOriginalPrice: "$359.88",
      savings: 59.89,
      displaySavings: "$59.89",
      badge: "Best Value",
      features: [
        "All Premium Monthly features",
        "Additional 2 months free",
        "Exclusive annual member benefits",
        "Priority booking guarantee",
        "Advanced travel analytics",
        "Personal travel advisor",
        "VIP customer support",
        "Travel insurance discount",
      ],
    },
  ];
  useEffect(() => {
    const sendTestEmail = async () => {
      try {
        const { data, error } = await supabase.functions.invoke("test-email", {
          body: {
            // optional: override "to" email
            to: "khadija.perveen786@gail.com",
          },
        });

        console.log("test-email response:", { data, error });
      } catch (err) {
        console.error("Error calling test-email function:", err);
      }
    };

    sendTestEmail();
  }, []);
  useEffect(() => {
    const fetchUserSubscription = async () => {
      try {
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError) {
          console.error("Error fetching user data:", userError);
          setIsSubscriptionActive(false); // Set as false if there's an error
          return;
        }
        console.log("Fetched User Data:", user?.id); // Log the fetched user data
        if (!user?.id) {
          console.error("User not authenticated");
          setIsSubscriptionActive(false);
          return;
        }
        const { data, error } = await supabase
          .from("payments")
          .select("*")
          .eq("user_id", user.id)
          .eq("booking_type", "subscription")
          .eq("status", "succeeded")
          .eq("is_active", true)
          // .order("subscription_start_date", { ascending: false })
          .limit(1);

        if (error) {
          console.error("Error fetching subscription data:", error);
          setIsSubscriptionActive(false); // Set as false if there's an error
        }

        // Log the user subscription data
        console.log("User Subscription Data:", data); // <-- Log the userSubscription data here
        setUserSubscription(data);

        if (data) {
          setIsSubscriptionActive(true);
        } else {
          setIsSubscriptionActive(false);
        }
      } catch (error) {
        console.error("Error fetching subscription:", error);
        setIsSubscriptionActive(false);
      }
    };

    fetchUserSubscription();
  }, []);

  useEffect(() => {
    // 1. First try normal query string (?booking=...)
    let params = new URLSearchParams(searchlocation.search);
    let status = params.get("booking");

    // 2. If not found, try inside the hash (#/?booking=...)
    if (!status) {
      const hash = searchlocation.hash || window.location.hash; // e.g. "#/?booking=success&type=hotel"
      const qIndex = hash.indexOf("?");
      if (qIndex !== -1) {
        const hashQuery = hash.slice(qIndex + 1); // "booking=success&type=hotel..."
        params = new URLSearchParams(hashQuery);
        status = params.get("booking");
      }
    }

    if (!status) return;

    const type = params.get("type");
    const sessionId = params.get("session_id"); // if you need it later

    setBookingType(type);
    setBookingStatus(status as "success" | "cancelled");
    setShowBookingSuccessModal(true);

    if (status === "success") {
      toast({
        title: "Booking Confirmed 🎉",
        description:
          "Your payment was successful. A confirmation email will be sent shortly.",
      });
    } else if (status === "cancelled") {
      toast({
        title: "Payment Cancelled",
        description:
          "Your payment was cancelled. You can try booking again anytime.",
        variant: "destructive",
      });
    }

    // 3. Clean URL back to nice `/` (no hash query) so modal doesn’t reopen on refresh
    navigate("/", { replace: true });
  }, [location, navigate]);

  // Search validation and handling functions
  const validateHotelSearch = (): string | null => {
    if (!location.trim()) return "Please enter a destination";
    if (!checkIn) return "Please select check-in date";
    if (!checkOut) return "Please select check-out date";
    if (checkIn >= checkOut)
      return "Check-out date must be after check-in date";
    return null;
  };

  const validateFlightSearch = (): string | null => {
    if (!fromLocation.trim()) return "Please enter departure city";
    if (!toLocation.trim()) return "Please enter destination city";
    if (!departureDate) return "Please select departure date";
    if (fromLocation.toLowerCase() === toLocation.toLowerCase())
      return "Departure and destination cities must be different";
    return null;
  };

  const handleHotelSearch = async (): Promise<void> => {
    const error = validateHotelSearch();
    if (error) {
      toast({
        title: "Search Error",
        description: error,
        variant: "destructive",
      });
      return;
    }

    setIsSearching(true);

    try {
      const searchParams = new URLSearchParams({
        type: "hotels",
        destination: location,
        checkIn: format(checkIn!, "yyyy-MM-dd"),
        checkOut: format(checkOut!, "yyyy-MM-dd"),
        guests: guests,
      });

      toast({
        title: "Searching Hotels",
        description: `Finding the best hotels in ${location}...`,
      });

      navigate(`/search?${searchParams.toString()}`);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Search failed. Please try again.";
      toast({
        title: "Search Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSearching(false);
    }
  };

  const handleFlightSearch = async (): Promise<void> => {
    const error = validateFlightSearch();
    if (error) {
      toast({
        title: "Search Error",
        description: error,
        variant: "destructive",
      });
      return;
    }

    setIsSearching(true);

    try {
      const searchParams = new URLSearchParams({
        type: "flights",
        from: fromLocation,
        to: toLocation,
        departureDate: format(departureDate!, "yyyy-MM-dd"),
        passengers: passengers,
      });

      if (returnDate) {
        searchParams.append("returnDate", format(returnDate, "yyyy-MM-dd"));
      }

      toast({
        title: "Searching Flights",
        description: `Finding flights from ${fromLocation} to ${toLocation}...`,
      });

      navigate(`/search?${searchParams.toString()}`);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Search failed. Please try again.";
      toast({
        title: "Search Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSearching(false);
    }
  };

  // Handle premium subscription upgrade
  const handleUpgrade = async (
    tier: (typeof premiumTiers)[0],
  ): Promise<void> => {
    if (!tier) {
      // Early return if the tier doesn't exist
      console.error("Selected tier is invalid.");
      return;
    }

    if (tier.price === 0) {
      console.log("tier", tier);

      toast({
        title: "Already Active",
        description: "You're currently on the Basic plan.",
      });
      return;
    }
    if (userSubscription && userSubscription[0]?.metadata.tier_id === tier.id) {
      // If the user is already subscribed to the selected tier
      console.log(`You are already subscribed to the ${tier.name} plan.`);

      toast({
        title: "Already on Current Plan",
        description: `You are already subscribed to the ${tier.name} plan.`,
      });
      return;
    }

    // If user has an active subscription but it's not the desired one
    if (isSubscriptionActive) {
      console.log("User has an active subscription, proceeding with upgrade.");
    }
    if (!isAuthenticated) {
      // Redirect to signup with tier information
      navigate("/signup", {
        state: {
          selectedTier: tier.name,
          redirectTo: "/payment",
          upgradeFlow: true,
        },
      });
      return;
    }
    const currentSubscription = user?.subscriptionType; // Assuming `subscriptionType` holds the current tier the user is subscribed to

    if (currentSubscription === tier.name) {
      console.log("User already on this tier:", tier.name);
      toast({
        title: "Already on Current Plan",
        description: `You are already subscribed to the ${tier.name} plan.`,
      });
      return;
    }

    setSelectedTier(tier);
    setShowPremiumModal(false);

    // Use async function to fetch the user and handle payment
    const fetchUser = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user?.email || !user?.id) {
          throw new Error("User not authenticated");
        }
        return { userEmail: user.email, userId: user.id };
      } catch (error) {
        console.error("Error fetching user:", error);
        throw error; // Throw error to handle outside
      }
    };

    try {
      const { userEmail, userId } = await fetchUser();
      console.log("Selected Tier ID:", tier.id);
      console.log("Fetched User Email:", userEmail);

      // Log before calling createSubscriptionPayment
      console.log("Selected Tier ID:", tier.id);

      console.log("Calling createSubscriptionPayment...");
      console.log("Selected Tier ID:", tier.id);
      const booking_type = "subscription";
      const subscriptionType = "premium";
      if (!subscriptionType) {
        console.error("Subscription type is undefined.");
      }
      const data = await createSubscriptionPayment(
        tier.id, // The tier ID
        userEmail,
        userId,
        booking_type,
        subscriptionType, // Subscription type
        currentPlatform, // Platform detected
        currentRegion,
        0, // Optional: any promotional discount
        {
          tierName: tier.name,
          tierId: tier?.id,
          platform: currentPlatform,
          region: currentRegion,
          billing: tier.billing || "monthly",
        },
      );

      // Log the response from createSubscriptionPayment
      console.log("Payment response data:", data);

      // Handle successful payment redirection or additional actions here
    } catch (err) {
      console.error("Error during upgrade process:", err);
      toast({
        title: "Payment Processing Failed",
        description:
          "There was an issue processing the payment. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Handle successful payment
  const handlePaymentSuccess = (paymentData: any): void => {
    toast({
      title: "Payment Successful! 🎉",
      description: `Welcome to ${selectedTier?.name}! Your premium features are now active.`,
    });

    setShowPaymentModal(false);
    setSelectedTier(null);

    // Refresh user data to reflect premium status
    // In a real app, you'd update the user's subscription status in Supabase
  };

  // Handle payment cancellation
  const handlePaymentCancel = (): void => {
    setShowPaymentModal(false);
    setSelectedTier(null);

    toast({
      title: "Payment Cancelled",
      description:
        "Your upgrade has been cancelled. You can try again anytime.",
    });
  };

  // Get flexible pricing system
  const {
    getAvailableSubscriptionTiers,
    getPlatformPricing,
    applyPromotionalPricing,
    formatCurrency,
  } = usePayment();

  // Detect platform and region (in a real app, this would come from user agent, IP, etc.)
  const detectPlatform = (): "web" | "ios" | "android" | "desktop" => {
    // Simple detection - in production, use proper user agent detection
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("iphone") || userAgent.includes("ipad"))
      return "ios";
    if (userAgent.includes("android")) return "android";
    if (userAgent.includes("electron")) return "desktop";
    return "web";
  };

  const detectRegion = (): "US" | "EU" | "UK" | "CA" | "AU" | "GLOBAL" => {
    // Simple detection - in production, use IP geolocation
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timezone.includes("Europe")) return "EU";
    if (timezone.includes("London")) return "UK";
    if (timezone.includes("Toronto") || timezone.includes("Vancouver"))
      return "CA";
    if (timezone.includes("Sydney") || timezone.includes("Melbourne"))
      return "AU";
    return "US";
  };

  const currentPlatform = detectPlatform();
  const currentRegion = detectRegion();

  // Get dynamic subscription tiers based on platform and region
  const dynamicSubscriptionTiers = getAvailableSubscriptionTiers(
    currentPlatform,
    currentRegion,
  );

  // Transform to match existing interface
  const subscriptionTiers: SubscriptionTier[] = [
    {
      id: "basic",
      name: "Basic",
      price: 0,
      displayPrice: "Free",
      features: [
        "Basic hotel search",
        "Flight search",
        "Standard customer support",
        "Email notifications",
        "Mobile app access",
      ],
    },
    ...dynamicSubscriptionTiers
      .filter((tier) => tier.id !== "basic")
      .map((tier) => ({
        id: tier.id,
        name: tier.name,
        price: tier.price,
        displayPrice:
          tier.displayPrice || formatCurrency(tier.price, tier.currency),
        billing: tier.billing,
        originalPrice: tier.originalPrice,
        displayOriginalPrice: tier.displayOriginalPrice,
        savings: tier.savings,
        displaySavings: tier.displaySavings,
        duration:
          tier.billing === "annual"
            ? "12 months"
            : tier.name.includes("Monthly")
              ? "3 months"
              : "1 month",
        popular: tier.id === "premium-monthly",
        badge: tier.id === "premium-annual" ? "Best Value" : undefined,
        features: tier.features,
        currency: tier.currency,
        platform: currentPlatform,
        region: currentRegion,
      })),
  ];

  // Function to handle premium upgrade with dynamic pricing
  const handlePremiumUpgrade = (tierId: string = "premium-monthly"): void => {
    const tier = subscriptionTiers.find((t) => t.id === tierId);
    if (!tier) return;

    setSelectedTier(tier);
    setShowPricingModal(true);
  };

  // Function to apply promotional pricing (e.g., for special offers)
  const getPromotionalPricing = (
    tierId: string,
    discountPercentage: number = 0,
  ) => {
    if (discountPercentage > 0) {
      return applyPromotionalPricing(
        tierId,
        discountPercentage,
        currentPlatform,
        currentRegion,
      );
    }
    return getPlatformPricing(tierId, currentPlatform, currentRegion);
  };

  // Handle user logout
  const handleLogout = async (): Promise<void> => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw new Error(error.message);
      }

      setUser(null);
      toast({
        title: "Signed Out Successfully",
        description: "You have been logged out of your account.",
      });

      // Redirect to home page
      navigate("/", { replace: true });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Logout failed";
      toast({
        title: "Logout Failed",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  // Get user display name
  const getUserDisplayName = (): string => {
    if (!user) return "Guest";

    // Try user metadata first
    if (user.user_metadata?.first_name) {
      return user.user_metadata.first_name;
    }

    // Fall back to email prefix
    if (user.email) {
      return user.email.split("@")[0];
    }

    return "User";
  };

  const currentYear = new Date().getFullYear();



  const handleDashboardClick = () => {
    navigate('/dashboard'); 
  };
  const features = [
    "Track blood glucose levels throughout the day",
    "Record fasting, pre-meal, and post-meal readings",
    "Visual charts showing glucose trends over time",
    "Set personalized target ranges and goals",
    "Add notes about meals, activity, and medications",
  ];
  const Bloodfeatures = [
    "Monitor systolic and diastolic blood pressure",
    " Record heart rate with each measurement",
    "Track trends with interactive line charts",
    "Set healthy blood pressure targets",
    "Detailed measurement history and statistics",
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-amber-900/95 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Hotel4013Logo
                className="text-amber-200"
                size="md"
                variant="white"
              />
              <span className="text-xl sm:text-2xl font-bold text-amber-100">
                Hotel4013.com
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-amber-100 hover:text-amber-200 hover:bg-amber-800/50 flex items-center space-x-2 px-3 py-2 text-sm font-medium"
                asChild
              >
                <Link to="/translate">
                  <Languages className="h-4 w-4" />
                  <span>Translate</span>
                </Link>
              </Button>

              <Button
                variant="ghost"
                className="text-amber-100 hover:text-amber-200 hover:bg-amber-800/50 flex items-center space-x-2 px-3 py-2 text-sm font-medium"
                asChild
              >
                <Link to="/download">
                  <Download className="h-4 w-4" />
                  <span>Download App</span>
                </Link>
              </Button>

              <PremiumUpsellDialog
                open={showPremiumModal}
                onOpenChange={setShowPremiumModal}
                trigger={
                  <Button
                    variant="ghost"
                    className="relative text-amber-100 hover:text-amber-200 hover:bg-amber-800/50 flex items-center space-x-2 px-3 py-2 text-sm font-medium overflow-hidden group animate-pulse"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                    <div className="absolute inset-0 bg-amber-400/20 rounded animate-pulse" />

                    <Crown className="h-4 w-4 relative z-10 animate-bounce" />
                    <span className="relative z-10 font-semibold">
                      Go Premium
                    </span>

                    <span className="relative z-10 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                    </span>
                  </Button>
                }
                tiers={premiumTiers}
                currentTierId={userSubscription?.[0]?.metadata?.tier_id ?? null}
                onSelectTier={handleUpgrade}
              />

              {/* Hotels Dropdown with Travel Options */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-amber-100 hover:text-amber-200 hover:bg-amber-800/50 flex items-center space-x-2 px-3 py-2 text-sm font-medium"
                  >
                    <Hotel4013Logo size="sm" variant="default" />
                    <span>Hotels</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-48 bg-white border-amber-200"
                >
                  <DropdownMenuLabel className="text-amber-900">
                    Travel Options
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link
                      to="/hotels"
                      className="flex items-center cursor-pointer"
                    >
                      <Hotel4013Logo
                        size="sm"
                        variant="default"
                        className="mr-2"
                      />
                      <span>Hotels</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link
                      to="/flights"
                      className="flex items-center cursor-pointer"
                    >
                      <Plane className="h-4 w-4 mr-2" />
                      <span>Flights</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link
                      to="/cruises"
                      className="flex items-center cursor-pointer"
                    >
                      <Anchor className="h-4 w-4 mr-2" />
                      <span>Cruises</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                to="/rewards"
                className="text-amber-200 hover:text-amber-100 transition-colors px-3 py-2 text-sm font-medium"
              >
                Rewards
              </Link>

              <Button
                variant="ghost"
                className="text-amber-100 hover:text-amber-200 hover:bg-amber-800/50 flex items-center space-x-2 px-3 py-2 text-sm font-medium"
                asChild
              >
                <Link to="/staff">
                  <Building2 className="h-4 w-4" />
                  <span>Hotel Staff</span>
                </Link>
              </Button>

              {isAuthenticated && (
                <Button
                  variant="ghost"
                  className="text-amber-100 hover:text-amber-200 hover:bg-amber-800/50 flex items-center space-x-2 px-3 py-2 text-sm font-medium"
                  asChild
                >
                  <Link to="/admin">
                    <Settings className="h-4 w-4" />
                    <span>Admin</span>
                  </Link>
                </Button>
              )}

              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="text-amber-200 hover:text-amber-100 hover:bg-amber-800/50 px-4 py-2 text-sm font-medium flex items-center space-x-2"
                    >
                      <User className="h-4 w-4" />
                      <span>{getUserDisplayName()}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="w-56 bg-white border-amber-200"
                  >
                    <DropdownMenuLabel className="text-amber-900">
                      {user?.email}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link
                        to="/profile"
                        className="flex items-center cursor-pointer"
                      >
                        <User className="h-4 w-4 mr-2" />
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        to="/bookings"
                        className="flex items-center cursor-pointer"
                      >
                        <BookOpen className="h-4 w-4 mr-2" />
                        My Bookings
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        to="/rewards"
                        className="flex items-center cursor-pointer"
                      >
                        <Crown className="h-4 w-4 mr-2" />
                        Loyalty Rewards
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        to="/settings"
                        className="flex items-center cursor-pointer"
                      >
                        <Settings className="h-4 w-4 mr-2" />
                        Settings
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="text-red-600 cursor-pointer"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    className="text-amber-200 hover:text-amber-100 hover:bg-amber-800/50 px-4 py-2 text-sm font-medium"
                    asChild
                  >
                    <Link to="/login">Sign In</Link>
                  </Button>
                  <Button
                    className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 text-sm font-medium"
                    asChild
                  >
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-amber-100 hover:text-white hover:bg-amber-700 border border-amber-600 bg-amber-800/30 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-amber-900/98 backdrop-blur-md border-t border-amber-700">
            <div className="px-4 py-3 space-y-3">
              {/* Mobile Hotels Dropdown with Travel Options */}
              <div className="border-b border-amber-700 pb-3 mb-3">
                <div className="text-amber-200 text-xs font-semibold px-4 py-2 uppercase">
                  Travel Options
                </div>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-amber-100 hover:text-amber-200 hover:bg-amber-800/50 font-semibold"
                  asChild
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link to="/hotels" className="flex items-center space-x-2">
                    <Hotel4013Logo size="sm" variant="default" />
                    <span>Hotels</span>
                  </Link>
                </Button>

                <Button
                  variant="ghost"
                  className="w-full justify-start text-amber-100 hover:text-amber-200 hover:bg-amber-800/50 pl-10"
                  asChild
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link to="/flights" className="flex items-center space-x-2">
                    <Plane className="h-4 w-4" />
                    <span>Flights</span>
                  </Link>
                </Button>

                <Button
                  variant="ghost"
                  className="w-full justify-start text-amber-100 hover:text-amber-200 hover:bg-amber-800/50 pl-10"
                  asChild
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link to="/cruises" className="flex items-center space-x-2">
                    <Anchor className="h-4 w-4" />
                    <span>Cruises</span>
                  </Link>
                </Button>
              </div>

              <Button
                variant="ghost"
                className="w-full justify-start text-amber-100 hover:text-amber-200 hover:bg-amber-800/50"
                asChild
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link to="/translate" className="flex items-center space-x-2">
                  <Languages className="h-4 w-4" />
                  <span>Translate</span>
                </Link>
              </Button>

              <Button
                variant="ghost"
                className="w-full justify-start text-amber-100 hover:text-amber-200 hover:bg-amber-800/50"
                asChild
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link to="/download" className="flex items-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Download App</span>
                </Link>
              </Button>

              <Button
                variant="ghost"
                className="relative w-full justify-start text-amber-100 hover:text-amber-200 hover:bg-amber-800/50 overflow-hidden group animate-pulse"
                onClick={() => {
                  setShowPremiumModal(true);
                  setMobileMenuOpen(false);
                }}
              >
                {/* Shimmer effect background */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                {/* Pulsing glow effect */}
                <div className="absolute inset-0 bg-amber-400/20 rounded animate-pulse" />

                <Crown className="h-4 w-4 mr-2 relative z-10 animate-bounce" />
                <span className="relative z-10 font-semibold">Go Premium</span>

                {/* Sparkle indicator */}
                <span className="relative z-10 flex h-2 w-2 ml-auto">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                </span>
              </Button>

              <Button
                variant="ghost"
                className="w-full justify-start text-amber-100 hover:text-amber-200 hover:bg-amber-800/50"
                asChild
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link to="/rewards" className="flex items-center space-x-2">
                  <Crown className="h-4 w-4" />
                  <span>Rewards</span>
                </Link>
              </Button>

              <Button
                variant="ghost"
                className="w-full justify-start text-amber-100 hover:text-amber-200 hover:bg-amber-800/50"
                asChild
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link to="/staff" className="flex items-center space-x-2">
                  <Building2 className="h-4 w-4" />
                  <span>Hotel Staff</span>
                </Link>
              </Button>

              {isAuthenticated && (
                <Button
                  variant="ghost"
                  className="w-full justify-start text-amber-100 hover:text-amber-200 hover:bg-amber-800/50"
                  asChild
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link to="/admin" className="flex items-center space-x-2">
                    <Settings className="h-4 w-4" />
                    <span>Admin Dashboard</span>
                  </Link>
                </Button>
              )}

              <div className="border-t border-amber-700 pt-3 mt-3">
                {isAuthenticated ? (
                  <>
                    <div className="mb-3 px-4 py-2 bg-amber-800/30 rounded">
                      <div className="text-amber-100 text-sm font-medium">
                        {getUserDisplayName()}
                      </div>
                      <div className="text-amber-300 text-xs">
                        {user?.email}
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      className="w-full justify-start text-amber-100 hover:text-amber-200 hover:bg-amber-800/50 mb-2"
                      asChild
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Link
                        to="/profile"
                        className="flex items-center space-x-2"
                      >
                        <User className="h-4 w-4" />
                        <span>Profile</span>
                      </Link>
                    </Button>

                    <Button
                      variant="ghost"
                      className="w-full justify-start text-amber-100 hover:text-amber-200 hover:bg-amber-800/50 mb-2"
                      asChild
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Link
                        to="/bookings"
                        className="flex items-center space-x-2"
                      >
                        <BookOpen className="h-4 w-4" />
                        <span>My Bookings</span>
                      </Link>
                    </Button>

                    <Button
                      variant="ghost"
                      className="w-full justify-start text-amber-100 hover:text-amber-200 hover:bg-amber-800/50 mb-2"
                      asChild
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Link
                        to="/settings"
                        className="flex items-center space-x-2"
                      >
                        <Settings className="h-4 w-4" />
                        <span>Settings</span>
                      </Link>
                    </Button>

                    <Button
                      variant="ghost"
                      className="w-full justify-start text-red-300 hover:text-red-200 hover:bg-red-800/30"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        handleLogout();
                      }}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      <span>Sign Out</span>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-amber-100 hover:text-amber-200 hover:bg-amber-800/50 mb-2"
                      asChild
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Link to="/login">Sign In</Link>
                    </Button>

                    <Button
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                      asChild
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Link to="/signup">Sign Up</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 search-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6">
              Your AI-Powered
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                {" "}
                Travel Companion
              </span>
            </h1>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto mb-8">
              Discover amazing hotels and flights with our intelligent search
              engine. Real-time pricing, personalized recommendations, and
              seamless booking experience.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-amber-700">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1" />
                Secure Booking
              </div>
              <div className="flex items-center">
                <Zap className="h-4 w-4 mr-1" />
                Real-time Search
              </div>
              <div className="flex items-center">
                <Fingerprint className="h-4 w-4 mr-1" />
                Facial Recognition
              </div>
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-1" />
                Worldwide Coverage
              </div>
            </div>
          </div>

          {/* Search Card */}
          <Card className="max-w-5xl mx-auto shadow-xl border-0 bg-amber-50/95 backdrop-blur-md border-amber-200">
            <CardContent className="p-8">
              <Tabs
                value={searchType}
                onValueChange={(value) =>
                  setSearchType(value as "hotels" | "flights")
                }
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-2 mb-6 bg-amber-100">
                  <TabsTrigger
                    value="hotels"
                    className="flex items-center space-x-2 data-[state=active]:bg-amber-600 data-[state=active]:text-white"
                  >
                    <Hotel4013Logo size="sm" variant="default" />
                    <span>Hotels</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="flights"
                    className="flex items-center space-x-2 data-[state=active]:bg-amber-600 data-[state=active]:text-white"
                  >
                    <Plane className="h-4 w-4" />
                    <span>Flights</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="hotels" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-amber-800 mb-2">
                        Destination
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-amber-600" />
                        <Input
                          placeholder="Where are you going?"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="pl-10 border-amber-200 focus:border-amber-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-amber-800 mb-2">
                        Check-in
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal border-amber-200 hover:bg-amber-100"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkIn
                              ? format(checkIn, "MMM dd")
                              : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={checkIn}
                            onSelect={setCheckIn}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-amber-800 mb-2">
                        Check-out
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal border-amber-200 hover:bg-amber-100"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkOut
                              ? format(checkOut, "MMM dd")
                              : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={checkOut}
                            onSelect={setCheckOut}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-amber-800 mb-2">
                        Guests
                      </label>
                      <Select value={guests} onValueChange={setGuests}>
                        <SelectTrigger className="border-amber-200">
                          <SelectValue placeholder="Select guests" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Guest</SelectItem>
                          <SelectItem value="2">2 Guests</SelectItem>
                          <SelectItem value="3">3 Guests</SelectItem>
                          <SelectItem value="4">4+ Guests</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-amber-800 mb-2">
                        &nbsp;
                      </label>
                      <Button
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white h-10"
                        onClick={handleHotelSearch}
                        disabled={isSearching}
                      >
                        {isSearching ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Searching...</span>
                          </div>
                        ) : (
                          <>
                            <Search className="mr-2 h-4 w-4" />
                            Search Hotels
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="flights" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-amber-800 mb-2">
                        From
                      </label>
                      <div className="relative">
                        <Plane className="absolute left-3 top-3 h-4 w-4 text-amber-600" />
                        <Input
                          placeholder="Departure city"
                          value={fromLocation}
                          onChange={(e) => setFromLocation(e.target.value)}
                          className="pl-10 border-amber-200 focus:border-amber-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-amber-800 mb-2">
                        To
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-amber-600" />
                        <Input
                          placeholder="Destination city"
                          value={toLocation}
                          onChange={(e) => setToLocation(e.target.value)}
                          className="pl-10 border-amber-200 focus:border-amber-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-amber-800 mb-2">
                        Departure
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal border-amber-200 hover:bg-amber-100"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {departureDate
                              ? format(departureDate, "MMM dd")
                              : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={departureDate}
                            onSelect={setDepartureDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-amber-800 mb-2">
                        Passengers
                      </label>
                      <Select value={passengers} onValueChange={setPassengers}>
                        <SelectTrigger className="border-amber-200">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Passenger</SelectItem>
                          <SelectItem value="2">2 Passengers</SelectItem>
                          <SelectItem value="3">3 Passengers</SelectItem>
                          <SelectItem value="4">4+ Passengers</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-amber-800 mb-2">
                        Return (Optional)
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal border-amber-200 hover:bg-amber-100"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {returnDate
                              ? format(returnDate, "MMM dd")
                              : "Return date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={returnDate}
                            onSelect={setReturnDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-amber-800 mb-2">
                        &nbsp;
                      </label>
                      <Button
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white h-10"
                        onClick={handleFlightSearch}
                        disabled={isSearching}
                      >
                        {isSearching ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Searching...</span>
                          </div>
                        ) : (
                          <>
                            <Search className="mr-2 h-4 w-4" />
                            Search Flights
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex flex-wrap items-center justify-between gap-4 bg-green-50 border border-green-500 rounded-xl px-6 py-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shrink-0">
                <RefreshCcw className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <CircleCheckBig className="h-6 w-6 text-green-600" />
                  <p className="md:text-lg text-md font-semibold text-green-900">
                    100% Money-Back Guarantee
                  </p>
                </div>
                <p className="text-sm text-green-800">
                  Cancel within 48 hours for a full refund - no questions asked
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
          <div className="relative group overflow-hidden bg-white border border-green-300 rounded-2xl p-1 shadow-[0_10px_40px_-15px_rgba(34,197,94,0.2)] hover:shadow-[0_20px_50px_-12px_rgba(34,197,94,0.3)] transition-all duration-500">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-green-50 rounded-full blur-3xl group-hover:bg-green-100 transition-colors"></div>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-green-50/50 to-white rounded-[calc(1rem-1px)] px-8 py-7">
              <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-200 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity"></div>
                  <div className="relative w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center shrink-0 transform group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                    <RefreshCcw className="h-8 w-8 text-white" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                    <ShieldCheck className="h-5 w-5 text-green-600" />
                    <span className="text-xs font-bold text-green-600 uppercase tracking-widest">
                      Verified Security
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-green-950 tracking-tight">
                    100% Money-Back{" "}
                    <span className="text-green-600">Guarantee</span>
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg mt-1 font-medium">
                    Cancel within 48 hours for a{" "}
                    <span className="text-green-900 font-bold underline decoration-green-300 underline-offset-4">
                      full refund
                    </span>{" "}
                    — no questions asked.
                  </p>
                </div>
              </div>
              <div className="shrink-0">
                <div className="flex items-center gap-2 bg-green-100/80 px-4 py-2 rounded-full border border-green-200">
                  <Zap className="h-4 w-4 text-green-700 fill-green-700" />
                  <span className="text-green-800 font-bold text-sm uppercase">
                    Instant Processing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      {/* Premium Health Trackind Features */}
      <section className="min-h-screen bg-gray-100 p-6 mt-20">
        <div className=" my-20 flex flex-col items-center justify-center px-4  text-center font-sans">
          {/* Premium Feature Badge */}
          <div className="bg-[#9b41ff] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
            Premium Feature
          </div>

          {/* Main Heading */}
          <h1 className="text-[#1a1f2c] text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Health & Wellness Tracking
          </h1>

          {/* Subtext */}
          <p className="text-[#4a5568] text-lg md:text-xl max-w-2xl leading-relaxed">
            Take care of your health while traveling with our comprehensive
            health monitoring tools
          </p>
        </div>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f0f7ff] border border-blue-300 rounded-2xl shadow-md p-8 md:p-6 flex flex-col justify-between  ">
              <div>
                <div className="flex justify-center mb-6">
                  <div className="bg-[#3b82f6] p-5 rounded-full shadow-lg shadow-blue-200">
                    <Activity className="text-white w-8 h-8" />
                  </div>
                </div>

                <h2 className="text-[#1e3a8a] text-2xl md:text-3xl font-bold text-center mb-6">
                  Blood Glucose Monitoring
                </h2>

                <div className="space-y-5 mb-6">
                  {features.map((text, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 md:text-lg leading-snug">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#dbeafe] border border-blue-300 rounded-xl py-3 px-6 text-center">
                <p className="text-[#1e40af] font-semibold text-md">
                  Perfect for travelers managing diabetes
                </p>
              </div>
            </div>

            <div className="bg-[#fff0f0] border border-red-300 rounded-2xl shadow-md p-8 md:p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-center mb-6">
                  <div className="bg-[#ef4444] p-5 rounded-full shadow-lg shadow-red-100">
                    <HeartPulse className="text-white w-8 h-8" />
                  </div>
                </div>

                <h2 className="text-[#7b1616] text-2xl md:text-3xl font-bold text-center mb-6">
                  Blood Pressure Tracking
                </h2>

                <div className="space-y-5 mb-6">
                  {Bloodfeatures.map((text, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 md:text-lg leading-snug">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#fedbdb] border border-red-300 rounded-xl py-3 px-6 text-center">
                <p className="text-[#7b1616] font-semibold text-md">
                  Stay healthy on the road with heart health monitoring
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center  bg-gray-100 ">
          {/* Main Container with Gradient Background */}
          <div className="w-full max-w-7xl bg-gradient-to-r flex flex-col items-center justify-center  from-[#9f5cf6] via-[#6f45d2] to-[#2a2c92] rounded-xl p-6 md:p-8 my-10 text-center text-white shadow-2xl">
            {/* Header Section */}
            <div className="flex items-center justify-center mb-2 gap-5">
              <Crown className="w-8 h-8 text-yellow-400" />
              <h2 className="text-2xl md:text-3xl font-bold tracking-wide ">
                Premium Health Tracking Features
              </h2>
            </div>

            {/* Description */}
            <p className="text-blue-50 text-opacity-90 max-w-3xl mx-auto mb-6 text-lg leading-relaxed">
              Access comprehensive health monitoring tools designed for
              travelers who need to stay on top of their health metrics while
              exploring the world.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 max-w-5xl ">
              {/* Card 1 */}
              <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-xl px-4 py-2 flex flex-col items-center hover:bg-opacity-20 transition-all cursor-pointer">
                <BarChart3 className="w-10 h-10 text-yellow-400 mb-1" />
                <span className="font-semibold text-lg">
                  Visual Charts & Analytics
                </span>
              </div>

              {/* Card 2 */}
              <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-xl px-4 py-2 flex flex-col items-center justify-center hover:bg-opacity-20 transition-all cursor-pointer">
                <Target className="w-10 h-10 text-yellow-400 mb-1" />
                <span className="font-semibold text-lg">
                  Personalized Health Goals
                </span>
              </div>

              {/* Card 3 */}
              <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-xl px-4 py-2  flex flex-col items-center hover:bg-opacity-20 transition-all cursor-pointer">
                <Clock className="w-10 h-10 text-yellow-400 mb-1" />
                <span className="font-semibold text-lg">
                  30-Day Trend History
                </span>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="space-y-6">
              <p className="text-yellow-400 font-medium text-lg  tracking-wider">
                Upgrade to Premium to unlock Health & Wellness features
              </p>

              <button onClick={handleDashboardClick}
               className="bg-white text-[#8b5cf6] px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-3 mx-auto hover:bg-gray-100 transition-colors shadow-lg">
                <Crown className="w-5 h-5 text-[#8b5cf6]" />
                Open Health Tracking Dashboard
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Health Trackind Features */}
      {/* <section className="min-h-screen bg-gray-100 p-6 mt-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative bg-white border border-slate-200 rounded-[2rem] p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-500 ease-in-out flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-blue-50 rounded-full blur-2xl opacity-50"></div>

              <div className="relative z-10">
               
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 p-3 rounded-2xl shadow-lg transform group-hover:-rotate-3 transition-transform">
                    <Activity className="text-white w-7 h-7" />
                  </div>
                  <h2 className="text-[#0f172a] text-xl md:text-2xl font-extrabold tracking-tight">
                    Blood Glucose{" "}
                    <span className="text-blue-600">Monitoring</span>
                  </h2>
                </div>

               
                <div className="space-y-3 mb-8">
                  {features.map((text, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-600 text-sm md:text-base font-medium leading-tight">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

             
              <div className="relative z-10">
                <div className="bg-blue-50 border border-blue-100 rounded-xl py-3 px-4 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <div className="flex items-center  gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                    <p className="text-[#1e40af] font-bold text-xs uppercase tracking-wider ">
                      Perfect for travelers managing diabetes
                    </p>
                  </div>
                </div>
              </div>
            </div>

           
            <div className="group relative bg-white border border-slate-200 rounded-[2rem] p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-500 ease-in-out flex flex-col justify-between overflow-hidden">
              
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-red-50 rounded-full blur-2xl opacity-50"></div>

              <div className="relative z-10">
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative bg-gradient-to-br from-red-500 to-rose-700 p-3 rounded-2xl shadow-lg transform group-hover:rotate-3 transition-transform">
                    <HeartPulse className="text-white w-7 h-7" />
                  </div>
                  <h2 className="text-[#0f172a] text-xl md:text-2xl font-extrabold tracking-tight">
                    Blood Pressure{" "}
                    <span className="text-red-600">Tracking</span>
                  </h2>
                </div>

                
                <div className="space-y-3 mb-8">
                  {Bloodfeatures.map((text, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-red-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-600 text-sm md:text-base font-medium leading-tight">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              
              <div className="relative z-10">
                <div className="bg-red-50 border border-red-100 rounded-xl py-3 px-4 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    <p className="text-[#7b1616] font-bold text-xs uppercase tracking-wider">
                      Heart Health First
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center mt-20">
        
          <button
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white 
        font-bold text-lg rounded-xl shadow-lg hover:scale-[1.02] 
        transition-all duration-300 ease-in-out"
          >
            Upgrade to Premium Now <span className="ml-5"> →</span>
          </button>
          <button
            className="px-8  py-4 md:mt-20 mt-10 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 
        text-white font-bold md:text-4xl text-lg rounded-xl shadow-lg hover:shadow-purple-300/50 hover:scale-[1.02] 
        transition-all duration-300 ease-in-out  w-full md:h-[120px] h-24 flex justify-center items-center"
          >
            <Crown className="text-white mr-5" size="50" />{" "}
            <span>Premium Health Trackind Features</span>
          </button>
        </div>
      </section> */}

      {/* Daily Deals Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto ">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-2 rounded-full mb-4 animate-pulse">
              <Clock className="h-5 w-5 animate-spin" />
              <span className="font-bold text-lg">Limited Time Offers</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              🔥 Today's Hot Deals
            </h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Grab these exclusive deals before they're gone! Save up to 60% on
              top destinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {isLoadingDeals
              ? // Loading skeleton
                [...Array(4)].map((_, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden border-2 border-red-200 shadow-xl bg-white animate-pulse"
                  >
                    <div className="h-48 bg-gray-200" />
                    <CardContent className="p-5 space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-3/4" />
                      <div className="h-8 bg-gray-200 rounded w-1/2" />
                      <div className="h-10 bg-gray-200 rounded" />
                    </CardContent>
                  </Card>
                ))
              : (dailyDeals || []).map((deal) => (
                  <Card
                    key={deal.id}
                    className="group overflow-hidden border-2 border-red-200 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer relative bg-white"
                  >
                    {/* Discount Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <Badge className="bg-red-600 text-white text-lg font-bold px-3 py-1 animate-bounce">
                        -{deal.discount_percentage}%
                      </Badge>
                    </div>

                    {/* Deal Tag */}
                    <div className="absolute top-3 right-3 z-10">
                      <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-2 py-1">
                        {deal.deal_tag}
                      </Badge>
                    </div>

                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={deal.image_url}
                        alt={`${deal.destination_name}, ${deal.state}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold mb-1">
                          {deal.destination_name}
                        </h3>
                        <p className="text-amber-200 text-sm">
                          {deal.state}, {deal.country}
                        </p>
                      </div>
                    </div>

                    <CardContent className="p-5">
                      {/* Countdown Timer */}
                      <div className="flex items-center justify-center space-x-2 mb-4 bg-red-50 rounded-lg py-2">
                        <Clock className="h-4 w-4 text-red-600 animate-pulse" />
                        <span className="text-red-600 font-semibold text-sm">
                          Refreshes in 30 days
                        </span>
                      </div>

                      {/* Pricing */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <div className="text-sm text-gray-500 line-through">
                              ${deal.original_price}
                            </div>
                            <div className="flex items-baseline space-x-1">
                              <span className="text-3xl font-bold text-red-600">
                                ${deal.sale_price}
                              </span>
                              <span className="text-gray-600 text-sm">
                                /night
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-green-600 font-bold text-lg">
                              Save ${deal.original_price - deal.sale_price}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <Button
                        className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold shadow-lg"
                        onClick={(e) => {
                          e.stopPropagation();
                          setLocation(
                            `${deal.destination_name}, ${deal.state}`,
                          );
                          setSearchType("hotels");
                          window.scrollTo({ top: 0, behavior: "smooth" });
                          toast({
                            title: "Deal Selected! 🔥",
                            description: `Searching for ${deal.destination_name} hotels at ${deal.discount_percentage}% off!`,
                          });
                        }}
                      >
                        Grab This Deal
                      </Button>
                    </CardContent>
                  </Card>
                ))}
          </div>

          {/* View All Deals Button */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold px-8 py-6 text-lg shadow-xl"
              onClick={() => {
                toast({
                  title: "More Deals Coming Soon!",
                  description: "We're adding more exclusive deals every day.",
                });
              }}
            >
              View All Travel Deals
              <span className="ml-2 animate-pulse">→</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Popular Hotel Destinations
            </h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Discover the world's most amazing destinations with exclusive
              hotel deals and AI-powered recommendations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "New York",
                country: "USA",
                image:
                  "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
                price: 149,
              },
              {
                name: "Paris",
                country: "France",
                image:
                  "https://images.unsplash.com/photo-1710316823695-ebeb4aa241f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
                price: 89,
              },
              {
                name: "Tokyo",
                country: "Japan",
                image:
                  "https://images.unsplash.com/photo-1756460886147-1804661e8a0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
                price: 125,
              },
              {
                name: "London",
                country: "UK",
                image:
                  "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
                price: 115,
              },
              {
                name: "Dubai",
                country: "UAE",
                image:
                  "https://images.unsplash.com/photo-1702180405069-d66650462040?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
                price: 199,
              },
              {
                name: "Rome",
                country: "Italy",
                image:
                  "https://images.unsplash.com/photo-1672391418040-cbeb98408873?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
                price: 95,
              },
            ].map((destination, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setLocation(`${destination.name}, ${destination.country}`);
                  setSearchType("hotels");
                  const element = document.querySelector(".search-section");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={`${destination.name}, ${destination.country}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">
                      {destination.name}
                    </h3>
                    <p className="text-amber-200 text-sm">
                      {destination.country}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:bg-white/20 p-2"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:bg-white/20 p-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-current text-yellow-400"
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">
                        4.8 (2.1k reviews)
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-amber-900">
                        ${destination.price}
                      </span>
                      <span className="text-gray-600">/night</span>
                    </div>
                    <Button
                      size="sm"
                      className="bg-amber-600 hover:bg-amber-700"
                      onClick={(e) => {
                        e.stopPropagation();
                        setLocation(
                          `${destination.name}, ${destination.country}`,
                        );
                        setSearchType("hotels");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      Search Hotels
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Why Choose Hotel4013?
            </h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Experience the future of travel booking with our advanced
              AI-powered features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-amber-200 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-amber-700" />
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-4">
                  AI-Powered Search
                </h3>
                <p className="text-amber-700">
                  Our intelligent algorithms find the perfect hotels and flights
                  based on your preferences and budget.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-4">
                  Best Price Guarantee
                </h3>
                <p className="text-amber-700">
                  Find a lower price elsewhere? We'll match it and give you an
                  additional 10% off.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Fingerprint className="h-8 w-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-4">
                  Secure Booking
                </h3>
                <p className="text-amber-700">
                  Book with confidence using our facial recognition security and
                  encrypted payments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HeartPulse className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-4">
                  Health and Wellness
                </h3>
                <p className="text-amber-700">
                  Stay on track with wellness-friendly stays, healthy dining
                  picks, and smart travel routines built into your trip.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-rose-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Droplet className="h-8 w-8 text-rose-700" />
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-4">
                  Diabetes (Glucose) Tracking
                </h3>
                <p className="text-amber-700">
                  Log glucose readings, get gentle reminders, and keep trends in
                  view while you travel.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sky-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Gauge className="h-8 w-8 text-sky-700" />
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-4">
                  Blood Pressure Tracking
                </h3>
                <p className="text-amber-700">
                  Track BP readings and spot patterns with quick entries and
                  clear summaries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Hotel4013Logo
                  size="sm"
                  variant="default"
                  className="text-amber-400"
                />
                <span className="text-xl font-bold">Hotel4013.com</span>
              </div>
              <p className="text-amber-300 text-sm">
                Your trusted AI-powered travel companion for finding the perfect
                hotel accommodations and flights worldwide.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-amber-300 text-sm">
                <li>
                  <Link
                    to="/"
                    className="hover:text-amber-100 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li className="font-semibold text-amber-200 pt-2">
                  Travel Options
                </li>
                <li className="pl-3">
                  <Link
                    to="/hotels"
                    className="hover:text-amber-100 transition-colors"
                  >
                    Hotels
                  </Link>
                </li>
                <li className="pl-3">
                  <Link
                    to="/flights"
                    className="hover:text-amber-100 transition-colors"
                  >
                    Flights
                  </Link>
                </li>
                <li className="pl-3">
                  <Link
                    to="/cruises"
                    className="hover:text-amber-100 transition-colors"
                  >
                    Cruises
                  </Link>
                </li>
                <li className="pt-2">
                  <Link
                    to="/search"
                    className="hover:text-amber-100 transition-colors"
                  >
                    Search
                  </Link>
                </li>
                <li>
                  <Link
                    to="/translate"
                    className="hover:text-amber-100 transition-colors"
                  >
                    Language Translation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/rewards"
                    className="hover:text-amber-100 transition-colors"
                  >
                    Loyalty Rewards
                  </Link>
                </li>
                <li>
                  <Link
                    to="/staff"
                    className="hover:text-amber-100 transition-colors"
                  >
                    Hotel Staff
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-amber-300 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-100 transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-100 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-100 transition-colors"
                  >
                    Booking Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-100 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-100 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect & Download</h3>
              <p className="text-amber-300 text-sm mb-4">
                Follow us for the latest deals and travel tips
              </p>
              <div className="space-y-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full border-amber-400 text-amber-300 hover:bg-amber-800 hover:text-amber-100"
                  asChild
                >
                  <Link to="/download" className="flex items-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>Download App</span>
                  </Link>
                </Button>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-amber-300 hover:text-amber-100 hover:bg-amber-800"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-amber-300 hover:text-amber-100 hover:bg-amber-800"
                  >
                    <HelpCircle className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-amber-800" />

          <div className="flex flex-col md:flex-row justify-between items-center text-amber-300 text-sm">
            © {currentYear} Hotel4013.com. All rights reserved. Rewards program
            terms apply.{" "}
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="flex items-center space-x-1">
                <Shield className="h-4 w-4" />
                <span>Secure Booking</span>
              </span>
              <span className="flex items-center space-x-1">
                <Globe className="h-4 w-4" />
                <span>Worldwide Coverage</span>
              </span>
              <span className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>24/7 Support</span>
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Pricing Modal */}
      <Dialog open={showPricingModal} onOpenChange={setShowPricingModal}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Choose Your Plan</DialogTitle>
            <DialogDescription>
              Select the perfect plan for your travel needs
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {subscriptionTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative ${
                  tier.popular
                    ? "border-purple-500 ring-2 ring-purple-200"
                    : "border-gray-200"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-purple-500 text-white">
                      Most Popular
                    </Badge>
                  </div>
                )}
                {tier.badge && (
                  <div className="absolute -top-3 right-4">
                    <Badge variant="secondary">{tier.badge}</Badge>
                  </div>
                )}

                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold">
                      {tier.displayPrice}
                    </div>
                    {tier.displayOriginalPrice && (
                      <div className="text-sm text-gray-500 line-through">
                        {tier.displayOriginalPrice}
                      </div>
                    )}
                    {tier.displaySavings && (
                      <div className="text-sm text-green-600 font-semibold">
                        Save {tier.displaySavings}!
                      </div>
                    )}
                    {tier.duration && (
                      <div className="text-sm text-gray-600">
                        {tier.duration}
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full"
                    variant={tier.popular ? "default" : "outline"}
                    onClick={() => {
                      setShowPricingModal(false);
                      navigate("/signup", {
                        state: {
                          selectedTier: tier.id,
                          platform: currentPlatform,
                          region: currentRegion,
                        },
                      });
                    }}
                  >
                    {tier.price === 0 ? "Get Started" : "Choose Plan"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Payment Modal */}
      <Dialog open={showPaymentModal} onOpenChange={setShowPaymentModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <CreditCard className="h-5 w-5" />
              <span>Complete Your Upgrade</span>
            </DialogTitle>
            <DialogDescription>
              {selectedTier && (
                <>
                  Upgrade to {selectedTier.name} for {selectedTier.displayPrice}
                </>
              )}
            </DialogDescription>
          </DialogHeader>

          {selectedTier && (
            <PaymentForm
              amount={selectedTier.price}
              currency="USD"
              description={`Hotel4013 ${selectedTier.name} Subscription`}
              customerEmail={user?.email || ""}
              bookingType="subscription"
              metadata={{
                tierName: selectedTier.name,
                tierId: selectedTier.id || selectedTier.name,
                platform: currentPlatform,
                region: currentRegion,
                billing: selectedTier.billing || "monthly",
              }}
              onSuccess={handlePaymentSuccess}
              onCancel={handlePaymentCancel}
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Scroll to Top Button */}
      <ScrollToTop />
      {/* Booking Success / Cancel Modal */}
      <Dialog
        open={showBookingSuccessModal}
        onOpenChange={setShowBookingSuccessModal}
      >
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {bookingStatus === "success" ? (
                <>
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Booking Successful</span>
                </>
              ) : (
                <>
                  <X className="h-5 w-5 text-red-600" />
                  <span>Payment Cancelled</span>
                </>
              )}
            </DialogTitle>
            <DialogDescription>
              {bookingStatus === "success" ? (
                <>
                  {bookingType === "hotel"
                    ? "Your hotel booking has been confirmed. Check your email for full details."
                    : "Your payment was successful. Your booking details will arrive shortly."}
                </>
              ) : (
                "Your payment was cancelled. You can start a new booking whenever you're ready."
              )}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 flex justify-end">
            <Button onClick={() => setShowBookingSuccessModal(false)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
