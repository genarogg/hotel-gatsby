import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';



const ContenidoNosotros = () => {

    const resultado = useStaticQuery(graphql`
    query {
        allDatoCmsPagina(filter: { slug: { eq: "nosotros" } }) {
              nodes {
              titulo
              contenido
              imagen {
                fluid( maxWidth: 1200 ) {
                  ...GatsbyDatoCmsFluid
                }
              }
            }
        }
      }
    `);

    
}
 
export default ContenidoNosotros;