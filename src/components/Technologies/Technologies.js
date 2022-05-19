import React from 'react';
import { DiAws, DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
    I've worked with a range of technologies in the web development world. From backend to design.
    </SectionText>
      <List>
        <ListItem>
          <DiReact size = "5rem"/>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              React.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size = "5rem"/>
          <ListContainer>
            <ListTitle>Backend-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              Node and databases
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiAws size = "5rem"/>
          <ListContainer>
            <ListTitle>AWS</ListTitle>
            <ListParagraph>
              Experience with <br />
              Amazon Web Services
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
  </Section>
);

export default Technologies;
