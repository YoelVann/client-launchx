<template>
  <div class="submit-form">
    <div v-if="!submitted">
    <h3>Nuevo Mission Commander</h3>
      <div class="form-group">
        <label for="title">Nombre </label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="mcommander.name"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="title">Username</label>
        <input
          type="text"
          class="form-control"
          id="username"
          required
          v-model="mcommander.username"
          name="username"
        />
      </div>
      <div class="form-group">
        <label for="title">Stack</label>
        <input
          type="text"
          class="form-control"
          id="stack"
          required
          v-model="mcommander.mainStack"
          name="stack"
        />
      </div>
      <button @click="saveMissionCommander" class="btn btn-success">Agregar</button>
    </div>
    <div v-else>
      <h4> Mission Commander creado exitosamente. </h4>
      <button class="btn btn-success" @click="newMissionCommander">Add</button>
    </div>
  </div>
</template>

<script>
import MissionCommanderService from "../services/MissionCommanderService";
export default {
  name: "add-mission-commander",
  data() {
    return {
      mcommander: {
        id: null,
        name: "",
        username: "",
        mainStack: "",
      },
      submitted: false
    };
  },
  methods: {
    saveMissionCommander() {
      var data = {
        name: this.mcommander.name,
        username: this.mcommander.username,
        mainStack: this.mcommander.mainStack
      };
      MissionCommanderService.create(data)
        .then(response => {
          this.mcommander.id = response.data.id;
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    newMissionCommander() {
      this.submitted = false;
      this.mcommander = {};
    }
  }
};
</script>
