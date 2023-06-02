import { FaRedo, FaUndo } from "react-icons/fa"
import { Button, Row } from "./common"

interface Props {
  className?: string
}

export const HistoryNavigation = ({ className }: Props) => {
  return (
    <Row className={className}>
      <Button onClick={() => null} disabled={true}>
        <FaUndo />
      </Button>
      <Button onClick={() => null} disabled={true}>
        <FaRedo />
      </Button>
    </Row>
  )
}
