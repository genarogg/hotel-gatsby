import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"


const ContenidoInicio = () => {
  const informacion = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "inicio" } }) {
        nodes {
          titulo
          contenido
          imagen {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  const { titulo, contenido, imgen } = informacion.allDatoCmsPagina.nodes[0]
  return (
    <>
      <h2>titulo</h2>
      <div>
        <p>{contenido}</p>
        <Image fluid={imagen.fluid} />
      </div>
    </>
  )
}

export default ContenidoInicio
