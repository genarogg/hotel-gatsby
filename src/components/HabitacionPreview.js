import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';


const HabitacionPreview = ({habitacion}) => {

    const { contenido, imagen, titulo, slug } = habitacion;

    return ( 
        <div
            css={css`
                border: 1px solid #e1e1e1;
                margin-bottom: 2rem;
            `}
        >
            <Image
                fluid={imagen.fluid}
            />
            <div
                css={css`
                    padding: 3rem;
                `}
            >
                <h3
                    css={css`
                        font-size: 3rem;
                    `}
                >{titulo}</h3>
                <p>{contenido}</p>

                <Boton to={slug}>Ver Habitación</Boton>
            </div>
        </div>
     );
}
 
export default HabitacionPreview;