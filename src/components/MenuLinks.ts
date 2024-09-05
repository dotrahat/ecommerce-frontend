type MenuLinkProps = { title: string; href: string; description: string };

const shop: MenuLinkProps[] = [
  {
    title: "Product Page",
    href: "/product/1",
    description:
      "Detailed view of a product including images, description, and reviews.",
  },
  {
    title: "Category Page",
    href: "/category/:categoryId",
    description:
      "A collection of products grouped by category for easier browsing.",
  },
  {
    title: "Cart",
    href: "/cart",
    description:
      "Shows the products added to the cart and allows users to update quantities or remove items.",
  },
  {
    title: "Checkout",
    href: "/checkout",
    description:
      "Secure checkout page where users can enter shipping and payment details.",
  },
  {
    title: "Order Confirmation",
    href: "/order-confirmation",
    description: "Displays the confirmation details of a completed order.",
  },
];
const pages: MenuLinkProps[] = [
  {
    title: "About",
    href: "/about",
    description:
      "Detailed view of a product including images, description, and reviews.",
  },
  {
    title: "Contact",
    href: "/contact",
    description:
      "A collection of products grouped by category for easier browsing.",
  },
  {
    title: "Blog",
    href: "/blog",
    description:
      "A collection of products grouped by category for easier browsing.",
  },
  {
    title: "Single Blog Post",
    href: "/blog/1",
    description:
      "A collection of products grouped by category for easier browsing.",
  },
];

export { pages, shop };
