<template>
  <div class="nav">
    <div class="accountBalance">
Balance de votre compte : {{ accountBalance | currency }} <br>
<span v-if="isOverdraft"> Facilité de caisse restante {{ AmountOverdraft | currency }}</span>
</div>
  </div>
</template>

<script>
import currencyFilter from './currencyFilter';

export default {
  name: 'Balance',
  filters: { currency: currencyFilter },
  computed: {
    accountBalance() {
      return this.$store.state.bankAccount.balance;
    },
    isOverdraft() {
      return this.$store.state.bankAccount.decouvert;
    },
    AmountOverdraft() {
      return this.$store.state.bankAccount.decouvertAutorisé;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.accountBalance {
border: 2px, blue;
}
</style>
