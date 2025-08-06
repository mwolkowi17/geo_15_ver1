import { defineStore } from "pinia";

export const useMainCompStore = defineStore("mianComp1", {
  state: () => ({
    IfStart: true,
    IfIsntruction: false,
    IfLevelOneChoices: false,
    IfMainComp1: false,
  }),
  getters: {},
  actions: {
    changeStart() {
      this.IfStart = !this.IfStart;
      this.IfIsntruction = !this.IfIsntruction;
    },
    changeLeveOneChoice() {
      this.IfIsntruction = !this.IfIsntruction;
      this.IfLevelOneChoices = !this.IfLevelOneChoices;
    },
    startSceneMain1() {
      this.IfLevelOneChoices = !this.IfLevelOneChoices;
      this.IfMainComp1 = !this.IfMainComp1;
    },
  },
});
