import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Build your SaaS{" "}
            <span className="text-primary">faster than ever</span>
          </h1>
          <p className="max-w-lg text-lg text-muted-foreground">
            The all-in-one platform to launch, manage, and scale your SaaS
            product. Stop reinventing the wheel and focus on what makes your
            product unique.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/signup">Get Started Free</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="aspect-square rounded-2xl bg-muted" />
        </div>
      </div>
    </section>
  )
}
