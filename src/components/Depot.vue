<template>
<div class="deposit"> make a deposit !
<label for="amount"> what is your amount ? </label>
<input v-model.number="amountDeposited" type="number" id="amout">
<span @click="makeDeposit" class="makeDeposit">valider dépot</span>
<span v-if="isDepositUnvalid" class="depositValid"> !! montant saisi incorrect !! </span>
</div>
</template>

<script>

export default {
  name: 'Depot',
  data() {
    return {
      amountDeposited: 0,
    };
  },
  methods: {
    makeDeposit() {
      this.$store.commit('deposit', this.amountDeposited);
    },
  },
  computed: {
    isDepositUnvalid() {
      return this.$store.state.unvalidDeposit;
    },
  },
};
</script>

<style >

.depositValid {
    position:relative;
    color: red
}
.makeDeposit {
    position: relative;
    left: 5px;
    width: auto;
    color: black;
    border: 1px solid red;
    background-color: greenyellow;
    padding: 6px;
    border-radius: 60%;
    cursor:pointer;
    text-size-adjust:inherit;
}
#amout {
    text-align: center;
}
.deposit {
    position: relative;
    top: 15px;
    width: auto;
}
</style>
