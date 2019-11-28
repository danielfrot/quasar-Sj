<template>
  <q-page padding>
    <h4>Detalhes do Apenado</h4>
    <!-- <a href="#" value='Voltar' onclick='history.go(-1)'> <i class="icofont icofont-undo"> </i> Voltar </a> -->
      <q-page-sticky position="top-right" :offset="[18, 18]">
        <q-btn round color="negative" icon="arrow_upward" class="rotate-270" onclick='history.go(-1)' />
      </q-page-sticky>
      <ul class="q-pa-md">
        <li><b>id:</b> {{ informacoes.id }}</li>
        <li><b>Nome:</b> {{ informacoes.nome }}</li>
        <li><b>Processo:</b> {{ informacoes.processo }}</li>
      </ul>
    <div class="q-pa-md">
    <q-table
      title="Crimes cometidos"
      :data="data"
      :columns="columns"
      row-key="name"
    />
  </div>
  </q-page>
</template>

<script>
export default {
  name: 'Detalhes',
  props: {
    informacoes: {
      type: Object
    }
  },
  data () {
    return {
      columns: [
        {
          name: 'id',
          required: true,
          label: 'id',
          align: 'left',
          field: 'id',
          format: val => `${val}`,
          sortable: true
        },
        { name: 'nome', align: 'center', label: 'nome', field: 'nome', sortable: true },
        { name: 'processo', label: 'processo', field: 'processo', sortable: true },
        { name: 'imagem', label: 'imagem', field: 'imagem' }
      ],
      data: [
        {
          id: this.informacoes.id,
          nome: this.informacoes.nome,
          processo: this.informacoes.processo,
          imagem: this.informacoes.imagem
        }
      ]
    }
  }
}
</script>
