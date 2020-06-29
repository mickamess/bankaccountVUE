<template>
<div class="withdraw"> withdraw some money !
<label for="amount"> what is your amount ? </label>
<input v-model.number="amountWithdraw" type="number" id="amout">
<span @click="makeWithdraw" class="makeWithdraw">valider retrait</span>
<span v-if="isWithdrawUnvalid" class="withdrawUnvalid"> !! montant saisi incorrect !! </span>
</div>
</template>

<script>

export default {
  name: 'Retrait',
  data() {
    return {
      amountWithdraw: 0,
    };
  },
  methods: {
    makeWithdraw() {
      this.$store.commit('withdraw', this.amountWithdraw);
    },
  },
  computed: {
    isWithdrawUnvalid() {
      return this.$store.state.unvalidWithdraw;
    },
  },
};
</script>

<style >

.withdrawUnvalid {
    position:relative;
    color: red
}
.makeWithdraw {
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
.withdraw {
    position: relative;
    top: 40px;
}
</style>
