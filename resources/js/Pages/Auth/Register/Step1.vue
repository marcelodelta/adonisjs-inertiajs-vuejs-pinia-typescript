<script setup>
import WizardV1Navigation from "../../../Components/Partials/WizardV1Navigation.vue";
import VProgress from "../../../Components/Base/VProgress.vue";
// import { useWizard } from '../../../Stores/wizard'
//
// const wizard = useWizard()
// console.log(wizard)
//
// wizard.setStep({
//   number: 1,
// })


</script>

<template>
  <div class="minimal-wrapper">
    <!--Wizard Navbar-->
    <WizardV1Navigation :title="'Titulo'" />

    <!--Wizard Progress Bar-->
    <VProgress
      id="wizard-progress"
      class="wizard-progress"
      color="primary"
      size="smaller"
      :value="(1 / 8) * 100"
      :max="100"
    />

<!--    &lt;!&ndash;Main Wrapper&ndash;&gt;-->
<!--    <form class="wizard-v1-wrapper" @submit.prevent="() => wizard?.validateStepFn()">-->

<!--      <div id="wizard-step-0" class="inner-wrapper is-active">-->
<!--        <div class="step-content">-->
<!--          <div class="step-title">-->
<!--            <h2 class="dark-inverted">Select a project type</h2>-->
<!--          </div>-->

<!--          <div class="wizard-types">-->
<!--            <div class="columns">-->
<!--              <div class="column is-4">-->
<!--                <div class="wizard-card">-->
<!--                  <img src="/@src/assets/illustrations/wizard/type-1.svg" alt="" />-->
<!--                  <h3 class="dark-inverted">UI/UX Design</h3>-->
<!--                  <p>Some short explanation about the type goes here.</p>-->
<!--                  <div class="button-wrap">-->
<!--                    <VButton-->
<!--                      color="primary"-->
<!--                      class="type-select-button"-->
<!--                      rounded-->
<!--                      elevated-->
<!--                      bold-->
<!--                      @click="validateStep('UI/UX Design')"-->
<!--                    >-->
<!--                      Continue-->
<!--                    </VButton>-->
<!--                  </div>-->
<!--                  <div class="learn-more-link">-->
<!--                    <a href="#" class="dark-inverted-hover">Or Learn More</a>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="column is-4">-->
<!--                <div class="wizard-card">-->
<!--                  <img src="/@src/assets/illustrations/wizard/type-2.svg" alt="" />-->
<!--                  <h3 class="dark-inverted">Web Development</h3>-->
<!--                  <p>Some short explanation about the type goes here.</p>-->
<!--                  <div class="button-wrap">-->
<!--                    <VButton-->
<!--                      color="primary"-->
<!--                      class="type-select-button"-->
<!--                      rounded-->
<!--                      elevated-->
<!--                      bold-->
<!--                      @click="validateStep('Web Development')"-->
<!--                    >-->
<!--                      Continue-->
<!--                    </VButton>-->
<!--                  </div>-->
<!--                  <div class="learn-more-link">-->
<!--                    <a href="#" class="dark-inverted-hover">Or Learn More</a>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="column is-4">-->
<!--                <div class="wizard-card">-->
<!--                  <img src="/@src/assets/illustrations/wizard/type-3.svg" alt="" />-->
<!--                  <h3 class="dark-inverted">Marketing</h3>-->
<!--                  <p>Some short explanation about the type goes here.</p>-->
<!--                  <div class="button-wrap">-->
<!--                    <VButton-->
<!--                      color="primary"-->
<!--                      class="type-select-button"-->
<!--                      rounded-->
<!--                      elevated-->
<!--                      bold-->
<!--                      @click="validateStep('Marketing')"-->
<!--                    >-->
<!--                      Continue-->
<!--                    </VButton>-->
<!--                  </div>-->
<!--                  <div class="learn-more-link">-->
<!--                    <a href="#" class="dark-inverted-hover">Or Learn More</a>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--      &lt;!&ndash;Wizard Navigation Buttons&ndash;&gt;-->
<!--      <div class="wizard-buttons" :class="[wizard.canNavigate && 'is-active']">-->
<!--        <div class="wizard-buttons-inner">-->
<!--          <VButton-->
<!--            class="wizard-button-previous"-->
<!--            :disabled="wizard.previousStepFn === null"-->
<!--            :color="wizard.previousStepFn === null ? 'light' : 'primary'"-->
<!--            bold-->
<!--            elevated-->
<!--            @click="() => wizard?.previousStepFn()"-->
<!--          >-->
<!--            Previous-->
<!--          </VButton>-->
<!--          <VButton-->
<!--            type="submit"-->
<!--            class="wizard-button-previous"-->
<!--            :disabled="wizard.validateStepFn === null"-->
<!--            :color="wizard.validateStepFn === null ? 'light' : 'primary'"-->
<!--            bold-->
<!--            elevated-->
<!--          >-->
<!--            Validate-->
<!--          </VButton>-->
<!--        </div>-->
<!--      </div>-->
<!--    </form>-->
  </div>
</template>

<style scoped>

</style>
