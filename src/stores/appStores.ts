import { defineStore } from "pinia";

export const useMainCompStore = defineStore("mianComp1", {
  state: () => ({
    IfStart: false,
    IfIsntruction: false,
    IfLevelOneChoices: false,
    IfMainComp1: true,
    //flagi sterujące focusem w komponentach
    ifInstructionFocusOn: false,
    IfLevelOneChoicesFocusOn: false,
  }),
  getters: {},
  actions: {
    changeStart() {
      this.IfStart = false;
      this.IfIsntruction = true;
    },
    changeStartFocus() {
      this.ifInstructionFocusOn = !this.ifInstructionFocusOn;
      setTimeout(() => {
        this.IfStart = false;
        this.IfIsntruction = true;
      }, 500);
    },
    changeLeveOneChoice() {
      this.IfIsntruction = !this.IfIsntruction;
      this.IfLevelOneChoices = !this.IfLevelOneChoices;
    },
    changeLeveOneChoiceFocus() {
      this.IfIsntruction = !this.IfIsntruction;
      this.IfLevelOneChoices = !this.IfLevelOneChoices;
      this.IfLevelOneChoicesFocusOn = !this.IfLevelOneChoicesFocusOn;
    },
    startSceneMain1() {
      this.IfLevelOneChoices = !this.IfLevelOneChoices;
      this.IfMainComp1 = !this.IfMainComp1;
    },
  },
});
