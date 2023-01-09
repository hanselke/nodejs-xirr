declare module 'xirr' {
    type XIRR = {
      amount: number,
      when: number
    }
    export function xirr(transactions: XIRR[], options: any): number;
  }