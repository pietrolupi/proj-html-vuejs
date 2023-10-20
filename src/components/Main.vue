

<script>
import TrustedSection from './partials/TrustedSection.vue';
import EmpoweringSection from './partials/EmpoweringSection.vue';
import StudentCitSection from './partials/StudentCitSection.vue';
import PossibilitiesSection from './partials/PossibilitiesSection.vue';

export default {
  
  name: 'Main',

  components:{
    TrustedSection,
    EmpoweringSection,
    StudentCitSection,
    PossibilitiesSection
  }


}
</script>

<template>
  
  <TrustedSection/>
  <EmpoweringSection/>
  <StudentCitSection/>
  <PossibilitiesSection/>

</template>


<style lang="scss" scoped >

</style>