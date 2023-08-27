<script setup></script>

<template>
  <div class="auth-wrapper">
    <div>
      <div class="signup-nav">
        <div class="signup-nav-inner">
          <a href="/" class="">
            <img src="/img/logo.png" />
          </a>
        </div>
      </div>
      <div id="vuero-signup" class="signup-wrapper">
        <div class="signup-steps is-hidden">
          <div class="steps-container">
            <div class="step-icon is-active is-inactive">
              <div class="inner">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  data-icon="feather:user"
                  class="iconify iconify--feather"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </g>
                </svg>
              </div>
              <span class="step-label">Perfil</span>
            </div>
            <div class="step-icon is-inactive">
              <div class="inner">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  data-icon="feather:shield"
                  class="iconify iconify--feather"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 22s8-4 8-10V5l-8-3l-8 3v7c0 6 8 10 8 10z"
                  ></path>
                </svg>
              </div>
              <span class="step-label">Conta</span>
            </div>
            <div class="step-icon is-inactive">
              <div class="inner">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  data-icon="feather:check"
                  class="iconify iconify--feather"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 6L9 17l-5-5"
                  ></path>
                </svg>
              </div>
              <span class="step-label">Done</span>
            </div>
            <progress class="progress" max="2" value="0">25%</progress>
          </div>
        </div>
        <img class="card-bg" src="/img/vuero-signup.webp" alt="" />
        <div class="hero is-fullheight">
          <div class="hero-body">
            <div class="container">
              <div class="columns signup-columns">
                <div class="column is-4 is-offset-1">
                  <h1 id="main-signup-title" class="title is-3 signup-title">
                    Bem vindo ao Delivrio
                  </h1>
                  <h2
                    id="main-signup-subtitle"
                    class="subtitle signup-subtitle"
                  >
                    E simplesmente junte-se a uma experiência inigualável.
                  </h2>
                  <div class="signup-card">
                    <form
                      class="signup-form is-mobile-spaced"
                      data-gtm-form-interact-id="0"
                    >
                      <div class="columns is-multiline">
                        <div class="column is-6">
                          <div class="field">
                            <div data-v-c160acf4="" class="control">
                              <input
                                id="v-field-7"
                                class="input v-input"
                                name="v-field-7"
                                true-value="true"
                                false-value="false"
                                type="text"
                                autocomplete="given-name"
                              /><label
                                class="auth-label"
                                for="v-field-7"
                                role="button"
                                tabindex="0"
                                >Nome</label
                              ><!----><!---->
                            </div>
                          </div>
                        </div>
                        <div class="column is-6">
                          <div class="field">
                            <div data-v-c160acf4="" class="control">
                              <input
                                id="v-field-8"
                                class="input v-input"
                                name="v-field-8"
                                true-value="true"
                                false-value="false"
                                type="text"
                                autocomplete="family-name"
                              /><label
                                class="auth-label"
                                for="v-field-8"
                                role="button"
                                tabindex="0"
                                >Sobrenome</label
                              ><!----><!---->
                            </div>
                          </div>
                        </div>
                        <div class="column is-12">
                          <div class="field">
                            <div data-v-c160acf4="" class="control">
                              <input
                                id="v-field-9"
                                class="input v-input"
                                name="v-field-9"
                                true-value="true"
                                false-value="false"
                                type="text"
                                autocomplete="email"
                              /><label
                                class="auth-label"
                                for="v-field-9"
                                role="button"
                                tabindex="0"
                                >Email</label
                              ><!----><!---->
                            </div>
                          </div>
                        </div>
                        <div class="column is-12">
                          <div class="signup-type">
                            <div class="box-wrap">
                              <input
                                type="radio"
                                name="signup_type"
                                checked=""
                                data-gtm-form-interact-field-id="1"
                              />
                              <div class="signup-box">
                                <i
                                  aria-hidden="true"
                                  class="lnil lnil-coffee-cup"
                                ></i>
                                <div class="meta">
                                  <span>Restaurante</span
                                  ><span>Vamos começar</span>
                                </div>
                              </div>
                            </div>
                            <div class="box-wrap">
                              <input
                                type="radio"
                                name="signup_type"
                                data-gtm-form-interact-field-id="0"
                              />
                              <div class="signup-box">
                                <i
                                  aria-hidden="true"
                                  class="lnil lnil-cart"
                                ></i>
                                <div class="meta">
                                  <span>Mercado</span><span>Vamos começar</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="control is-agree">
                        <span>
                          Ao continuar você concorda com nossos
                          <a href="#">Termos</a> e <a href="#">Privacidade</a>
                        </span>
                      </div>
                      <div class="button-wrap has-help">
                        <button
                          type="button"
                          aria-hidden="false"
                          class="button button v-button is-rounded is-bold is-big is-fullwidth is-primary"
                        >
                          <span> Continuar </span></button
                        ><span> </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="columns signup-columns is-hidden">
                <form class="column is-8">
                  <div class="signup-profile-wrapper">
                    <h1 class="title is-5 signup-title has-text-centered">
                      Add a profile picture
                    </h1>
                    <h2 class="subtitle signup-subtitle has-text-centered">
                      This is your visual identity.
                    </h2>
                    <div class="picture-selector">
                      <div class="image-container">
                        <img src="/img/avatars/svg/vuero-1.svg" alt="" />
                        <div class="upload-button" role="button" tabindex="0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            data-icon="feather:plus"
                            class="iconify iconify--feather"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 5v14m-7-7h14"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="divider-container">
                    <div class="divider"><span>Or select an avatar</span></div>
                  </div>
                  <div class="avatar-carousel avatar-selector">
                    <div
                      class="carousel-item active"
                      role="button"
                      tabindex="0"
                    >
                      <div class="image-wrapper">
                        <img src="/img/avatars/svg/vuero-1.svg" alt="" />
                      </div>
                    </div>
                    <div class="carousel-item" role="button" tabindex="0">
                      <div class="image-wrapper">
                        <img src="/img/avatars/svg/vuero-2.svg" alt="" />
                      </div>
                    </div>
                    <div class="carousel-item" role="button" tabindex="0">
                      <div class="image-wrapper">
                        <img src="/img/avatars/svg/vuero-3.svg" alt="" />
                      </div>
                    </div>
                    <div class="carousel-item" role="button" tabindex="0">
                      <div class="image-wrapper">
                        <img src="/img/avatars/svg/vuero-4.svg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div class="button-wrap is-centered has-text-centered">
                    <button
                      type="button"
                      aria-hidden="false"
                      class="button button v-button is-rounded is-big is-lower is-primary"
                    >
                      <span> Continue </span>
                    </button>
                  </div>
                </form>
              </div>
              <div class="columns signup-columns is-hidden">
                <div class="column is-4 is-offset-4 username-form">
                  <h1 class="title is-5 signup-title has-text-centered">
                    Pick a username
                  </h1>
                  <h2 class="subtitle signup-subtitle has-text-centered">
                    Your username is how others will find you on Vuero so pick a
                    good one. You can change it later.
                  </h2>
                  <form class="signup-form">
                    <div class="columns is-multiline">
                      <div class="column is-12">
                        <div class="field">
                          <div data-v-c160acf4="" class="control">
                            <input
                              id="v-field-10"
                              class="input v-input"
                              name="v-field-10"
                              true-value="true"
                              false-value="false"
                              type="text"
                              autocomplete="username"
                            /><label
                              class="auth-label"
                              for="v-field-10"
                              role="button"
                              tabindex="0"
                              >Username</label
                            ><!----><!---->
                          </div>
                        </div>
                      </div>
                      <div class="column is-12">
                        <div class="field">
                          <div data-v-c160acf4="" class="control">
                            <input
                              id="v-field-11"
                              class="input v-input"
                              name="v-field-11"
                              true-value="true"
                              false-value="false"
                              type="password"
                              autocomplete="new-password"
                              aria-autocomplete="list"
                            /><label
                              class="auth-label"
                              for="v-field-11"
                              role="button"
                              tabindex="0"
                              >Password</label
                            ><!----><!---->
                          </div>
                        </div>
                      </div>
                      <div class="column is-12">
                        <div class="field">
                          <div data-v-c160acf4="" class="control">
                            <input
                              id="v-field-12"
                              class="input v-input"
                              name="v-field-12"
                              true-value="true"
                              false-value="false"
                              type="password"
                              autocomplete="new-password"
                            /><label
                              class="auth-label"
                              for="v-field-12"
                              role="button"
                              tabindex="0"
                              >Confirm Password</label
                            ><!----><!---->
                          </div>
                        </div>
                      </div>
                      <div class="column is-12">
                        <div class="field">
                          <div data-v-c160acf4="" class="control has-switch">
                            <label
                              class="label"
                              for="v-field-13"
                              role="button"
                              tabindex="0"
                              >Send me marketing and transaction emails</label
                            >
                            <div class="" checked="">
                              <label
                                class="form-switch is-success"
                                for="v-field-13"
                                role="button"
                                tabindex="0"
                                ><input
                                  id="v-field-13"
                                  class="is-switch"
                                  name="v-field-13"
                                  true-value="true"
                                  false-value="false"
                                  type="checkbox"
                                  value="" /><i aria-hidden="true"></i></label
                              ><!---->
                            </div>
                            <!----><!---->
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="button-wrap is-centered has-text-centered">
                      <button
                        type="submit"
                        primary=""
                        aria-hidden="false"
                        class="button button v-button is-rounded is-big is-lower is-primary"
                      >
                        <span> Done </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="signup-footer">
        <div class="container">
          <div class="footer-inner">
            <label class="dark-mode" tabindex="0" role="button"
              ><input data-cy="dark-mode-toggle" type="checkbox" /><span></span
            ></label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
