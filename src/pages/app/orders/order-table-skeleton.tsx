import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { TableCell, TableRow } from "@/components/ui/table"
import { Search } from "lucide-react"

export function OrderTableSkeleton() {
    return Array.from({ length: 10}).map((_, i) => {
        return(
            <TableRow key={i}>
                <TableCell>
                    <Button disabled variant='outline' size='xs' className="cursor-pointer">
                        <Search className="h-3 w-3" />
                        <span className="sr-only">Detalhes do produto</span>
                    </Button>
                </TableCell>
                <TableCell>
                 <Skeleton className="h-4 w-[172px]" />
                </TableCell>
                <TableCell className="text-muted-foreground">
                    <Skeleton className="h-4 w-[148px]" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-[110px]" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-[200px]" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-[64px]" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-[92px]" />
                </TableCell>
                <TableCell>
                    <Skeleton className="h-4 w-[92px]" />
                </TableCell>
            </TableRow>
        )
    })
}