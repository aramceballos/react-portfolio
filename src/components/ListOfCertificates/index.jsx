import React from 'react';
import { PdfMediaCard } from '../PdfCard/index.jsx';

export const ListOfCertificatesComponent = ({ certificates = [] }) => {
  return (
    <>
      {certificates.map((certificate) => (
        <PdfMediaCard key={certificate._id} {...certificate} />
      ))}
    </>
  );
};
