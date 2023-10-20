

<script>
import TrustedSection from './partials/TrustedSection.vue';
import EmpoweringSection from './partials/EmpoweringSection.vue';
import StudentCitSection from './partials/StudentCitSection.vue';

export default {
  
  name: 'Main',

  components:{
    TrustedSection,
    EmpoweringSection,
    StudentCitSection
  }


}
</script>

<template>
  
  <TrustedSection/>
  <EmpoweringSection/>
  <StudentCitSection/>

</template>


<style lang="scss" scoped >

</style>