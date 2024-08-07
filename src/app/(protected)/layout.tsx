import { Navbarlayout } from "@/ui/components/NavbarLayout/NavbarLayout";
import { PropsWithChildren } from "react";

function DashboardLayout({ children }: PropsWithChildren) {
  return <Navbarlayout>{children}</Navbarlayout>;
}
export default DashboardLayout;
