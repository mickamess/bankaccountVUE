<template>
<div>
<div class="withdraw"> retirer de l'argent :
<label for="amount"> Quel montant souhaitez-vous retirer ? </label>
<input v-model.number="amountWithdraw" type="number" id="amout">
<span @click="makeWithdraw" class="makeWithdraw">valider retrait</span>
</div>
<Balance/>
<div>
<span v-if="isWithdrawUnvalid === 'negativeAmount'" class="negativeAmount">
   !! Vous avez entré un montant négatif !! </span>
<span v-if="isWithdrawUnvalid === 'amount>balance'" class="amountSupBalance">
   !! Vous n'avez pas assez d'argent sur le compte !! Faites un dépot ou autorisez le découvert :
   <Administration/>
</span>
<span v-if="isWithdrawUnvalid === 'notEnaughOverdraft'" class="notEnaughOverdraft">
   !! Votre facilité de caisse est insuffisante !! Faites un dépot ou augmenter le découvert :
   <Administration/>
</span>
</div>
</div>
</template>

<script>
import Balance from './shared/Balance.vue';
import Administration from './Administration.vue';

export default {
  name: 'Retrait',
  components: { Balance, Administration },
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
.negativeAmount {
    position: relative;
    margin-right: auto;
    margin-left: auto;
    width: 50em;
    top: 100px;
    color: red;
}
.amountSupBalance {
    position: relative;
    margin-right: auto;
    margin-left: auto;
    width: 50em;
    top: 100px;
    color: red;
}
.notEnaughOverdraft {
      position: relative;
    margin-right: auto;
    margin-left: auto;
    width: 50em;
    top: 100px;
    color: red;
}
</style>
