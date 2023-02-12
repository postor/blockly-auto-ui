import { Container, Typography } from "@mui/material"
import { useSearchParams } from "react-router-dom"
import { BlocklyWorkspace } from 'react-blockly'
import { useState } from "react"

export default () => {
  let [searchParams] = useSearchParams()
  let device = searchParams.get('device')
  let [xml,setXml] = useState('')
  return <Container>
    <Typography variant="h2" component="h1" gutterBottom>
      {device}
    </Typography>
    <BlocklyWorkspace
      className="width-100" // you can use whatever classes are appropriate for your app's CSS
      toolboxConfiguration={getToolBoxCfg()} // this must be a JSON toolbox definition
      initialXml={xml}
      onXmlChange={setXml}
    />

  </Container>
}

function getToolBoxCfg(){
  return {
    kind: "categoryToolbox",
    contents: [
      {
        kind: "category",
        name: "Logic",
        colour: "#5C81A6",
        contents: [
          {
            kind: "block",
            type: "controls_if",
          },
          {
            kind: "block",
            type: "logic_compare",
          },
        ],
      },
      {
        kind: "category",
        name: "Math",
        colour: "#5CA65C",
        contents: [
          {
            kind: "block",
            type: "math_round",
          },
          {
            kind: "block",
            type: "math_number",
          },
        ],
      },
      // {
      //   kind: "category",
      //   name: "Custom",
      //   colour: "#5CA699",
      //   contents: [
      //     {
      //       kind: "block",
      //       type: "new_boundary_function",
      //     },
      //     {
      //       kind: "block",
      //       type: "return",
      //     },
      //   ],
      // },
    ],
  }
}