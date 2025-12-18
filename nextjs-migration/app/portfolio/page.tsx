import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio - Pro Fit Bathroom and Kitchen",
  description: "Explore our bathroom and kitchen renovation portfolio",
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
