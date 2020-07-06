import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bankAccount: {
      balance: null,
      transaction: [],
    },
    unvalidDeposit: false,
    unvalidWithdraw: false,
  },
  mutations: {
    deposit(state, amountDeposited) {
      if (amountDeposited >= 0) {
        const date = new Date();
        const detailsOfDeposit = {
          type: 'deposit',
          dateOfTransaction: date,
          amount: amountDeposited.toFixed(2),
        };
        state.bankAccount.transaction.push(detailsOfDeposit);
        state.bankAccount.balance += amountDeposited;
        state.unvalidDeposit = false;
        console.log(state.bankAccount.transaction);
      }
      if (amountDeposited < 0) {
        state.unvalidDeposit = true;
      }
    },
    withdraw(state, amountWithdrawn) {
      if (amountWithdrawn < 0) {
        state.unvalidWithdraw = true;
      }
      if (amountWithdrawn > state.bankAccount.balance) {
        state.unvalidWithdraw = true;
      }
      if (amountWithdrawn > 0 && amountWithdrawn <= state.bankAccount.balance) {
        state.bankAccount.balance -= amountWithdrawn;
        state.unvalidWithdraw = false;
        const date = new Date();
        const detailsOfWithdraw = {
          type: 'withdraw',
          dateOfTransaction: date,
          amount: (-amountWithdrawn).toFixed(2),
        };
        state.bankAccount.transaction.push(detailsOfWithdraw);
        console.log(state.bankAccount.transaction);
      }
    },
    balance(state) {
      const reducer = (accumulator, currentValue) => accumulator + currentValue.amount;
      const balance = state.bankAccount.transaction.reduce(reducer, 0);
      console.log(balance);
      state.bankAccount.balance = balance;
    },
  },
});
