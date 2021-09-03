import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

//Coluna de projetos mostrado nos site
const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projetos</SectionTitle>
    <GridContainer>
      {/*Informações registradas esta em ../../constants/constants */}
      {projects.map(({id, image, title, description, tags, source, visit}) => (
       <BlogCard key={id}>
         <Img src={image} />
         <TitleContent>
           <HeaderThree title>{title}</HeaderThree>
           <Hr />
         </TitleContent>
         <CardInfo>{description}</CardInfo>
         <div>
           <TitleContent>Linguagens</TitleContent>
           <TagList>
             {tags.map((tag, i) => (
               <Tag Key={i}>{tag}</Tag>
             ))}
           </TagList>
         </div>
         <UtilityList>
           <ExternalLinks href={visit}>Site</ExternalLinks>
           <ExternalLinks href={source}>Repositorio</ExternalLinks>

         </UtilityList>
       </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;