import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, components } from "../common";
import Link from "next/link";

export function NavigationDropDownMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" asChild>
          <Avatar />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col">
          {components.map((component, index) => (
            <Button variant="link" key={index} asChild>
              <Link href={component.href} className="text-md">
                {component.title}
              </Link>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
