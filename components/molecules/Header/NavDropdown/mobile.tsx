import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, NavProps, components } from "../common";
import Link from "next/link";
import { ThemeToggle } from "@/components/atoms/toggle-theme";
import { If } from "@/components/atoms/If";

export function NavigationDropDownMobile({ avatarUrl }: NavProps) {
  return (
    <div className="flex gap-3">
      <ThemeToggle />
      <If test={!!avatarUrl}>
        <Sheet>
          <SheetTrigger asChild>
            <>
              <Button variant="outline" asChild>
                <Avatar avatarUrl={avatarUrl} />
              </Button>
            </>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col">
              {components.map((component, index) => (
                // Todo: Update logout functionality
                <Button variant="link" key={index} asChild>
                  <Link href={component.href || ""} className="text-md">
                    {component.title}
                  </Link>
                </Button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </If>
      <If test={!avatarUrl}>
        <Link href="/sign-in" legacyBehavior passHref>
          <Button variant="outline">Sign In</Button>
        </Link>
      </If>
    </div>
  );
}
