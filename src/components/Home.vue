<template>
        <div>
        <span class="welcome">
            Bienvenue sur votre compte bancaire. Personnalisez votre compte :
        </span>
        <div class="administration"><Administration/></div>
        </div>

</template>

<script>
import Administration from './Administration.vue';

export default {
  name: 'Home',
  components: { Administration },
};
</script>

<style scoped>

.administration {
  position: relative;
}
</style>
