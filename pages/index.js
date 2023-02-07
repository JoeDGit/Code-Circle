import Hero from '../components/landingPage/Hero';
import Info from '../components/landingPage/Info';
import SectionOne from '../components/landingPage/SectionOne';
import SectionTwo from '../components/landingPage/SectionTwo';
import { useAuthContext } from '../hooks/useAuthContext';
import { useRouter } from 'next/router';

export default function Home() {
  const { user } = useAuthContext();
  const router = useRouter();

  if (user) router.push('/home');

  return (
    <div>
      <Hero />
      <SectionOne />
      <Info />
      <SectionTwo />
    </div>
  );
}
