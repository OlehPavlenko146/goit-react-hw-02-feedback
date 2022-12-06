import PropTypes from 'prop-types';
import { SectionTitle, MainSection } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <MainSection>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </MainSection>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
