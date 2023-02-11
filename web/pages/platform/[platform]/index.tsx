import { Container, Typography } from "@mui/material"
import { Fragment } from "react"
import { NavLink } from "react-router-dom"
import { CheckAdbUpdate } from "../../../components/CheckAdbUpdate"

export default function Index() {
  return <Container>
    <Typography variant="h2" component="h1" gutterBottom>
      Android
    </Typography>
    <CheckAdbUpdate />
  </Container>
}