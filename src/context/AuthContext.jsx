import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { supabase } from "../lib/supabase";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);

  // Subscription state
  const [subscription, setSubscription] = useState(null);
  const [isPremium, setIsPremium] = useState(false);

  const [loading, setLoading] = useState(true);

  // --------------------------------------------------
  // Fetch Examatics profile
  // --------------------------------------------------

  const fetchProfile = async (userId) => {
    if (!userId) {
      console.log("No user ID. Clearing profile.");
      setProfile(null);
      return;
    }

    console.log("Fetching profile for user:", userId);

    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();

    console.log("Profile data:", data);
    console.log("Profile error:", error);

    if (error) {
      console.error(
        "Error fetching profile:",
        error.message,
        error.code,
        error.details,
        error.hint
      );

      setProfile(null);
      return;
    }

    setProfile(data);
  };

  // --------------------------------------------------
  // Fetch subscription
  // --------------------------------------------------

  {/*const fetchSubscription = async (userId) => {
    if (!userId) {
      console.log("No user ID. Clearing subscription.");
      setSubscription(null);
      setIsPremium(false);
      return;
    }

    console.log("Fetching subscription for user:", userId);

    const { data, error } = await supabase
      .from("subscriptions")
      .select("*")
      .eq("user_id", userId)
      .maybeSingle();

    console.log("Subscription data:", data);
    console.log("Subscription error:", error);

    if (error) {
      console.error(
        "Error fetching subscription:",
        error.message,
        error.code,
        error.details,
        error.hint
      );

      setSubscription(null);
      setIsPremium(false);
      return;
    }

    setSubscription(data);

    // No subscription = free user
    if (!data) {
      setIsPremium(false);
      return;
    }

    // --------------------------------------------------
    // Determine premium access
    // --------------------------------------------------

    const premiumPlan = [
      "monthly",
      "yearly",
      "lifetime",
    ].includes(data.plan);

    const activeStatus = data.status === "active";

    let notExpired = true;

    if (
      data.plan !== "lifetime" &&
      data.expires_at
    ) {
      notExpired =
        new Date(data.expires_at) > new Date();
    }

    const premium =
      premiumPlan &&
      activeStatus &&
      notExpired;

    setIsPremium(premium);

    console.log("Premium access:", premium);
  };*/}

  const fetchSubscription = async (userId) => {
  if (!userId) {
    console.log("No user ID. Clearing subscription.");
    setSubscription(null);
    setIsPremium(false);
    return;
  }

  console.log("Fetching subscription for user:", userId);

  // Get subscription details for displaying plan information
  const { data, error } = await supabase
    .from("subscriptions")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();

  console.log("Subscription data:", data);
  console.log("Subscription error:", error);

  if (error) {
    console.error(
      "Error fetching subscription:",
      error.message,
      error.code,
      error.details,
      error.hint
    );

    setSubscription(null);
    setIsPremium(false);
    return;
  }

  setSubscription(data);

  // Ask Supabase whether this user actually has premium access.
  const {
    data: premiumAccess,
    error: premiumError,
  } = await supabase.rpc("is_user_premium", {
    check_user_id: userId,
  });

  console.log("Premium access from Supabase:", premiumAccess);
  console.log("Premium check error:", premiumError);

  if (premiumError) {
    console.error(
      "Error checking premium access:",
      premiumError.message,
      premiumError.code,
      premiumError.details,
      premiumError.hint
    );

    setIsPremium(false);
    return;
  }

  setIsPremium(Boolean(premiumAccess));
};

  // --------------------------------------------------
  // Authentication initialization
  // --------------------------------------------------

  useEffect(() => {
    let mounted = true;

    // Get existing session
    const getInitialSession = async () => {
      const { data, error } =
        await supabase.auth.getSession();

      if (error) {
        console.error(
          "Error getting session:",
          error
        );
      }

      if (mounted) {
        const currentSession =
          data?.session ?? null;

        const currentUser =
          currentSession?.user ?? null;

        setSession(currentSession);
        setUser(currentUser);

        if (currentUser) {
          await Promise.all([
            fetchProfile(currentUser.id),
            fetchSubscription(currentUser.id),
          ]);
        } else {
          setProfile(null);
          setSubscription(null);
          setIsPremium(false);
        }

        setLoading(false);
      }
    };

    getInitialSession();

    // Listen for authentication changes
    const {
      data: { subscription: authSubscription },
    } = supabase.auth.onAuthStateChange(
      async (event, newSession) => {
        const newUser =
          newSession?.user ?? null;

        setSession(newSession);
        setUser(newUser);

        if (newUser) {
          await Promise.all([
            fetchProfile(newUser.id),
            fetchSubscription(newUser.id),
          ]);
        } else {
          setProfile(null);
          setSubscription(null);
          setIsPremium(false);
        }
      }
    );

    return () => {
      mounted = false;
      authSubscription.unsubscribe();
    };
  }, []);

  // --------------------------------------------------
  // Sign Up
  // --------------------------------------------------

  const signUp = async (
    email,
    password,
    fullName
  ) => {
    return await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/`,
        data: {
          full_name: fullName,
        },
      },
    });
  };

  // --------------------------------------------------
  // Sign In
  // --------------------------------------------------

  const signIn = async (
    email,
    password
  ) => {
    return await supabase.auth.signInWithPassword({
      email,
      password,
    });
  };

  // --------------------------------------------------
  // Sign Out
  // --------------------------------------------------

  const signOut = async () => {
    const result =
      await supabase.auth.signOut();

    if (!result.error) {
      setUser(null);
      setSession(null);
      setProfile(null);
      setSubscription(null);
      setIsPremium(false);
    }

    return result;
  };

  // --------------------------------------------------
  // Context value
  // --------------------------------------------------

  const value = {
    user,
    session,
    profile,

    subscription,
    isPremium,

    loading,

    signUp,
    signIn,
    signOut,

    fetchProfile,
    fetchSubscription,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside an AuthProvider"
    );
  }

  return context;
}