<template>
  <div class="col-pos">
    <md-content class="left">
      <span>
      Описание: простое приложение, использующее взаимодействие с сервером. <br/>
      Данные по карточкам получаются с бэка по REST API. <br/>
      Данные по случайным людям c API https://randomuser.me/api <br/>
      </span>

      <md-button class="md-raised md-primary" @click="addRandomPerson">Добавить случайного человека</md-button>
    </md-content>

    <div style="height: 100%; text-align: left">
      <md-table v-model="contacts" md-card md-fixed-header @md-selected="toggleSelect">
        <md-table-toolbar style="text-align: center">
          <h1 class="md-title">Контакты</h1>
        </md-table-toolbar>

        <md-table-row slot="md-table-row" :class="getClass(item)" md-selectable="single"
                      slot-scope="{ item }">
          <md-table-cell md-label="ID" md-numeric>{{ item.id }}</md-table-cell>
          <md-table-cell md-label="Имя">{{ item.name }}</md-table-cell>
          <md-table-cell md-label="Почта">{{ item.email }}</md-table-cell>
          <md-table-cell md-label="Телефон">{{ item.phone }}</md-table-cell>
          <md-table-cell md-label="Дата создания" md-date>
            {{item.createdDate ? new Date(item.createdDate).toLocaleString() : ""}}
          </md-table-cell>
          <md-table-cell md-label="" class="col-100px">
            <md-button v-if="item.id === selected.id"
                       @click="deleteContact(item)"
                       class="md-icon-button md-primary">
              <md-icon>delete</md-icon>
            </md-button>
          </md-table-cell>
        </md-table-row>
      </md-table>
    </div>
    <md-content>
      <span class="right">Харламова У. ПИ3-1</span>
    </md-content>
  </div>

</template>

<script>
  import axios from 'axios';

  export default {
    name: 'ContactList',
    data: () => ({
      contacts: [],
      selected: {},
      filter: '',
      orderBy: 'DESC',
      orderCol: 'id',
      // vue material table doesnt support pagination
      pageSize: 150,
      pageNumber: 0
    }),
    methods: {
      updateData() {
        const path = '/api/contacts';
        const params = {
          sortColumn: this.orderCol, sortDirection: this.orderBy, filter: this.filter,
          pageSize: this.pageSize, pageNumber: this.pageNumber
        };
        axios.get(path, {params: params})
          .then((resp) => {
            this.contacts = resp.data.data;
            this.$forceUpdate();
          })
          .catch((error) => {
            console.error(error);
          });
      },
      getClass(item) {
        return {
          'blue-back': this.selected !== {} && item && item.id === this.selected.id,
        }
      },

      toggleSelect(item) {
        if (this.selected !== {} && item && this.selected.id === item.id) {
          this.selected = null;
        } else {
          this.selected = item;
        }
      },

      deleteContact(item) {
        const path = `/api/contacts/${item.id}`;
        axios.delete(path)
          .then(() => {
            this.updateData();
            this.selected = {}
          })
          .catch(err => console.log(err))
      },
      addRandomPerson() {
        const pathUserApi = '/user-api';
        const pathContactApi = '/api/contacts';
        axios.get(pathUserApi)
          .then((resp) => {
            const nameObj = resp.data.results[0].name;
            const name = `${nameObj.title} ${nameObj.first} ${nameObj.last}`;
            const phone = resp.data.results[0].phone;
            const email = resp.data.results[0].email;
            const body = {name: name, email: email, phone: phone};
            axios.post(pathContactApi, body)
              .then(() => this.updateData())
              .catch(err => console.log(err))
          })
          .catch((err) => console.log(err))
      }
    },
    created() {
      this.updateData();
    },
  };
</script>

<style scoped>
  .col-100px {
    width: 100px;
  }

  .right {
    float: right;
    margin-right: 10px;
    margin-top: 10px;
    font-style: italic;
  }

  .left {
    float: left;
    margin-left: 30px;
  }

  .col-pos {
    display: flex;
    flex-direction: column;
  }
</style>
