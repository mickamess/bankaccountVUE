import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bankAccountBalance: 0,
    unvalidDeposit: false,
    unvalidWithdraw: false,
  },
  mutations: {
    deposit(state, amount) {
      if (amount >= 0) {
        state.bankAccountBalance += amount;
        state.unvalidDeposit = false;
      } if (amount < 0) {
        state.unvalidDeposit = true;
      }
    },
    withdraw(state, amount) {
      if (amount < 0) {
        state.unvalidWithdraw = true;
      } if (amount > state.bankAccountBalance) {
        state.unvalidWithdraw = true;
      } if (amount > 0 && amount <= state.bankAccountBalance) {
        state.bankAccountBalance -= amount;
        state.unvalidWithdraw = false;
      }
    },
  },
});
