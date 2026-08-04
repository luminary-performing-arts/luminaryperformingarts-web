import Button from "@/src/components/ui/Button";

export default function HeroCTA() {
  return (
    <div className="flex gap-5">
      <Button href="/programs">
        Explore Programs
      </Button>

      <Button
        href="/about"
        variant="secondary"
      >
        Learn More
      </Button>
    </div>
  );
}