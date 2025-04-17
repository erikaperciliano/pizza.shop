import { getMonthRevenueOrdersAmount } from "@/api/get-month-revenue";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { DollarSign } from "lucide-react";

export function MonthRevenueCard() {
    const { data: monthRevenue } = useQuery({
        queryFn: getMonthRevenueOrdersAmount,
        queryKey: ['metrics', 'month-revenue']
    });

    const receipt = typeof monthRevenue?.receipt === 'number' ? monthRevenue.receipt / 100 : null;
    const diff = typeof monthRevenue?.diffFromLastMonth === 'number' ? monthRevenue.diffFromLastMonth : null;
    const isPositive = diff !== null && diff >= 0;

    return (
        <Card>
            <CardHeader className="flex items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-semibold">Receita total (mês)</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="space-y-1">
                <span className="text-2xl font-bold tracking-tight">
                    {receipt !== null
                        ? receipt.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        })
                        : '—'}
                </span>
                {diff !== null && (
                    <p className="text-xs text-muted-foreground">
                        <span className={isPositive
                            ? "text-emerald-500 dark:text-emerald-400"
                            : "text-rose-500 dark:text-rose-400"}>
                            {isPositive ? `+${diff}` : `${diff}`}%
                        </span>{' '}
                        em relação ao mês passado
                    </p>
                )}
            </CardContent>
        </Card>
    );
}
