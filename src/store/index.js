import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bankAccount: {
      balance: null,
      transaction: [],
      decouvert: false,
      decouvertAutorisé: null,
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
        state.unvalidDeposit = 'negativeAmount';
      }
    },
    withdraw(state, amountWithdrawn) {
      const newBalance = state.bankAccount.balance - amountWithdrawn;
      if (amountWithdrawn < 0) {
        state.unvalidWithdraw = 'negativeAmount';
      }
      if (amountWithdrawn > state.bankAccount.balance && state.bankAccount.decouvert === false) {
        state.unvalidWithdraw = 'amount>balance';
      }
      if (amountWithdrawn > state.bankAccount.balance && state.bankAccount.decouvert === true
        && newBalance < state.bankAccount.decouvertAutorisé) {
        state.unvalidWithdraw = 'notEnaughOverdraft';
        console.log(state.unvalidWithdraw);
        console.log(newBalance);
      }
      if (amountWithdrawn > state.bankAccount.balance && state.bankAccount.decouvert === true
        && newBalance >= state.bankAccount.decouvertAutorisé) {
        state.bankAccount.balance -= amountWithdrawn;
        state.unvalidWithdraw = false;
        const date = new Date();
        const detailsOfWithdraw = {
          type: 'withdraw',
          dateOfTransaction: date,
          amount: (-amountWithdrawn).toFixed(2),
        };
        state.bankAccount.transaction.push(detailsOfWithdraw);
        console.log(newBalance);
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
