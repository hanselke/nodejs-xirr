declare module 'xirr' {
    type XIRR = {
      amount: string,
      when: number
    }
    export function xirr(transactions: XIRR[], options: any): number;
  }