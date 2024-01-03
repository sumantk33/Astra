"use client";

import * as React from "react";
import Link from "next/link";

import { Avatar, NavProps, components } from "../common";
import { ThemeToggle } from "@/components/atoms/toggle-theme";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { If } from "@/components/atoms/If";

export function NavigationDropDown({ avatarUrl }: NavProps) {
  return (
    <div className="flex gap-2 items-center">
      <ThemeToggle />
      <If test={!!avatarUrl}>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center">
            <Avatar avatarUrl={avatarUrl} />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {components.map((item, index) => (
              <DropdownMenuItem onClick={() => ""} key={index}>
                <If test={!!item.href}>
                  <Link href={item.href || ""}>{item.title}</Link>
                </If>
                <If test={!item.href}>
                  <span onClick={item.onClick}>{item.title}</span>
                </If>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </If>

      <If test={!avatarUrl}>
        <Link href="/sign-in" legacyBehavior passHref>
          <Button variant="outline">Sign In</Button>
        </Link>
      </If>
    </div>
  );
}
