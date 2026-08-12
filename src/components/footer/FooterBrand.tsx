import { Logo } from "@/components/brand";

import { organization } from "@/config";

import { Text } from "@/components/ui";

/**
 * Footer organization identity and mission.
 */
export default function FooterBrand() {
  return (
    <div className="max-w-md">
      
      {/*<Logo variant="horizontal" size="small" linked/>*/}

      <Text
        size="base"
        tone="inverse"
        className="
          mt-5
          max-w-sm
          text-white/80
        "
      >
        {organization.goal}
      </Text>
    </div>
  );
}
