<template>
  <div class="hello">
    <p v-if="errors.length">
      <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
      <ul>
        <li v-for="(error, i) in errors" :key="i">{{ error }}</li>
      </ul>
    </p>
    <form @submit="checkForm">
      <input type="text" v-model="dados.nome" placeholder="Nome">
      <br>
      <input type="text" v-model="dados.sobreNome" placeholder="Sobrenome">
      <br>
      <input type="email" v-model="dados.email" placeholder="Email">
      <br>
      <input type="text" v-model="dados.telefone" placeholder="Telefone">
      <br>
      <span>Pessoa Juridica:</span>
      <br>
      <input type="radio" value="false" v-model="juridica">
      <label for="one">Não</label>
      <br>
      <input type="radio" value="true" v-model="juridica">
      <label for="two">Sim</label>
      <br>
      <input v-if="!juridica" type="text" v-model="dados.cpf" placeholder="CPF">
      <input v-if="juridica" type="text" v-model="dados.cnpj" placeholder="CNPJ">
      <br>
      <button>Salvar</button>
    </form>
    <Table :items="lista" />
  </div>
</template>

<script>
import Table from './Table.vue'
export default {
  name: 'principal',
  components: {
    Table
  },
  data () {
    return {
      errors: [],
      juridica: false,
      lista: [],
      dados: {nome: '', sobreNome: '', email: '', telefone: '', cpf: '', cnpj: ''}
    }
  },
  methods: {
    checkForm: function (e) {
      this.errors = []

      if (!this.dados.nome) {
        this.errors.push('O nome é obrigatório.')
      }

      if (!this.dados.email) {
        this.errors.push('O email é obrigatório.')
      }

      if (!this.dados.telefone) {
        this.errors.push('O Telefone é obrigatório.')
      }

      if (!this.dados.cpf && !this.juridica) {
        this.errors.push('O CPF é obrigatório.')
      } else if (!this.dados.cnpj && this.juridica){
        this.errors.push('O CNPJ é obrigatório.')
      }

      if (!this.errors.length) {
        this.lista.push({...this.dados})
        this.reset()
      }
      e.preventDefault()
    },
    reset: function () {
      this.dados = {nome: '', sobreNome: '', email: '', telefone: '', cpf: '', cnpj: ''}
    }
  }
}
</script>
<style scoped>
input {
  font-size: 15px;
  padding: 2px;
  margin: 5px 0px;
}
ul {
  list-style: none;
  background: #f78787;
  max-width: 300px;
  display: block;
  margin: 5px auto;
  padding: 4px 0px;
}
li {
  padding: 4px 0px;
}
button {
  padding: 5px 41px;
  background: #37712b;
  border: 0px;
  color: #fff;
  margin-bottom: 20px;
}
</style>
