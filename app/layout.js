import Preloader from "./components/Preloader";
import "./globals.css";

export const metadata = {
  title: "ISF-SET | DSU ",
  description:
    "The Official Webpage of IETE Students Forum Page, SET - DSU. Explore all the upcoming events and view the latest announcements from the forum. Connect and see all the members of the forum from SET-DSU.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased relative">
        <Preloader>{children}</Preloader>
      </body>
    </html>
  );
}
