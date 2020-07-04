<template>
  <div class="nav">
    <div class="accountBalance">
balance de votre compte : {{ accountBalance }} €
</div>
  </div>
</template>

<script>
export default {
  name: 'Balance',
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
