<template>
    <table class="history">
        <thead>
            <tr>
                <th class="tableTitle">Historique des opérations</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(operation, index) in transaction" :key="index">
                <td class="operationDate">
                    {{ operation.dateOfTransaction }}
                </td>
                <td class="operationType">
                    {{ operation.type}}
                </td>
                <td class="operationAmount">
                    {{ operation.amount}} €
                </td>

            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
  name: 'History',
  computed: {
    transaction() {
      return this.$store.state.bankAccount.transaction;
    },
  },
};
</script>
<style scoped>
  .history {
      border: solid 2px black;
      margin-right: auto;
      margin-left: auto;
      margin-top: 100px;
      width: 1000px;
  }
  .tableTitle {
      text-align: center;
      width: 300px;
      width: 500px;
  }
  .operationDate, .operationType, .operationAmount {
    padding: 5px;
    border-bottom: solid 1px grey;
  }
  .operationDate {
    text-align: left;
    padding: 5px;
    width: 150px;
  }
  .operationType {
    text-align: center;
  }
  .operationAmount {
    margin-top: 50px;
    color: red;
  }
</style>
