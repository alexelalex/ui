import { Badge } from '@/components/ui/badge'
import ui from '@/components/ui'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function Tables() {
  return (
    <ui.card title="Table Example">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>
              <Badge>Active</Badge>
            </TableCell>
            <TableCell>Developer</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane Smith</TableCell>
            <TableCell>
              <Badge variant="secondary">Offline</Badge>
            </TableCell>
            <TableCell>Designer</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </ui.card>
  )
}
