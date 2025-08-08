import { defineStore } from "pinia";
import { Quests } from "../lib/quests-source.ts";
import quizzData from "../lib/dataSource.json";

const quizz_assets_data = new Quests();

export const useQuizz1Store = defineStore("quizz1Store", {
  state: () => ({
    isKrzyzyk1: false,
    isKrzyzyk2: false,
    ifButton_dalej: false,
    ifOdpowiedz_dobrze: false,
    ifButtonDalejDobrze: false,
    ifOdpowiedzZle: false,
    ifButtonDalejZle: false,
    czyOodpowiedzPoprawna: false,
    czyOdpowiedzZla: false,
    planszeTlo: [
      "planszaQuizz1nr1",
      "planszaQuizz1nr2",
      "planszaQuizz1nr3",
      "planszaQuizz1nr4",
      "planszaQuizz1nr5",
      "planszaQuizz1nr6",
      "planszaQuizz1nr7",
      "planszaQuizz1nr8",
      "planszaQuizz1nr9",
      "planszaQuizz1nr10",
    ],

    numerPlanszy: 4,
  }),
  getters: {},
  actions: {
    pokazPlansze(krokNaPlanszy: number): number {
      console.log("krok na planszy" + krokNaPlanszy);
      console.log(
        "plansza nr" + quizz_assets_data.pokaz_zadanie_2(krokNaPlanszy)?.pytanie
      );

      let quizzToFind: any;
      for (let n = 0; n < quizzData.quizzy1.length; n++) {
        if (quizzData.quizzy1[n].id === krokNaPlanszy) {
          quizzToFind = quizzData.quizzy1[n];
        }
      }
      return quizzToFind.pytanie;
      //return quizz_assets_data.pokaz_zadanie_2(krokNaPlanszy)?.pytanie;
    },

    pokazZestaw(krokNaPlanszy: number) {
      let zestawToFind: any;
      for (let n = 0; n < quizzData.quizzy1.length; n++) {
        if (quizzData.quizzy1[n].id === krokNaPlanszy) {
          zestawToFind = quizzData.quizzy1[n];
        }
      }
      return zestawToFind;
    },

    poZaznaczeniu() {
      this.isKrzyzyk1 = true;
      this.isKrzyzyk2 = false;
      this.ifButton_dalej = true;
    },

    sprawdzOdpowiedz() {
      if (this.czyOodpowiedzPoprawna === true) {
        console.log("dobrze!!!");
        this.ifOdpowiedz_dobrze = true;
        this.isKrzyzyk1 = false;
        this.isKrzyzyk2 = false;
        this.ifButton_dalej = false;
        this.ifButtonDalejDobrze = true;
      }
      if (this.czyOodpowiedzPoprawna === false) {
        console.log("zle!!!");
        this.ifOdpowiedzZle = true;
        this.isKrzyzyk1 = false;
        this.isKrzyzyk2 = false;
        this.ifButton_dalej = false;
        this.ifButtonDalejZle = true;
      }
    },
    resetQuizz() {
      this.isKrzyzyk1 = false;
      this.isKrzyzyk2 = false;
      this.ifOdpowiedzZle = false;
      this.ifOdpowiedz_dobrze = false;
      this.ifButtonDalejZle = false;
      this.ifButtonDalejDobrze = false;
    },
  },
});
