import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row noppadding>
    <LeftSection>
      <SectionTitle main center>
        Hello! <br />
        My name is Raúl Garza
      </SectionTitle>
      <SectionText>
        I am...
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}> Learn More </Button>
    </LeftSection>
  </Section>
);

export default Hero;