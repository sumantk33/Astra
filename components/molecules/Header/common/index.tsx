import Image from "next/image";

export function Avatar() {
  return (
    <Image
      className="inline-block rounded-full ring-2 ring-white"
      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      alt=""
      width={30}
      height={30}
    />
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
