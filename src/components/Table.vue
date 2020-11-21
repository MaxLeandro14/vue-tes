<template>
  <div class="tab">
    <table style="width:100%">
      <template>
        <tr>
        <th>Nome Completo</th>
        <th>Email</th>
        <th>telefone</th>
        <th>CPF</th>
        <th>CNPJ</th>
        <th>Opção</th>
        </tr>
      <tr v-for="(item, i) in items" :key="i">
        <td>{{item.nome + ' ' + item.sobreNome}}</td>
        <td>{{item.email}}</td>
        <th>{{item.telefone}}</th>
        <th>{{item.cpf}}</th>
        <th>{{item.cnpj}}</th>
        <td><span @click="excluir(i)">Exluir</span> <span @click="editar(i)">Editar</span></td>
      </tr>
		</template>
	</table>
  </div>
</template>

<script>
export default {
  name: 'Tabela',
  props: {
  	items: {type: Array, required: true}
  },
  data () {
    return {
    }
  },
  methods: {
  	excluir: function (i) {
  		var vm = this
  		this.items.forEach(function(el, index) {
      	if(index === i)
        	vm.items.splice(index, 1);
      })
  	},
  	editar: function (i) {

  	}
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
