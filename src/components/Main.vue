

<script>
import TrustedSection from './partials/TrustedSection.vue';
import EmpoweringSection from './partials/EmpoweringSection.vue';
import StudentCitSection from './partials/StudentCitSection.vue';
import PossibilitiesSection from './partials/PossibilitiesSection.vue';
import PopularCoursesSection from './partials/PopularCoursesSection.vue';
import PricingPlansSection from './partials/PricingPlansSection.vue';
import SponsorsSection from './partials/SponsorsSection.vue';
import TopAnchor from './partials/TopAnchor.vue';


export default {
  
  name: 'Main',

  components:{
    TrustedSection,
    EmpoweringSection,
    StudentCitSection,
    PossibilitiesSection,
    PopularCoursesSection,
    PricingPlansSection,
    SponsorsSection,
    TopAnchor,
  }


}
</script>

<template>

  <main>
    <TopAnchor/>
    <TrustedSection/>
    <EmpoweringSection/>
    <StudentCitSection/>
    <PossibilitiesSection/>
    <PopularCoursesSection/>
    <PricingPlansSection/>
    <SponsorsSection/>
    
  </main>
  
  
</template>


<style lang="scss" scoped >

  main{
    position: relative;
  }
</style>