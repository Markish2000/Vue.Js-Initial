const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const message = ref("I'm Batman");
    const author = ref('Batman');

    const changeQuote = () => {
      message.value = 'Hola, soy Goku';
      author.value = 'Goku';
    };

    return { author, changeQuote, message };
  },
});

app.mount('#myApp');
