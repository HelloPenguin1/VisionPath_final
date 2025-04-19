"use client";

import Link from "next/link";
import Image from "next/image"; // Add this import
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Compass, Lightbulb, LineChart, User } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-gray-950/80">
      <div className="container mx-auto px-4 md:px-6 flex h-24 items-center justify-between"> {/* Changed h-20 to h-24 */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2 ml-2"> {/* Added ml-4 */}
            <Image
              src="/logo.png"
              alt="VisionPath Logo"
              width={180}
              height={48}  
              className="object-contain"
            />
          </Link>

          <div className="h-8 w-px mx-10 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div> {/* Changed h-6 to h-8 and mx-8 to mx-10 */}

          <nav className="hidden md:flex items-center space-x-10"> {/* Changed space-x-8 to space-x-10 */}
            <Link
              href="/explore"
              className={cn(
                "flex items-center text-lg transition-colors hover:text-blue-600 dark:hover:text-blue-400", /* Changed text-base to text-lg */
                isActive("/explore")
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-300"
              )}
            >
              <Compass className="w-6 h-6 mr-3" /> {/* Increased icon size and margin */}
              <span>Explore Careers</span>
            </Link>
            <Link
              href="/skills"
              className={cn(
                "flex items-center text-lg transition-colors hover:text-amber-600 dark:hover:text-amber-400", /* Changed text-base to text-lg */
                isActive("/skills")
                  ? "text-amber-600 dark:text-amber-400"
                  : "text-gray-600 dark:text-gray-300"
              )}
            >
              <Lightbulb className="w-6 h-6 mr-3" /> {/* Increased icon size and margin */}
              <span>Skill Analysis</span>
            </Link>
            <Link
              href="/simulate"
              className={cn(
                "flex items-center text-lg transition-colors hover:text-emerald-600 dark:hover:text-emerald-400", /* Changed text-base to text-lg */
                isActive("/simulate")
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-gray-600 dark:text-gray-300"
              )}
            >
              <LineChart className="w-6 h-6 mr-3" /> {/* Increased icon size and margin */}
              <span>Career Simulation</span>
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4"> {/* Changed space-x-3 to space-x-4 */}
          <Link href="/profile">
            <Button
              variant="ghost"
              className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" /* Changed text-sm to text-base */
            >
              <User className="w-5 h-5 mr-2" /> {/* Increased icon size and margin */}
              <span>Profile</span>
            </Button>
          </Link>
          <div className="h-6 w-px bg-gray-200 dark:bg-gray-800"></div> {/* Increased height */}
          <Link href="/login">
            <Button
              variant="default"
              className="text-base px-6 py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700" /* Increased text size and padding */
            >
              Join Now
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile menu button - shown on smaller screens */}
      <div className="md:hidden fixed bottom-4 inset-x-0 flex justify-center">
        <Button
          variant="default"
          className="rounded-full px-6 py-3 text-base bg-blue-600 text-white shadow-lg" /* Increased size */
        >
          Menu
        </Button>
      </div>
    </header>
  );
}
