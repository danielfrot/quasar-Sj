<template>
  <q-page class="container">
    <div class="row q-pa-sm">
      <div class="col-lg-2 col-md-3 col-sm-4 col-xs-12 q-pa-sm"  v-for="(foragido, index) in foragidos" :key="index">
        <q-card class="my-card fit" style="width: 200px; min-height: 20rem">
          <img :src="'http://187.4.67.70/sipe/public/'+foragido.arquivo_foto">

          <q-card-section>
            <!-- <div class="text-h6">{{ foragido.nomeapenado }}</div> -->
            {{ foragido.nomeapenado }}
          </q-card-section>

          <div class="absolute-bottom">
            <q-btn class="full-width" color="primary" @click="detalhar({ id:foragido.idApen, nome:foragido.nomeapenado, processo:foragido.numeroprocesso, imagem:'http://187.4.67.70/sipe/public/'+foragido.arquivo_foto})">Detalhes</q-btn>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'PageIndex',
  mounted () {
    this.setForagido()
  },
  computed: {
    ...mapState('Foragidos', ['foragidos'])
  },
  methods: {
    ...mapActions('Foragidos', ['setForagido']),
    detalhar (conteudo) {
      this.$router.push({ name: 'detalhes', params: { informacoes: conteudo } })
    }
  }
}
</script>
<style scoped>
img {
  width: 200px;
  height: 200px;
  object-fit: contain;
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
}
</style>
