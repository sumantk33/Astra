import {
  Avatar as AvatarUi,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { signOut } from "next-auth/react";

export type NavProps = {
  avatarUrl: string | null;
};

export function Avatar({ avatarUrl }: NavProps) {
  return (
    <AvatarUi>
      <AvatarImage src={avatarUrl || "https://github.com/shadcn.png"} />
      <AvatarFallback>Hi</AvatarFallback>
    </AvatarUi>
  );
}

export const components: {
  title: string;
  href?: string;
  onClick?: () => void;
}[] = [
  {
    title: "Create blog",
    href: "/user/create",
  },
  {
    title: "My blogs",
    href: "/user/my-blogs",
  },
  {
    title: "Logout",
    onClick: signOut,
  },
];
