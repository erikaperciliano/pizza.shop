import { api } from "@/lib/axios";

export interface GetdayOrdersAmountResponse {
    amount: number
    diffFromYesterday: number
}

export async function getDayOrdersAmount() {
    const response = await api.get<GetdayOrdersAmountResponse>('/metrics/day-orders-amount')

    return response.data
}