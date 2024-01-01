import Image from "next/image";
import {
  Avatar as AvatarUi,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export function Avatar() {
  return (
    <AvatarUi>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </AvatarUi>
  );
}

export const components: {
  title: string;
  href: string;
  description?: string;
}[] = [
  {
    title: "Create blog",
    href: "/user/create",
    description: "In a mood to write something?",
  },
  {
    title: "My blogs",
    href: "/user/my-blogs",
    description: "Handle all the blogs that you've created.",
  },
  {
    title: "Logout",
    href: "/user/logout",
  },
];
