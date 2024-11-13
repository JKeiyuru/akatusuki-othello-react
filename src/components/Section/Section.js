// src/components/Section/Section.js
import React from 'react';
import './Section.css';

const Section = ({ title, children }) => (
  <section className="section">
    <h2>{title}</h2>
    {children}
  </section>
);

export default Section;