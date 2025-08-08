import { defineStore } from "pinia";
import { metodyPomocnicze } from "../lib/metody-pomocnicze";
import gameData from "../lib/dataSource.json";
export const useScene1Store = defineStore("scene1Store", {
  state: () => ({
    ifWidokKostki: true,
    isSet1: false,
    isSet2: false,
    isSet3: false,
    isSet4: false,
    isSet5: false,
    isSet6: false,
    ifRzucKostka: true,
    wyrzuconaWartoscKostki: "",
    pionek_left: 30,
    pionek_top: 330,
    kontrolka_ruch_na_planszy: true,
    krok_gracz1_na_planszy: 0,
    pozycje_pionka_gracza1: gameData.pozycja_pionka,
    ifWidokQuizz: false,
    ifWidokTrap: false,
  }),

  getters: {},
  actions: {
    kostka_click() {
      this.ifRzucKostka = false; //  ukryj przycisk rzuć kostką
      //========================================================================================
      let i = 0; //  set your counter to 0
      //========================================================================================
      this.ifWidokKostki = true;
      console.log("rzut");
      let x = metodyPomocnicze.rzucaj();
      this.wyrzuconaWartoscKostki = "Kostka - ilość oczek: " + (x + 1);
      let wynik_rzutu = x;
      console.log(x);
      let kolekcja_widoków_kostki = [false, false, false, false, false, false];
      for (let i = 0; i < 6; i++) {
        if (i === x) {
          kolekcja_widoków_kostki[i] = true;
        } else {
          kolekcja_widoków_kostki[i] = false;
        }

        this.isSet1 = kolekcja_widoków_kostki[0];
        this.isSet2 = kolekcja_widoków_kostki[1];
        this.isSet3 = kolekcja_widoków_kostki[2];
        this.isSet4 = kolekcja_widoków_kostki[3];
        this.isSet5 = kolekcja_widoków_kostki[4];
        this.isSet6 = kolekcja_widoków_kostki[5];
      }

      console.log(kolekcja_widoków_kostki);
      console.log(i);
      console.log(wynik_rzutu);

      let ruch_lokalny = 0;
      // //!!============================ruch pionka loop =========================================
      const myLoopPionek = (
        arg_A: string,
        arg_B: number[][],
        arg_C: number
      ) => {
        //  create a loop function
        console.log("loop");
        setTimeout(() => {
          //  call a 1s setTimeout when the loop is called

          this.pionek_left = arg_B[arg_C + i][0];
          this.pionek_top = arg_B[arg_C + i][1];

          //robocze ustawienie pozycji pionka na planszy dla celów ustwień bibliotek
          // pionek_left.value = arg_B[1][0]
          // pionek_top.value = arg_B[1][1]

          //console.log(arg_B)
          console.log(arg_C);
          console.log(arg_B[arg_C + i]);

          //arg_A.setPosition(arg_B[arg_C + i][0], arg_B[arg_C + i][1]);

          if (ruch_lokalny >= 15) {
            console.log("Zwycięstwo!");
            this.kontrolka_ruch_na_planszy = false;
            console.log("wygrałeś!!!");
            //wywolanie_sceny_koncowej();
          }

          ruch_lokalny++;

          i++; //  increment the counter

          if (i <= wynik_rzutu && ruch_lokalny <= 15) {
            myLoopPionek(arg_A, arg_B, arg_C); //  ..  again which will trigger another
          } else {
            //dodanie_krokow();
            this.krok_gracz1_na_planszy =
              this.krok_gracz1_na_planszy + wynik_rzutu + 1;
            pulapka_czy_quizz();
          }

          //  ..  setTimeout()
        }, 1000);
      };

      if (this.kontrolka_ruch_na_planszy === true) {
        //  start the loop
        myLoopPionek(
          "postac1",
          this.pozycje_pionka_gracza1,
          this.krok_gracz1_na_planszy
        );

        console.log("krok na planszy: " + this.krok_gracz1_na_planszy);
      }

      // if (kontrolka_ruch_na_planszy === true) {
      //   //  start the loop
      //   myLoopPionek(postac1, pozycje_pionka_gracza1, krok_gracz1_na_planszy);

      //   console.log("krok na planszy: " + krok_gracz1_na_planszy.value);
      // }

      // //instancja obieku odpowiadającego za pułapki
      // const trap = new Traps();

      const pulapka_czy_quizz = () => {
        console.log("sprawdzam czy pułapka albo quizz");
        console.log(i);
        console.log("wynik rzutu: " + wynik_rzutu);
        console.log(
          "kontrolka ruch na planszy: " + this.kontrolka_ruch_na_planszy
        );
        //if (i === (wynik_rzutu+1) && kontrolka_ruch_na_planszy === true) {
        if (this.kontrolka_ruch_na_planszy === true) {
          console.log("pulapka albo quizz!!!");
          console.log("krok gracza na planszy: " + this.krok_gracz1_na_planszy);
          //  tu w momencie kiedy gracz zanjdzie się na polu pułapka będzie go cofało a jak nie to odpala quizz
          if (gameData.pulapki.includes(this.krok_gracz1_na_planszy)) {
            console.log("wpadka");
            //pokazuje planszę pułapki
            setTimeout(() => {
              this.ifWidokTrap = true;
              this.ifRzucKostka = false;
            }, 1000);
            //   const sound_cofasz = new Audio(
            //     new URL("../assets/zla_odp.mp3", import.meta.url).href
            //   );
            //   sound_cofasz.play();
            // }, 1000);
          } else {
            console.log("quiz");
            setTimeout(() => {
              this.ifWidokQuizz = true;
              this.ifRzucKostka = false;
              console.log("pokazuję quizz");
            }, 1000);
          }
        }
      };

      // const wywolanie_sceny_koncowej = () => {
      //   console.log("wywołanie planszy wyboru etapu nr 2");
      //   emit("koniec-etap1");
      // };
    },
    koniecPułapki() {
      this.krok_gracz1_na_planszy = this.krok_gracz1_na_planszy - 2;
      this.pionek_left =
        this.pozycje_pionka_gracza1[this.krok_gracz1_na_planszy - 1][0];
      this.pionek_top =
        this.pozycje_pionka_gracza1[this.krok_gracz1_na_planszy - 1][1];

      this.ifWidokTrap = false;
      this.ifRzucKostka = true;
    },
  },
});
