<template>
<div>
<div class="withdraw"> withdraw some money !
<label for="amount"> what is your amount ? </label>
<input v-model.number="amountWithdraw" type="number" id="amout">
<span @click="makeWithdraw" class="makeWithdraw">valider retrait</span>
<span v-if="isWithdrawUnvalid" class="withdrawUnvalid"> !! montant saisi incorrect !! </span>
</div>
<Balance/>
</div>
</template>

<script>
import Balance from './shared/Balance.vue';

export default {
  name: 'Retrait',
  components: { Balance },
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
    margin-left: auto;
    margin-right: auto;
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
    margin-right: auto;
    margin-left:auto;
    top: 100px;
}
</style>
