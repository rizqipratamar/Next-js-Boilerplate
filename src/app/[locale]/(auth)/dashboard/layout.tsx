import { BaseTemplate } from '@/templates/BaseTemplate';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <BaseTemplate>{children}</BaseTemplate>;
}
