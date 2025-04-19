import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  Card,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  ArrowRight,
  BarChart,
  Users,
  LineChart,
  Lightbulb,
  Compass,
  Target,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section - enhanced with patterns and image */}
      <section className="w-full py-24 md:py-32 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 relative overflow-hidden">
        {/* Removed the dots pattern */}
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue-400 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-indigo-400 opacity-10 blur-2xl"></div>
        
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex flex-col items-start justify-center space-y-6 text-center md:text-left max-w-2xl">
              <div className="inline-flex items-center justify-center p-1 px-3 mb-2 text-sm border border-blue-200 dark:border-blue-800 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300">
                <span>Thoughtfully crafted for your career journey</span>
              </div>
              <h1 className="text-4xl font-serif font-medium tracking-tight sm:text-5xl md:text-6xl text-gray-900 dark:text-white">
                Shape Your Future{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  Career Path
                </span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed dark:text-gray-300">
                Discover your path forward with personalized career
                recommendations, thoughtful skill analysis, and carefully crafted
                career simulations.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                <Link href="/explore">
                  <Button
                    size="lg"
                    className="h-12 px-6 text-base font-medium rounded-md transition-all duration-300 shadow-sm bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600"
                  >
                    Begin Your Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/simulate">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 px-6 text-base font-medium rounded-md transition-all duration-300 border backdrop-blur-sm bg-white/50 dark:bg-gray-900/50"
                  >
                    Explore Career Simulations
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Image replaced with bg2.PNG from public folder - increased size and removed dark space */}
            <div className="relative hidden md:block w-full max-w-lg">
              <div className="relative rounded-2xl overflow-hidden border border-blue-100 dark:border-blue-800/30 shadow-xl">
                <img src="/bg2.PNG" alt="Career guidance illustration" className="w-full h-auto object-contain" />
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-amber-400/20 dark:bg-amber-400/10 rounded-full blur-md"></div>
                <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-blue-400/20 dark:bg-blue-400/10 rounded-full blur-md"></div>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent my-8 md:my-12"></div>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-6">
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">10,000+</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Career Journeys</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">95%</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Satisfaction Rate</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">150+</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Career Paths</span>
            </div>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 italic text-center mt-12">
            "The tools offered here helped me find clarity in my career path when I needed it most."
          </p>
        </div>
      </section>

      {/* Enhanced divider */}
      <div className="relative h-24 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"></div>
        <svg
          className="absolute bottom-0 w-full h-16 text-white dark:text-gray-950 fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.55,118.92,163.17,106.42,241.39,85.37Z"></path>
        </svg>
      </div>

      {/* Features Section - enhanced with patterns and visual elements */}
      <section className="w-full py-20 md:py-28 relative overflow-hidden">
        {/* Replaced the dot pattern with a subtle grid */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-amber-300 rounded-full filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-blue-300 rounded-full filter blur-3xl opacity-5"></div>
        
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-2xl mx-auto mb-20">
            <div className="w-16 h-1.5 bg-blue-600 dark:bg-blue-400 mb-4"></div>
            <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight relative">
              Thoughtfully Crafted Tools
              <span className="absolute -right-8 -top-8 text-6xl text-blue-200 dark:text-blue-900 opacity-30">✦</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Each feature has been carefully designed to provide meaningful
              insights for your career development
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-3">
            <Card className="flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300 relative p-2">
              {/* Card decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 dark:bg-blue-900/20 rounded-bl-full opacity-70"></div>
              
              <div className="p-8">
                <div className="w-16 h-16 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 relative">
                  <Compass className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-200 dark:bg-blue-700 rounded-full"></div>
                </div>
                <CardTitle className="text-2xl font-semibold mb-4">
                  Career Pathfinding
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Our carefully designed simulation tools help you explore
                  different paths with precision, revealing how each choice
                  shapes your journey.
                </CardDescription>
              </div>
              <CardFooter className="p-8 pt-0 mt-auto">
                <Link
                  href="/simulation"
                  className="text-blue-600 dark:text-blue-400 text-base font-medium inline-flex items-center group-hover:underline"
                >
                  Discover pathways <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300 relative p-2">
              {/* Card decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-100 dark:bg-amber-900/20 rounded-bl-full opacity-70"></div>
              
              <div className="p-8">
                <div className="w-16 h-16 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-6 relative">
                  <Lightbulb className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-200 dark:bg-amber-700 rounded-full"></div>
                </div>
                <CardTitle className="text-2xl font-semibold mb-4">
                  Skill Insights
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  A thoughtful analysis of your skills, revealing gaps and
                  opportunities with personalized recommendations for growth.
                </CardDescription>
              </div>
              <CardFooter className="p-8 pt-0 mt-auto">
                <Link
                  href="/skills"
                  className="text-amber-600 dark:text-amber-400 text-base font-medium inline-flex items-center group-hover:underline"
                >
                  Analyze your skills <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300 relative p-2">
              {/* Card decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-100 dark:bg-emerald-900/20 rounded-bl-full opacity-70"></div>
              
              <div className="p-8">
                <div className="w-16 h-16 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-6 relative">
                  <Target className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-200 dark:bg-emerald-700 rounded-full"></div>
                </div>
                <CardTitle className="text-2xl font-semibold mb-4">
                  Market Navigator
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Carefully curated market insights give you a clear view of
                  industry trends, helping you make informed decisions with
                  confidence.
                </CardDescription>
              </div>
              <CardFooter className="p-8 pt-0 mt-auto">
                <Link
                  href="/insights"
                  className="text-emerald-600 dark:text-emerald-400 text-base font-medium inline-flex items-center group-hover:underline"
                >
                  Explore insights <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced divider */}
      <div className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent my-12 relative">
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white dark:bg-gray-950 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center">
          <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
        </div>
      </div>

      {/* Call to Action Section - enhanced with visual elements */}
      <section className="w-full py-20 md:py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="6,3" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white/20 dark:from-blue-900/5 to-transparent"></div>
        
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex flex-col items-center md:items-start justify-center max-w-xl text-center md:text-left space-y-8"> {/* Increased max-width and spacing */}
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 dark:text-white"> {/* Increased text size */}
                Begin Your Thoughtful Career Journey
              </h2>
              <p className="text-xl dark:text-gray-300 leading-relaxed"> {/* Increased text size */}
                Join our community of professionals who have found their path
                through careful consideration and thoughtful planning.
              </p>
              <Link href="/login">
                <Button size="lg" className="mt-4 h-14 px-10 text-lg rounded-md bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600"> {/* Increased button size and padding */}
                  Start Now
                </Button>
              </Link>
              <p className="text-base text-gray-500 dark:text-gray-400"> {/* Increased text size */}
                Carefully crafted tools to help you every step of the way
              </p>
            </div>
            
            {/* Image placeholder updated to use journey.PNG */}
            <div className="relative hidden md:block w-full max-w-lg">
              <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg">
                <img 
                  src="/journey.PNG" 
                  alt="Career planning dashboard" 
                  className="w-full h-auto object-contain" 
                />
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-400/10 rounded-full blur-md"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-amber-400/10 rounded-full blur-md"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
  

    </div>
  );
}