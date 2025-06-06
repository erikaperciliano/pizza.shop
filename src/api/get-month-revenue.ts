import { api } from "@/lib/axios";

export interface GetMonthRevenueOrdersAmountResponse {
    receipt: number
    diffFromLastMonth: number
}

export async function getMonthRevenueOrdersAmount() {
    const response = await api.get<GetMonthRevenueOrdersAmountResponse>('/metrics/month-receipt')

    return response.data
}