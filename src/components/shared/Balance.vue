<template>
  <div class="nav">
    <div class="accountBalance">
balance de votre compte : {{ accountBalance | currency }}
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.accountBalance {
border: 2px, blue;
}
</style>
