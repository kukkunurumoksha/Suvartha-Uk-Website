import SuvarthaPartnership from '@/components/suvartha/SuvarthaPartnership';
import SuvarthaHeader from '@/components/suvartha/SuvarthaHeader';
import SuvarthaFooter from '@/components/suvartha/SuvarthaFooter';

export const metadata = {
  title: "Partnership - Suvartha Ministries UK",
  description: "Partner with Suvartha Ministries UK and support our ministry work and community outreach programs.",
};

export default function PartnershipPage() {
  return (
    <div className="min-h-screen">
      <SuvarthaHeader />
      <SuvarthaPartnership />
      <SuvarthaFooter />
    </div>
  );
}