import "./QuickMath.css";

import QuickMathHero from "../../components/QuickMath/QuickMathHero";
import QuickMathFeatures from "../../components/QuickMath/QuickMathFeatures";
import QuickMathCategories from "../../components/QuickMath/QuickMathCategories";
import QuickMathCTA from "../../components/QuickMath/QuickMathCTA";

import Navbar from "../../components/layout/navbar";
import Footer from "../../components/layout/footer";

export default function QuickMath() {
  return (
    <>
    <Navbar />
    <main className="quick-math-page section-padding">

      <div className="container-custom">

        <QuickMathHero />

        <QuickMathFeatures />

        <QuickMathCategories />

        <QuickMathCTA />

      </div>

    </main>
    <Footer />
    </>
  );
}