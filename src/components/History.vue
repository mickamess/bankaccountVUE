<template>
<div>
    <table class="history">
        <thead>
            <tr>
                <td class="tableTitle">date de l'operation</td>
                <td class="tableTitle">type d'operation</td>
                <td class="tableTitle">montant</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(operation, index) in transaction" :key="index">
                <td class="operationDate">
                    {{ operation.dateOfTransaction | date }}
                </td>
                <td class="operationType">
                    {{ operation.type }}
                </td>
                <td class="operationAmount">
                    {{ operation.amount | currency }}
                </td>

            </tr>
        </tbody>
    </table>
    <div class="displayBalance">
    <balance/>
    </div>
</div>
</template>

<script>
import Balance from './shared/Balance.vue';
import dateFormat from './shared/dateFormat';
import currencyFilter from './shared/currencyFilter';

export default {
  name: 'History',
  filters: {
    currency: currencyFilter,
    date: dateFormat,
  },
  components: { Balance },
  computed: {
    transaction() {
      return this.$store.state.bankAccount.transaction;
    },
  },
};
</script>
<style scoped>
  .displayBalance {
      position: absolute;
      right: 140px;
  }
  .history {
      border: solid 2px black;
      margin-right: auto;
      margin-left: auto;
      margin-top: 100px;
      width: 1000px;
  }
  .tableTitle {
      text-align: center;
      font-weight: bold;
  }
  .operationDate, .operationType, .operationAmount {
    padding: 5px;
    border-bottom: solid 1px grey;
  }
  .operationDate {
    text-align: center;
    padding: 5px;
  }
  .operationType {
    text-align: center;
  }
  .operationAmount {
    margin-top: 50px;
    color: red;
  }
</style>
