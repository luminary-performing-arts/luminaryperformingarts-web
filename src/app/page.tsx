/**
 * Root homepage.
 *
 * Homepage feature composition will be introduced during
 * Phases 4 and 5.
 */

import { Hero } from "@/features/hero";
import { MissionSection } from "@/features/mission";

/**
 * Luminary Performing Arts homepage.
 *
 * This route acts as the composition layer for homepage
 * features. Individual section implementations should live
 * within their respective feature modules.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionSection />
    </>
  );
}
