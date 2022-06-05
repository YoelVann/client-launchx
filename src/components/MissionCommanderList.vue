<template>
  <div class="list row">
    <div class="col-md-6">
      <h4> Mission Commanders Actuales </h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(mcommander, index) in mcommanders"
          :key="index"
          @click="setActiveMissionCommander(mcommander, index)"
        >
          {{ mcommander.username }}
        </li>

      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentMcommander">
        <h4>Mission Commander</h4>
        <div>
          <br><label><strong>Nombre:</strong></label> {{ currentMcommander.name}}
          <br><label><strong>Username:</strong></label> {{ currentMcommander.username}}
          <br><label><strong>Stack:</strong></label> {{ currentMcommander.mainStack}}
        </div>
        <router-link :to="'/missionCommanders/' + currentMcommander.id" class="btn btn-info"> Editar</router-link>
      </div>
      <div v-else>
        <br />
        <p> Selecciona un Mission Commander.</p>
      </div>
    </div>
  </div>
</template>
<script>
    import MissionCommanderService from "../services/MissionCommanderService";

    export default {
    name: "mission-commander-list",
    data() {
        return {
        tutorials: [],
        mcommanders: [],
        currentTutorial: null,
        currentMcommander: null,
        currentIndex: -1,
        title: "",
        mcommanderId: ""
        };
    },
    methods: {
        getAllMissionCommanders(){
        MissionCommanderService.getAll()
            .then(response => {
            this.mcommanders = response.data;
            })
            .catch(e => {
            console.log(e);
            });
        },
        setActiveMissionCommander(missionCommander, index) {
        this.currentMcommander = missionCommander;
        this.currentIndex = missionCommander? index : -1;
        }
    },
    mounted() {
        this.getAllMissionCommanders();
    }
    }
</script>
