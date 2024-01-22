import Link from 'next/link';

import { AppConfig } from '@/utils/AppConfig';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Give your online space a stylish makeover with our Website Upgrade – Because your website deserves a fresh, modern look! Enjoy a fantastic 90% off and let's make your online presence shine together!"
      subtitle="Snatch Your Bonus Immediately"
      button={
        <Link href={AppConfig.url} target="_blank">
          <Button xl>Claim a 90% Off Today</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
