<template>
  <div class="autorisationDecouvert">
    <label for="autoriserDecouvert">
      autoriser découvert
      <input type="checkbox" v-model="decouvertOn" class="decouvert" />
    </label>
    <span class="decouvertAmount" v-if="decouvertOn === true">
      <label for="decouvertAmount"> montant du découvert autorisé :</label>
      <input v-model="setOverdraft" type="radio" value="-500" />500€
      <input v-model="setOverdraft" type="radio" value="-1000" />1 000€
    </span>
  </div>
</template>

<script>
export default {
  name: 'Administration',
  computed: {
    decouvertOn: {
      set(value) {
        this.$store.state.bankAccount.decouvert = value;
        console.log(this.$store.state.bankAccount.decouvert);
      },
      get() {
        return this.$store.state.bankAccount.decouvert;
      },
    },
    setOverdraft: {
      set(value) {
        this.$store.state.bankAccount.decouvertAutorisé = Number(value);
        console.log(Number(value));
      },
      get() {
        return this.$store.state.bankAccount.decouvertAutorisé;
      },
    },
  },
};
</script>

<style scoped>
.decouvert {
  position: relative;
  border: red solid 2px;
}
.affichage {
  position: relative;
  top: 100px;
}
</style>
