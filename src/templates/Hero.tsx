import Link from 'next/link';

import { AppConfig } from '@/utils/AppConfig';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <Link href={AppConfig.url} target="_blank">
          <Button>Learn More</Button>
        </Link>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'A Modern Website Upgrade for\n'}
            <span className="text-primary-500">Small Businesses</span>
          </>
        }
        // description="The easiest way to build a React landing page in seconds."
        description={AppConfig.title}
        button={
          <Link href={AppConfig.url} target="_blank">
            <Button xl>Limited Time Offer</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
