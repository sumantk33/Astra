"use client";

import * as React from "react";
import Link from "next/link";

import { Avatar, components } from "../common";
import { ThemeToggle } from "@/components/atoms/toggle-theme";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

// Todo: Handle sign in or avatar based on logged in user condition

export function NavigationDropDown() {
  return (
    <div className="flex gap-2 items-center">
      <ThemeToggle />
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center">
          <Avatar />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {components.map((item, index) => (
            <DropdownMenuItem onClick={() => ""} key={index}>
              {item.title}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Link href="/sign-in" legacyBehavior passHref>
        <Button variant="outline">Sign In</Button>
      </Link>
    </div>
  );
}
