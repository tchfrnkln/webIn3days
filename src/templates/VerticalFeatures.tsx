import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="It's Time for an Upgrade"
    description="In today's digital age, having a strong online presence is non-negotiable. Your website is your 24/7 storefront, always ready to showcase your products or services. It's not just a website; it's your digital identity, and we're here to help you craft it."
  >
    <VerticalFeatureRow
      title="Because of Your Customers"
      description="An Upgrade makes you Stand out from the crowd by creating a smooth and engaging experience that not only makes things easy for them, also builds trust and showcases what makes your brand truly special, setting you apart from the competition."
      image="/assets/images/feature.svg"
      imageAlt="websiteIn3days feature 1"
    />
    <VerticalFeatureRow
      title="Because of Your Revenue"
      description="An Upgrade would make a big difference in revenue, because It gets your brand out there, connects you with people globally, and opens up fresh opportunities to attract and keep customers. Imagine the Power and Ability you can now Control"
      image="/assets/images/feature2.svg"
      imageAlt="websiteIn3days feature 2"
      reverse
    />
    <VerticalFeatureRow
      title="Because of Your Brand"
      description="Think of your website like a beacon in a crowded marketplace. When people search for something related to your business, a well-optimized website that shows up at the top is like a trustworthy guide saying, 'Hey, I know what you're looking for, and I'm the go-to place for it."
      image="/assets/images/feature3.svg"
      imageAlt="websiteIn3days feature 3"
    />
  </Section>
);

export { VerticalFeatures };
