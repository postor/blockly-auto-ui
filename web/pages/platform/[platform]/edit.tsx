import { Container, Typography } from "@mui/material"
import { useParams, useSearchParams } from "react-router-dom"

export default () => {
  let [searchParams] = useSearchParams()
  let connect = searchParams.get('connect')
  return <Container>
    <Typography variant="h2" component="h1" gutterBottom>
      {connect}
    </Typography>
  </Container>
}