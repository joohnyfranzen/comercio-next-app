import { UserProduct } from "@/@types/UserProduct";

export default class WeekProductFilter {
  private readonly weekOffset1: number;
  private readonly weekOffset2: number;

  constructor(weekOffset1: number, weekOffset2: number) {
    const today = new Date();
    this.weekOffset1 = weekOffset1;
    this.weekOffset2 = weekOffset2;
  }

  filterBetweenWeeksAgo(userProducts: UserProduct[]): UserProduct[] {
    const weekAgo1 = this.calculateWeeksAgoDate(this.weekOffset1);
    const weekAgo2 = this.calculateWeeksAgoDate(this.weekOffset2);

    return userProducts.filter((userProduct) => {
      const createdAt = userProduct.createdAt
        ? new Date(userProduct.createdAt)
        : null;
      return createdAt && createdAt >= weekAgo1 && createdAt <= weekAgo2;
    });
  }

  private calculateWeeksAgoDate(weekOffset: number): Date {
    const today = new Date();
    const weeksAgoDate = new Date(today);
    weeksAgoDate.setDate(today.getDate() - weekOffset * 7); // Multiplicar o offset por 7 para obter o número de dias

    return weeksAgoDate;
  }
}
