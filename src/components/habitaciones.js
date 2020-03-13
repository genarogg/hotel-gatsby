import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import Layout from '../components/layout';



const HabitacionTemplate = ({data: { allDatoCmsHabitacion: { nodes } }}) => {

    const { titulo, contenido, imagen } = nodes[0];

    return ( 
        <Layout>
            
        </Layout>
     );
}
 
export default HabitacionTemplate;